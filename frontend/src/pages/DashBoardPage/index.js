import { useState, } from 'react';
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as React from 'react';
import NavBar from '../../components/NavBar';
import QuizForm from '../../components/DashBoard/QuizForm';
import QuestionForm from '../../components/DashBoard/QuestionForm';
import Profile from '../../components/Profile';
import StudentReport from '../../components/StudentReport';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'space-around'
    },
    button: {
    },
    headerTitle: {
        fontFamily: 'Staatliches',
        color: '#0B5688',
        letterSpacing:'1px',
        margin: '20px 0'
    },
    paper: {
        margin: "15px 0",
        padding: "15px"
    }
}))

const Dashboard = ({profile, fetchProfile}) => {

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
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>My Student</Typography>
                        {profile.students?.map((student, index) => {
                            return(
                                <div>
                                    <Button 
                                        className={classes.button}
                                        key={index}
                                        onClick={() => {
                                            setStudent(student)
                                            setCreateQuiz(false)
                                            setEditQuiz(false)
                                            setProfileSetting(false)
                                        }}>{student.name}</Button>
                                </div>
                            )
                        })}
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>My Quiz</Typography>
                        <Button
                            className={classes.button} 
                            onClick={()=> {
                                setStudent()
                                setCreateQuiz(true)
                                setEditQuiz(false)
                                setProfileSetting(false)
                            }}><CreateIcon></CreateIcon> Create my quiz</Button>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Profile</Typography>
                        <Button 
                            className={classes.button}
                            onClick={()=> {
                                setStudent()
                                setCreateQuiz(false)
                                setEditQuiz(false)
                                setProfileSetting(true)
                            }}><SettingsIcon></SettingsIcon> setting</Button>
                    </Paper>
                </Grid>

                <Grid xs={9}>
                {student? (<>
                        <StudentReport 
                            student={student}
                            setStudent={setStudent}
                            fetchProfile={fetchProfile}
                            handleStudent={handleStudent}
                            />
                    </>): null }

                    {createQuiz? (<>
                        <QuizForm handleEditQuiz={handleEditQuiz} profile={profile}/>
                    </>) : null }

                    {editQuiz? (<>
                        <QuestionForm 
                            handleCompleteEditQuiz={handleCompleteEditQuiz} 
                            editQuiz={editQuizData}/>
                    </>): null }

                    {profileSetting? (<>
                        <Profile profile={profile} fetchProfile={fetchProfile}/>
                    </>) : null}
                </Grid>
            </Grid>
        </Container>
    </>
    )
}
export default Dashboard