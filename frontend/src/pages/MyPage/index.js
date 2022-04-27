import { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid, Drawer, Toolbar, Divider, IconButton, List,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import * as React from 'react';

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
    const [takenQuiz, setTakenQuiz] = useState([]);
    const [reward, setReward] = useState(0)

    const handleStudent = async (studentId) => {
        await userService.getOneStudent(studentId).then((res) => {
            setName(res.data.name)
            setAvatar(res.data.avatar)
            setGrade(res.data.grade)
            setTakenQuiz(res.data.quizzes)
            setReward(res.data.reward)
            console.log(takenQuiz)
        })
        
    }

    return(
        <Container>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={2} >
                    <h1 className={classes.headerTitle}>{profile.username}</h1>
                    <h3>Students</h3>
                    {profile.students?.map((student) => {
                        return(
                            <div>
                                <Button key={student.id} onClick={() => handleStudent(student.id)} className={classes.text}>{student.name}</Button>
                            </div>
                    )
                    })}
                    <h3>Create my own quiz</h3>
                    <h3>Profile setting</h3>
                </Grid>
                <Grid item xs={9}>
                    {name? (
                    <>
                        <h1 className={classes.headerTitle}>{name}</h1>
                        <p>Avatar: {avatar}</p>
                        <p>Grade: {grade} </p>
                        <p>Taken Quizzes : {takenQuiz.length}</p>
                        <p>Reward: {reward}</p>

                        <h2>Recent Quizzes</h2>
                        {takenQuiz.map((quiz) => {
                            return(
                                <>
                                <p>Quiz: {quiz.quiz} Score: {quiz.score}</p>
                                </>
                            )
                        })}
                    </>): null}
                </Grid>
            </Grid>
        </Container>
    )
}
export default MyPage