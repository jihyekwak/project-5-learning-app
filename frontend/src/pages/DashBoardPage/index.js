import { useState, useEffect } from 'react';
import { Card, Dialog, Button, Container, Grid, Paper, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import * as React from 'react';
import NavBar from '../../components/NavBar';
import QuizForm from '../../components/DashBoard/QuizForm';
import QuestionForm from '../../components/DashBoard/QuestionForm';
import Profile from '../../components/Profile';
import StudentEditForm from '../../components/StudentEditForm';
import { Navigate } from 'react-router-dom';
import StartPage from '../StartPage';
import StudentReport from '../../components/StudentReport';

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

    const [profileSetting, setProfileSetting] = useState(false)
    const [createQuiz, setCreateQuiz] = useState(false)
    const [editQuiz, setEditQuiz] = useState(false)
    const [editQuizData, setEditQuizData] = useState()

    const handleStudent = (student) => {
            setCreateQuiz(false)
            setEditQuiz(false)
            setProfileSetting(false)
            setStudent(student)
    }

    const handleEditQuiz = (quiz) => {
        setCreateQuiz(false)
        setEditQuiz(true)
        setEditQuizData(quiz)
    }

    const handleCompleteEditQuiz = () => {
        setEditQuiz(false)
        setCreateQuiz(true)
    }

    return(
        <>
        <NavBar profile={profile}/>
        <Container>
        <Typography variant='h4' className={classes.headerTitle}>Dashboard</Typography>
            <Grid container className={classes.gridContainer}>
                <Grid xs={2}>
                    <Paper>
                        <Typography variant='h6'>Students</Typography>
                        {profile.students?.map((student, index) => {
                            return(
                                <div>
                                    <Button key={index}
                                        onClick={() => {
                                            setStudent(student)
                                            setCreateQuiz(false)
                                            setEditQuiz(false)
                                            setProfileSetting(false)
                                        }}>{student.name}</Button>
                                </div>
                            )
                        })}
                        <Divider></Divider>
                        <Typography variant='h6'>My Quiz</Typography>
                        <Button onClick={()=> {
                            setStudent()
                            setCreateQuiz(true)
                            setEditQuiz(false)
                            setProfileSetting(false)
                        }}>Create my own quiz</Button>

                        <Divider></Divider>
                        <Typography variant='h6'>Profile</Typography>
                        <Button onClick={()=> {
                            setStudent()
                            setCreateQuiz(false)
                            setEditQuiz(false)
                            setProfileSetting(true)
                        }}>setting</Button>
                    </Paper>
                </Grid>

                <Grid xs={9}>
                {student? (<>
                        <StudentReport 
                            student={student}
                            setStudent={setStudent}
                            fetchprofile={fetchprofile}
                            handleStudent={handleStudent}
                            />
                    </>): null }

                    {createQuiz? (<>
                        <QuizForm handleEditQuiz={handleEditQuiz}/>
                    </>) : null }

                    {editQuiz? (<>
                        <QuestionForm 
                            handleCompleteEditQuiz={handleCompleteEditQuiz} 
                            editQuiz={editQuizData}/>
                    </>): null }

                    {profileSetting? (<>
                        <Profile profile={profile}/>
                    </>) : null}
                </Grid>
            </Grid>
        </Container>
    </>
    )
}
export default Dashboard