import { useState, useEffect } from 'react';
import { Button, Container, Grid, Paper, Divider, IconButton, List, Typography,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import * as React from 'react';
import QuizForm from '../../components/QuizForm';
import QuizListTable from '../../components/QuizListTable';
import NavBar from '../../components/NavBar';

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
        fontSize: '40px',
        fontFamily: 'Staatliches',
        color: '#0B5688',
        letterSpacing:'1px',
        margin: '30px 0'
    },
    // container: {
    //     marginTop: '90px'
    // },
}))

const MyPage = ({profile}) => {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [grade, setGrade] = useState("")
    const [takenQuizzes, setTakenQuizzes] = useState([]);
    const [reward, setReward] = useState(0)

    const [profileSetting, setProfileSetting] = useState(false)
    const [createQuiz, setCreateQuiz] = useState(false)

    const handleStudent = async (studentId) => {
        await userService.getOneStudent(studentId).then((res) => {
            setName(res.data.name)
            setAvatar(res.data.avatar)
            setGrade(res.data.grade)
            setTakenQuizzes(res.data.quizzes)
            setReward(res.data.reward)
            setProfileSetting(false)
            setCreateQuiz(false)
            console.log(takenQuizzes)
        })
        
    }

    return(
        <>
        <NavBar profile={profile}/>
        <Container>
            <Grid container className={classes.gridContainer}>
                <Grid xs={2}>
                    <Paper>

                        <Typography variant='h6'>Students</Typography>
                        {profile.students?.map((student) => {
                            return(
                                <div>
                                    <Button key={student.id} onClick={() => handleStudent(student.id)}>{student.name}</Button>
                                </div>
                            )
                        })}
                    <Divider></Divider>
                    <Typography variant='h6'>My Quiz</Typography>
                    <Button onClick={()=> {
                        console.log("clicked!")
                        setCreateQuiz(true)
                        setProfileSetting(false)
                        setName()
                    }}>Create my own quiz</Button>



                        <Divider></Divider>
                        <Typography variant='h6'>Profile</Typography>
                    <Button onClick={()=> {
                        console.log("clicked!")
                        setProfileSetting(true)
                        setCreateQuiz(false)
                        setName()
                    }}>setting</Button>
                    
                    </Paper>
                </Grid>

                <Grid xs={9}>
                {name? (
                    <>
                    <Paper>
                        <Typography variant='h5'>{name}</Typography>
                        <p>Avatar: {avatar}</p>
                        <p>Grade: {grade} </p>
                        <p>Taken Quizzes : {takenQuizzes.length}</p>
                        <p>Reward: {reward}</p>
                    </Paper>
                    <Paper>
                        <Typography variant='h5'>Recent Quizzes</Typography>
                        {takenQuizzes.map(({quiz, score, id}) => {
                            return(
                                <>
                                <p key={id}>Quiz: {quiz} Score: {score}</p>
                                </>
                            )
                        })}
                    </Paper>
                    </>): null}

                    {createQuiz? (<>
                        <QuizForm />
                    </>) : null }

                    {profileSetting? (<>
                        <h1>Profile setting</h1>
                    </>) : null }
                </Grid>
            </Grid>
        </Container>
    </>
    )
}
export default MyPage