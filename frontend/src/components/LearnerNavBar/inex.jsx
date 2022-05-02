import { AppBar, Toolbar, Button, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {NavLink, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logout from '../../components/Logout';
import * as userService from "../../api/user.service";

const useStyles = makeStyles((theme) => ({
    appbar: {
        // backgroundColor: '#ea624c',
        backgroundColor: '#87BCC7',
        // backgroundColor: '#87c7b2',
        // backgroundColor: '#f5b120',
        cursor: ''
    },
    toolbar: {
        justifyContent:'space-between'
    },
    navlink: {
        textDecoration: 'none',
        color: '#23596D',
        fontSize: '25px',
        fontFamily: 'Staatliches',
        // "&:hover": {
        //     transform: 'scale(1.2)',
        //     cursor: 'pointer'
        // },
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
    const [studentName, setStudentName] = useState("");
    const [studentAvatar, setStudedntAvatar] = useState("")

    const fetchStudent = async () => {
        await userService.getOneStudent(studentId).then((res)=> {
            // setStudentName(res.data.name)
            setStudent(res.data)
            console.log(student)

    })}

    useEffect(()=> {
        fetchStudent()
    }, [])


    return(
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <div className={classes.avatar}>
                    <Avatar src={`image/${student.avatar}.png`} alt={student.name}/>
                    <span className={classes.navlink}>Welcome {student.name}</span>
                </div>
                <span className={classes.navlink}>Reward: {student.reward}</span>
                <span className={classes.navlink}>Daily Progress: 4/10</span>
                <div>
                    <Button to='/student' className={classes.button}>Change Student</Button>
                    <Button href="/dashboard" className={classes.button}>Parent</Button>
                </div>

            </Toolbar>
        </AppBar>
    )
}
export default LearnerNavBar;