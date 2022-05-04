import { useState } from 'react';
import { InputLabel, Button, Box, Typography, TextField, DialogTitle, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as authService from '../../../api/auth.service';

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
    },
    link: {
        "&:hover": {
            cursor: 'pointer'
        },
    }
}))


const ProfileEditForm = ({profile, handleProfileEditClose}) => {

    const classes = useStyles();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    let updatedUser = {first_name: firstName, last_name: lastName, username: username, email: email, password: `${profile.password}`}
    const handelEditProfile = async() => {
        await authService.editProfile(profile.id, updatedUser).then((res)=>{
            console.log(res)
        })
    }

    return (
    <>
        <DialogTitle align="center">
            <Typography variant='h5'>Edit {profile.username}</Typography>
        </DialogTitle>
        <Box className={classes.box} component="form" noValidate onSubmit={()=> {handelEditProfile()}} sx={{ mt: 3 }}>
            <InputLabel className={classes.form}>First Name</InputLabel>
            <TextField
                className={classes.form}
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
            <InputLabel className={classes.form}>Last Name</InputLabel>
            <TextField
                className={classes.form}
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
            <InputLabel className={classes.form}>Username</InputLabel>
            <TextField
                className={classes.form}
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
            <InputLabel className={classes.form}>Email</InputLabel>
            <TextField
                className={classes.form}
                fullWidth
                name="email"
                type="email"
                variant="outlined"
                size="small"
                value={email}
                placeholder = {profile.email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <div>
                <Button className={classes.button} variant="contained" type="submit">Edit</Button>
            </div>
            <Link className={classes.link} onClick={handleProfileEditClose}>Cancel</Link>
        </Box>
    </>
    
    )
}

export default ProfileEditForm;