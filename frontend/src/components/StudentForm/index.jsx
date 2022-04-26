import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, Container, Grid, Card, Button, Box, Typography, TextField, Link, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from '../../api/user.service';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%)',
    },
    headerText: {
        fontFamily: 'Viga',
        textAlign: 'center',
        margin: '15px 0'
    },
    // input: {
    //     backgroundColor: '#9ad4c7',
    //     width: '100%',
    // },
    button: {
        margin: '20px auto',
        backgroundColor: '#0B568899',
        borderRadius: '10px',
        fontFamily: 'Viga',
        width: '100px'
    }
}))


const StudentForm = () => {

    const classes = useStyles();
    const [name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [avatar, setAvatar] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        let newStudent = {name, grade, avatar, instuctor : localStorage.getItem('user')}
        console.log(newStudent)
        await userService.createStudent(newStudent).then((res) => {
            console.log(res)
            navigate("/mypage")
            navigate(0)
        })
        .catch(err => console.log(err))
    }

    return (
    <Container maxWidth="xs">
        <Box className={classes.box}>
            <Typography className={classes.headerText} variant="h4">
                Add New Student
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                    className={classes.input}
                    required
                    id="name"
                    label="name"
                    name="name"
                    autoFocus
                    // size="small"
                    margin="normal"
                    value = {name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                <InputLabel>Grade</InputLabel>
                    <Select native value={grade}
                        onChange={(e)=> setGrade(e.target.value)}
                    >
                    <option>select</option>
                    <option value="Pre-K">Pre-K</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="1st Grade">1st Grade</option>
                    <option value="2nd Grade">2nd Grade</option>
                    <option value="3rd Grade">3rd Grade</option>
                    </Select>
                <InputLabel>Avatar</InputLabel>
                    <Select native value={grade}
                        onChange={(e)=> setAvatar(e.target.value)}
                    >
                    <option>select</option>
                    <option value="1">avatar1</option>
                    </Select>
                <div>
                    <Button
                        className={classes.button}
                        type="submit">Add</Button>
                </div>
            </Box>
        </Box>
    </Container>
    )
}

export default StudentForm