import { Container, Grid, Card, Button, Box, Typography, TextField, FormControlLabel, Link, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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


    const handleSubmit = (e) => {
        e.preventDefault();

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
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="filled"
                    size="small"
                    margin="normal"
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
                            <Link href="#" variant="body2">
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