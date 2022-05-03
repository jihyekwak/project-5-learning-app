import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#87BCC7',
        height: '65px'
    },
    toolbar: {
        justifyContent:'space-between',
    },
    navlink: {
        color: '#23596D',
        fontSize: '25px',
        fontFamily: 'Staatliches',
    },
    button : {
        backgroundColor: '#0B568850',
        color: '#0B5688',
        fontFamily: 'Viga',
        fontSize: '15px',
        margin: '15px 10px',
        padding: '10px',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#0B5688',
            color: 'white',
            cursor: 'pointer'
        },
    },
    grid: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: '10px'
    }
}))


const LearnerNavBar = () => {

    const classes = useStyles();
    const {studentId} = useParams();
    const [student, setStudent] = useState("")
    const current = new Date();
    const year = current.getFullYear()
    const month = `${current.getMonth() + 1}`.padStart(2, "0")
    const day = `${current.getDate()}`.padStart(2, "0")
    const date = [year, month, day].join("-")

    const fetchStudent = async () => {
        await userService.getOneStudent(studentId).then((res)=> {
            setStudent(res.data)
    })}

    useEffect(()=> {
        fetchStudent()
    }, [])

    return(
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <div className={classes.avatar}>
                    <Avatar src={`image/${student.avatar}.png`} alt={student.grade}/>
                    <span className={classes.navlink}>Welcome {student.name}</span>
                </div>
                <span className={classes.navlink}>Level: {student.level}</span>
                <span className={classes.navlink}>Reward: {student.reward}</span>
                <span className={classes.navlink}>Daily Progress: {student.quizzes? (student.quizzes.filter(q => q.created_at === date)?.length) : (null)} / 10</span>
                <div>
                    <Button href='/student' className={classes.button}>Change Student</Button>
                    <Button href="/dashboard" className={classes.button}>Parent</Button>
                </div>

            </Toolbar>
        </AppBar>
    )
}
export default LearnerNavBar;