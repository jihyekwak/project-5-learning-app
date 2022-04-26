import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, Button, Box, Typography, TextField, Link, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as authService from '../../api/auth.service'

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
    input: {
        backgroundColor: '#9ad4c7',
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

const Login = () => {

    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authService.login(username, password).then((res) => {
            console.log(res)
            navigate("/dashboard")
            navigate(0)
        })
        .catch(err => console.log(err))
    }


    return(
        <Container maxWidth="xs">
            {/* <CssBaseline /> */}
            <Box className={classes.box}>
            <Typography className={classes.headerText} variant="h4">
                Log In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                    className={classes.input}
                    required
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    variant="filled"
                    size="small"
                    margin="normal"
                    value = {username}
                    onChange={(e)=> setUsername(e.target.value)}
                    />
                <TextField
                    className={classes.input}
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="filled"
                    size="small"
                    margin="normal"
                    value = {password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                <Button
                    className={classes.button}
                    type="submit">Let's go</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
export default Login;