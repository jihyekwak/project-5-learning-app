import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Button, Box, Typography, TextField, Link} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as authService from '../../api/auth.service';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%)',
    },
    headerText: {
        textAlign: 'center',
        margin: '15px 0'
    },
    input: {
        width: '100%',
    },
    button: {
        margin: '20px auto',
        backgroundColor: '#0B568899',
        borderRadius: '10px',
        fontFamily: 'Viga',
        width: '100px'
    }
}))

const Register = () => {

    const classes = useStyles();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPaswordConfirmation] = useState("")
    const navigate = useNavigate()

    const newUser = {first_name: firstName, last_name: lastName, username, password, passworkd_confirmation: passwordConfirmation}
    const handleSubmit = async(e) => {
        e.preventDefault();
        await authService.register(newUser)
        .then((res)=>{
            console.log(res)
            navigate("/login")
            navigate(0)
        })
        .catch(err => console.log(err))
    }


    return(
        <Container maxWidth="xs">
            {/* <CssBaseline /> */}
            <Box className={classes.box}>
            <Typography className={classes.headerText} variant="h4">
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.input}
                            fullWidth
                            autoComplete="given-name"
                            name="first_name"
                            required
                            id="firstName"
                            label="First Name"
                            autoFocus
                            variant="filled"
                            size="small"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.input}
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="last_name"
                            autoComplete="family-name"
                            variant="filled"
                            size="small" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.input}
                            required
                            id="username"
                            label="username"
                            name="username"
                            autoComplete="username"
                            variant="filled" 
                            size="small"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.input}
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            variant="filled"
                            size="small"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.input}
                            required
                            name="password_confirmation"
                            label="Password Confirmation"
                            type="password"
                            id="password_confirmation"
                            autoComplete="new-password"
                            variant="filled"
                            size="small"
                            value={passwordConfirmation}
                            onChange={(e) => setPaswordConfirmation(e.target.value)} 
                        />
                    </Grid>
                </Grid>
                <Button
                    className={classes.button}
                    type="submit">Register</Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    )

}
export default Register;