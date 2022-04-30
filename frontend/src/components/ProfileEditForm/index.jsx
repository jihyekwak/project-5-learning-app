import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, InputLabel, Select, Button, Box, Typography, TextField, Link, CssBaseline, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from '../../api/user.service';
import * as authService from '../../api/auth.service';

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


const ProfileEditForm = ({profile, fetchProfile, handleClose}) => {

    const classes = useStyles();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    let updatedUser = {first_name: firstName, last_name: lastName, username: username, email: email, password: `${profile.password}`}
    const handelEditProfile = async() => {
        await authService.editProfile(profile.id, updatedUser).then((res)=>{
            // fetchProfile()
        })
        .catch(err => console.log(err))
    }

    return (
    <>
<Box component="form" noValidate onSubmit={()=> handelEditProfile()} sx={{ mt: 3 }}>
            <Typography variant='h5'>Edit {profile.name}</Typography>
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
            <Link onClick={handleClose}>Cancel</Link>
        </Box>
    </>
    
    )
}

export default ProfileEditForm;