import { useState, } from 'react';
import { Button, Container, Grid, Paper, Typography, Avatar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import NavBar from '../../components/NavBar';
import QuizForm from '../../components/DashBoard/QuizForm';
import QuestionForm from '../../components/DashBoard/QuestionForm';
import Profile from '../../components/DashBoard/Profile';
import StudentReport from '../../components/DashBoard/StudentReport';
import DashboardHome from '../../components/DashBoard/DashboardHome';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'space-around'
    },
    headerTitle: {
        color: '#0B5688',
        margin: '20px 0',
        fontWeight: 'bold'
    },
    paper: {
        margin: "15px 0",
        padding: "15px"
    }
}))

const Dashboard = ({profile, fetchProfile}) => {

    const classes = useStyles();
    const [student, setStudent] = useState()
    const [dashboardHome, setDashboardHome] = useState(true)
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
        console.log("quiz", quiz)
        console.log("editQuizdata", editQuizData)
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
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <Button
                            onClick={()=> {
                                setStudent()
                                setCreateQuiz(false)
                                setEditQuiz(false)
                                setProfileSetting(false)
                                setDashboardHome(true)
                            }}><Typography variant='body1'>DashBoard Home</Typography>
                        </Button>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant='body1'>My Students</Typography>
                        <Divider></Divider><br />
                        {profile.students?.map((student, index) => {
                            return(
                                <div>
                                    <Button 
                                        key={index}
                                        onClick={() => {
                                            setStudent(student)
                                            setCreateQuiz(false)
                                            setEditQuiz(false)
                                            setProfileSetting(false)
                                            setDashboardHome(false)
                                        }}>
                                        <Avatar src={`image/${student.avatar}.png`} alt={student.grade}/>
                                        <Typography variant='body1'>{student.name}</Typography>
                                    </Button>
                                </div>
                            )
                        })}
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant='body1'>My Quiz</Typography>
                        <Divider></Divider><br />
                        <Button
                            onClick={()=> {
                                setStudent()
                                setCreateQuiz(true)
                                setEditQuiz(false)
                                setProfileSetting(false)
                                setDashboardHome(false)
                            }}><CreateIcon></CreateIcon> <Typography variant='body1'>Create my quiz</Typography></Button>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant='body1'>Profile</Typography>
                        <Divider></Divider><br />
                        <Button 
                            onClick={()=> {
                                setStudent()
                                setCreateQuiz(false)
                                setEditQuiz(false)
                                setProfileSetting(true)
                                setDashboardHome(false)
                            }}><SettingsIcon></SettingsIcon> <Typography variant='body1'>Setting</Typography></Button>
                    </Paper>
                </Grid>

                <Grid item xs={9}>
                    {dashboardHome? <DashboardHome profile={profile} /> : null }

                    {student? (<>
                        <StudentReport 
                            student={student}
                            setStudent={setStudent}
                            fetchProfile={fetchProfile()}
                            handleStudent={handleStudent}
                            />
                    </>): null }

                    {createQuiz? (<>
                        <QuizForm handleEditQuiz={handleEditQuiz} profile={profile}/>
                    </>) : null }

                    {editQuiz? (<>
                        <QuestionForm 
                            handleCompleteEditQuiz={handleCompleteEditQuiz} 
                            editQuizData={editQuizData}/>
                    </>): null }

                    {profileSetting? (<>
                        <Profile profile={profile} fetchProfile={fetchProfile}/>
                    </>) : null }
                </Grid>
            </Grid>
        </Container>
    </>
    )
}
export default Dashboard;