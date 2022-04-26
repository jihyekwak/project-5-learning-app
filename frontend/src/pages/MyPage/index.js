import { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"

const useStyles = makeStyles((theme) => ({
    grid: {
        justifyContent: 'space-evenly'
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
    }
}))

const MyPage = ({profile}) => {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [takenQuiz, setTakenQuiz] = useState([]);
    const [reward, setReward] = useState(0)

    const handleStudent = async (studentId) => {
        await userService.getOneStudent(studentId).then((res) => {
            setName(res.data.name)
            setAvatar(res.data.avatar)
            setTakenQuiz(res.data.quizzes)
            setReward(res.data.reward)
        })
        
    }

    return(
        <Container>
            <Grid container>
                <Grid item xs={2}>
                    <h1 className={classes.text}>{profile.username}</h1>
                    {profile.students?.map((student) => {
                        return(
                            <div>
                                <Button key={student.id} onClick={() => handleStudent(student.id)} className={classes.text}>{student.name}</Button>
                            </div>
                    )
                    })}
                </Grid>
                <Grid item xs={10}>
                    <h1>My Page</h1>
                    <p>Name: {name}</p>
                    <p>Avatar: {avatar}</p>
                    <p>Taken Quizzes : {takenQuiz.length}</p>
                    <p>Reward: {reward}</p>
                    
                </Grid>
            </Grid>
        </Container>
    )
}
export default MyPage