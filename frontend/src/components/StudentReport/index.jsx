import { useState } from 'react';
import { Avatar, Grid, Dialog, Box, Button, Paper, Typography, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import StudentEditForm from "../StudentEditForm";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
    gridContainer: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    avatar: {
        maxWidth: '100%'
    },
}))

const StudentReport = ({student, setStudent, fetchProfile}) => {

    const classes = useStyles();
    const [editStudent, setEditStudent] = useState(false)

    const handleClose = () => {
        setEditStudent(false);
    };

    const handleDeleteStudent = async(student) => {
        await userService.destroyStudent(student).then(() => {
            setStudent()
            fetchProfile()
        })
    }



    return (
    <>
        <Paper className={classes.paper}>
            {/* <Grid container className={classes.gridContainer}>
                <Grid item xs={2}>
                    <Typography variant='h5'>{student.name}</Typography>
                </Grid>
                <Grid item xs={9}></Grid>
                <Grid item xe={0.5}>
                    <EditIcon fontSize="small" onClick={()=> {setEditStudent(true)}}></EditIcon>
                </Grid>
                <Grid item xe={0.5}>
                    <DeleteForeverIcon fontSize="small"
                        onClick={()=> {handleDeleteStudent(student.id)}}>
                    </DeleteForeverIcon>
                </Grid>
            </Grid> */}

            <Grid container className={classes.gridContainer}>
                <Grid item xs={2}>
                    <img className={classes.avatar} src={`image/${student.avatar}.png`} alt={`${student.avatar}`} />
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant='h4'>{student.name} </Typography>
                    <Typography align='center' variant='h6'>{student.grade} </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant='h6'>Taken Quizzes</Typography>
                    <Typography align='center' variant='h3'>{student.quizzes?.length}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant='h6'>Reward</Typography>
                    <Typography align='center' variant='h3'>{student.reward}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant='h6'>Level</Typography>
                    <Typography align='center' variant='h3'>{student.level}</Typography>
                </Grid>
                <Grid item xs={0.5}>
                    <EditIcon fontSize="small" onClick={()=> {setEditStudent(true)}}></EditIcon>
                </Grid>
                <Grid item xs={0.5}>
                    <DeleteForeverIcon fontSize="small"
                        onClick={()=> {handleDeleteStudent(student.id)}}>
                    </DeleteForeverIcon>
                </Grid>
            </Grid>
        </Paper>
        
        <Paper className={classes.paper}>
        <TableContainer>
            <Typography variant='h5'>Taken Quizzes</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Difficulty</TableCell>
                        <TableCell align="right">Score</TableCell>
                        <TableCell align="right">Is Completed</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {student.quizzes?.map((takenQuiz, index) => (
                    <TableRow key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{takenQuiz.quiz.title}</TableCell>
                        <TableCell >{takenQuiz.quiz.subject}</TableCell>
                        <TableCell >{takenQuiz.quiz.grade}</TableCell>
                        <TableCell >{takenQuiz.quiz.difficulty}</TableCell>
                        <TableCell align="right">{takenQuiz.score} / {takenQuiz.quiz.questions.length}</TableCell>
                        <TableCell align="right">{takenQuiz.is_completed ? (<span>complete</span>): null}</TableCell>
                        <TableCell align="right">{takenQuiz.created_at}</TableCell>
                    </TableRow>
                )).reverse()}
                </TableBody>
            </Table>
            </TableContainer>
        </Paper>
        
        

        <Dialog open={editStudent} fullWidth='true'>
            <StudentEditForm 
                student={student}
                handleClose={handleClose} 
                />
        </Dialog>
    </>
    )
}

export default StudentReport