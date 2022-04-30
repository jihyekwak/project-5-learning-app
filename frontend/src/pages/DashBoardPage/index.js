import { useState, useEffect } from 'react';
import { Dialog, Button, Container, Grid, Paper, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import * as React from 'react';
import NavBar from '../../components/NavBar';
import QuizForm from '../../components/DashBoard/QuizForm';
import QuestionForm from '../../components/DashBoard/QuestionForm';
import Profile from '../../components/Profile';
import StudentEditForm from '../../components/StudentEditForm';
import { Navigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'space-between'
    },
    button: {
        border: '15px solid #0B568850',
        width: '200px',
        height: '200px',
        borderRadius: '40px',
        fontFamily: 'Viga',
        fontSize: '30px',
        margin: '5px',
        "&:hover": {
            transform: 'scale(1.1)',
            cursor: 'pointer',
            border: '15px solid #0B5688'
        },
    },
    headerTitle: {
        fontFamily: 'Staatliches',
        color: '#0B5688',
        letterSpacing:'1px',
        margin: '20px 0'
    },
    // container: {
    //     marginTop: '90px'
    // },
}))

const Dashboard = ({profile, fetchprofile}) => {

    const classes = useStyles();
    const [student, setStudent] = useState()
    const [takenQuizzes, setTakenQuizzes] = useState([]);

    const [profileSetting, setProfileSetting] = useState(false)
    const [createQuiz, setCreateQuiz] = useState(false)
    const [editQuiz, setEditQuiz] = useState(false)
    const [editQuizData, setEditQuizData] = useState()
    const [editStudent, setEditStudent] = useState(false)
    const [editStudentData, setEditStudentData] = useState()

    const handleStudent = async (studentId) => {
        await userService.getOneStudent(studentId).then((res) => {
            setStudent(res.data)
            setTakenQuizzes(res.data.quizzes)
            setProfileSetting(false)
            setCreateQuiz(false)
            setEditQuiz(false)
        })
        
    }

    const handleEditQuiz = (quiz) => {
        setEditQuiz(true)
        setCreateQuiz(false)
        setEditQuizData(quiz)
        console.log(editQuiz)
        console.log(editQuizData)
    }

    const handleCompleteEditQuiz = () => {
        setEditQuiz(false)
        setCreateQuiz(true)
    }

    const handleEditStudent = (student) => {
        setEditStudent(true)
        setEditStudentData(student)
    }

    const handleDeleteStudent = async(student) => {
        await userService.destroyStudent(student).then(() => {
            setStudent(false)
            fetchprofile()
        })
    }

    const handleClose = () => {
        setEditStudent(false);
    };

    return(
        <>
        <NavBar profile={profile}/>
        <Container>
        <Typography variant='h3' className={classes.headerTitle}>Parent Dashboard</Typography>
            <Grid container className={classes.gridContainer}>
                <Grid xs={2}>
                    <Paper>

                        <Typography variant='h6'>Students</Typography>
                        {profile.students?.map((student, index) => {
                            return(
                                <div>
                                    <Button key={index} onClick={() => handleStudent(student.id)}>{student.name}</Button>
                                </div>
                            )
                        })}
                    <Divider></Divider>
                    <Typography variant='h6'>My Quiz</Typography>
                    <Button onClick={()=> {
                        console.log("clicked!")
                        setCreateQuiz(true)
                        setEditQuiz(false)
                        setProfileSetting(false)
                        setStudent()
                    }}>Create my own quiz</Button>

                        <Divider></Divider>
                        <Typography variant='h6'>Profile</Typography>
                    <Button onClick={()=> {
                        console.log("clicked!")
                        setProfileSetting(true)
                        setCreateQuiz(false)
                        setEditQuiz(false)                        
                        setStudent()
                    }}>setting</Button>
                    
                    </Paper>
                </Grid>

                <Grid xs={9}>
                {student? (
                    <>
                    <Paper>
                        <Typography variant='h5'>{student.name}</Typography>
                        <p>Avatar: {student.avatar}</p>
                        <p>Grade: {student.grade} </p>
                        <p>Taken Quizzes : {takenQuizzes.length}</p>
                        <p>Reward: {student.reward}</p>
                        <Button 
                            variant="contained"
                            type="submit"
                            onClick={()=> {handleEditStudent(student)}}>Edit</Button>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={()=> {handleDeleteStudent(student.id)}}>Delete</Button>
                    </Paper>

                    <Dialog open={editStudent} fullWidth='true'>
                        <StudentEditForm handleClose={handleClose} editStudentData={editStudentData}/>
                    </Dialog>

                    <Paper>
                        <Typography variant='h5'>Recent Quizzes</Typography>
                        {takenQuizzes?.map(({quiz, score}, index) => {
                            return(
                                <>
                                <p key={index}>Quiz: {quiz} Score: {score}</p>
                                </>
                            )
                        })}
                    </Paper>
                    </>): null}

                    {createQuiz? (<>
                        <QuizForm handleEditQuiz={handleEditQuiz}/>
                    </>) : null }

                    {editQuiz? (<>
                        <QuestionForm handleCompleteEditQuiz={handleCompleteEditQuiz} editQuiz={editQuizData}/>
                    </>): null}

                    {profileSetting? (<>
                        <Profile profile={profile}/>
                    </>) : null }
                </Grid>
            </Grid>
        </Container>
    </>
    )
}
export default Dashboard