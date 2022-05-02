import { useState } from 'react';
import { InputLabel, Select, Button, Box, Typography, TextField, Link, CssBaseline, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from '../../api/user.service';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '20px auto',
        backgroundColor: '#0B568899',
        borderRadius: '10px',
        fontFamily: 'Viga',
        width: '100px'
    },
    form: {
        width: '80%',
        margin: '5px 10px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))


const StudentForm = (props) => {

    const classes = useStyles();
    const [name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [avatar, setAvatar] = useState('')

    const handleSubmit = async () => {
        let newStudent = {name, grade, avatar, instuctor : localStorage.getItem('user')}
        console.log(newStudent)
        await userService.createStudent(newStudent).then((res) => {
        })
        .catch(err => console.log(err))
    }

    return (
    <>
        <DialogTitle align="center">
            <Typography variant='h5'>Add Student</Typography>
        </DialogTitle>
        <Box className={classes.box} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                className={classes.form}
                required
                id="name"
                label="name"
                name="name"
                autoFocus
                variant='filled'
                margin="normal"
                value = {name}
                onChange={(e)=> setName(e.target.value)}/>
            <InputLabel className={classes.form}>Grade</InputLabel>
            <Select 
                className={classes.form}
                native value={grade}
                variant='filled'
                onChange={(e)=> setGrade(e.target.value)}>
                <option>select</option>
                <option value="Pre-K">Pre-K</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="1st Grade">1st Grade</option>
                <option value="2nd Grade">2nd Grade</option>
                <option value="3rd Grade">3rd Grade</option>
            </Select>
            <InputLabel className={classes.form}>Avatar</InputLabel>
            <Select 
                className={classes.form}
                native value={avatar}
                variant='filled'
                onChange={(e)=> setAvatar(e.target.value)}>
                <option>select</option>
                <option value="boy_avatar1">Boy Avatar1</option>
                <option value="boy_avatar2">Boy Avatar2</option>
                <option value="boy_avatar3">Boy Avatar3</option>
                <option value="boy_avatar4">Boy Avatar4</option>
                <option value="girl_avatar1">Girl Avatar1</option>
                <option value="girl_avatar2">Girl Avatar2</option>
                <option value="girl_avatar3">Girl Avatar3</option>
                <option value="girl_avatar4">Girl Avatar4</option>
            </Select>
            <div>
                <Button className={classes.button} type="submit">Add</Button>
            </div>
            <Link onClick={props.handleClose}>Cancel</Link>
        </Box>
    </>
    
    )
}

export default StudentForm