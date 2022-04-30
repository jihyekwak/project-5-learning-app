import { Dialog, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from "../../api/user.service"
import * as React from 'react';
import StudentEditForm from "../StudentEditForm";
import { useState } from 'react';

const StudentReport = ({student, setStudent, fetchprofile}) => {

    const [editStudent, setEditStudent] = useState(false)

    const handleClose = () => {
        setEditStudent(false);
    };

    const handleDeleteStudent = async(student) => {
        await userService.destroyStudent(student).then(() => {
            setStudent()
            fetchprofile()
        })
    }

    return (
    <>
        <Paper>
            <Typography variant='h5'>{student.name}</Typography>
            <p>Avatar: {student.avatar}</p>
            <p>Grade: {student.grade} </p>
            <p>Taken Quizzes : {student.quizzes?.length}</p>
            <p>Reward: {student.reward}</p>
            <Button 
                variant="contained"
                type="submit"
                onClick={()=> {setEditStudent(true)}}>Edit</Button>
            <Button
                variant="contained"
                type="submit"
                onClick={()=> {handleDeleteStudent(student.id)}}
                >Delete</Button>
        </Paper>

        <Paper>
            <Typography variant='h5'>Recent Quizzes</Typography>
            {student.quizzes?.map(({quiz, score}, index) => {
                return(
                <>
                    <p key={index}>Quiz: {quiz} Score: {score}</p>
                </>
                )
            })}
        </Paper>

        <Dialog open={editStudent} fullWidth='true'>
            <StudentEditForm 
                student={student}
                handleClose={handleClose} 
                />
        </Dialog>
    </>
    )
}

export default StudentReport