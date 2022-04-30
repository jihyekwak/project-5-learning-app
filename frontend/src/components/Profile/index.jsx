import { useState } from 'react';
import { Box, TextField, Button, Paper, Card, Typography, Grid, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as authService from '../../api/auth.service';
import * as userService from '../../api/user.service';

const useStyles = makeStyles((theme) => ({
    text:{
        fontFamily: 'Viga',
    }
}))

const Profile = ({profile}) => {

    const classes = useStyles();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [studentEdit, setStudentEdit] = useState(false)

    let updatedUser = {first_name: firstName, last_name: lastName, username, email}
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(updatedUser)
        await authService.editProfile(`${profile.id}`, updatedUser)
        .then((res)=>{
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    const handleDelete = async (student) => {
        await userService.destroyStudent(student).then((res) => {
            console.log("student delet button")
            console.log(res)
            
        })
    }

    const handleEdit = () => {
        console.log("student edit button")
        setStudentEdit(true)
    }

    return(
    <>
        {/* <Typography className={classes.headerText} variant="h4">
                Profile Setting
        </Typography> */}
        {/* <Paper> */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <InputLabel>First Name</InputLabel>
                    <TextField
                        autoComplete="given-name"
                        name="first_name"
                        fullWidth
                        required
                        autoFocus
                        variant="outlined"
                        size="small"
                        value={firstName}
                        placeholder = {profile.first_name}
                        onChange={(e) => setFirstName(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Last Name</InputLabel>
                    <TextField
                        required
                        fullWidth
                        name="last_name"
                        autoComplete="family-name"
                        variant="outlined"
                        size="small" 
                        value={lastName}
                        placeholder = {profile.last_name}
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel>Username</InputLabel>
                    <TextField
                        className={classes.input}
                        fullWidth
                        required
                        name="username"
                        autoComplete="username"
                        variant="outlined" 
                        size="small"
                        value={username}
                        placeholder = {profile.username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel>Email</InputLabel>
                    <TextField
                        className={classes.input}
                        fullWidth
                        name="email"
                        type="email"
                        variant="outlined"
                        size="small"
                        value={email}
                        placeholder = {profile.email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Grid>
            </Grid>
            <Button
                className={classes.button}
                variant="contained"
                type="submit">Submit</Button>
        </Box>
        {/* </Paper> */}

            <h4>Student</h4>
            {profile.students?.map((student) => {
                return(
                    // <Card>
                    //     <Grid container>
                    //         <Grid xs={10}>
                    //         <Typography variant='h5'>{student.name}</Typography>
                    //         <p>{student.grade}</p>
                    //         </Grid>
                    //         <Grid xs={2}>
                    //             <Button>Edit</Button>
                    //         </Grid>
                    //     </Grid>
                    // </Card>
                    <>
                    {/* <Grid item xs={12}> */}
                    {/* <InputLabel>Child Name</InputLabel> */}
                    <TextField
                        className={classes.input}
                        // fullWidth
                        disabled
                        name="name"
                        type="text"
                        variant="outlined"
                        size="small"
                        placeholder = {student.name}
                    />
                {/* </Grid> */}
                {/* <Grid item xs={12}> */}
                {/* <InputLabel>Child Grade</InputLabel> */}
                <TextField
                    className={classes.input}
                    // fullWidth
                    disabled
                    name="grade"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder = {student.grade}
                />
                <Button
                className={classes.button}
                variant="contained"
                type="submit"
                onClick={()=> handleEdit(student.id)}>Edit</Button>
                <Button
                className={classes.button}
                variant="contained"
                type="submit"
                onClick={()=> handleDelete(student.id)}>Delete</Button>
            {/* </Grid> */}
            </>
                )
                })}



    </>
    )
}
export default Profile