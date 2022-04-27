import { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid, Paper, Drawer, Toolbar, Divider, IconButton, List,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import * as React from 'react';
import QuizForm from '../../components/QuizForm';
import QuizListTable from '../../components/QuizListTable';

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
        <Container>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={2} >
                    <Paper>
                    <h1 className={classes.headerTitle}>{profile.username}</h1>
                    <h3>Students</h3>
                    {profile.students?.map((student) => {
                        return(
                            <div>
                                <Button key={student.id} onClick={() => handleStudent(student.id)} className={classes.text}>{student.name}</Button>
                            </div>
                    )
                    })}
                    <Button onClick={()=> {
                        console.log("clicked!")
                        setCreateQuiz(true)
                        setProfileSetting(false)
                        setName()
                    }}><h3>Create my own quiz</h3></Button>
                    <Button onClick={()=> {
                        console.log("clicked!")
                        setProfileSetting(true)
                        setCreateQuiz(false)
                        setName()
                    }}><h3>Profile setting</h3></Button>
                    </Paper>
                </Grid>
                <Grid item xs={9}>

                    {name? (
                    <>
                    <Paper>
                        <h1 className={classes.headerTitle}>{name}</h1>
                        <p>Avatar: {avatar}</p>
                        <p>Grade: {grade} </p>
                        <p>Taken Quizzes : {takenQuizzes.length}</p>
                        <p>Reward: {reward}</p>
                    </Paper>
                    <Paper>
                        <h2>Recent Quizzes</h2>
                        {takenQuizzes.map(({quiz, score, id}) => {
                            return(
                                <>
                                <p key={id}>Quiz: {quiz.title} Score: {score}</p>
                                </>
                            )
                        })}
                    </Paper>
                    </>): null}

                    {createQuiz? (<>
                        <h1>CreateQuiz</h1>
                        <QuizForm />
                        <br />
                        <QuizListTable />
                    </>) : null }

                    {profileSetting? (<>
                        <h1>Profile setting</h1>
                    </>) : null }
                </Grid>
            </Grid>
        </Container>
    )
}
export default MyPage