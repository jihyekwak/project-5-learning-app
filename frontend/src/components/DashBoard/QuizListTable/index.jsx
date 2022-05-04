import { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../../api/quiz.service";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
    paperTitle: {
        color: '#0B5688',
        fontWeight: 'bold'
    }
}));

const QuizListTable= (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.fetchQuizzes()
        console.log('fetched quizlist at table')
    }, [] )

    const handleDelete = async (id) => {
        await quizService.destroy(id).then((res) => {
            console.log("deleted")
            props.fetchQuizzes()
        })
    }

    return(
        <TableContainer component={Paper} className={classes.paper}>
            <Typography className={classes.paperTitle} variant="h6">Quiz List</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Subject</TableCell>
                    <TableCell align="right">Grade</TableCell>
                    <TableCell align="right">Difficulty</TableCell>
                    <TableCell align="right">Number of Questions</TableCell>
                    <TableCell align="right">Created_at</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.quizList.filter(q => q.author === props.profile.id).map((quiz) => (
                <TableRow key={quiz.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{quiz.title}</TableCell>
                    <TableCell align="right">{quiz.subject}</TableCell>
                    <TableCell align="right">{quiz.grade}</TableCell>
                    <TableCell align="right">{quiz.difficulty}</TableCell>
                    <TableCell align="right">{quiz.questions.length}</TableCell>
                    <TableCell align="right">{quiz.created_at}</TableCell>
                    <TableCell align="right">

                        <EditIcon onClick={() => {
                            console.log("edit btn")
                            console.log(quiz)
                            props.handleEditQuiz(quiz)}
                            }></EditIcon>
                        <DeleteForeverIcon onClick={()=> handleDelete(quiz.id)}></DeleteForeverIcon>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default QuizListTable;