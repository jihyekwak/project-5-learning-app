import { Container, Grid, Card, Button, Box, Typography, TextField, FormControlLabel, Link, CssBaseline, Avatar,  Checkbox } from "@material-ui/core";
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

const Register = () => {

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

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
                            autoComplete="given-name"
                            name="firstName"
                            required
                            id="firstName"
                            label="First Name"
                            autoFocus
                            variant="filled"
                            size="small"

                            // value={name}
                            // onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.input}
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            variant="filled"
                            size="small" 
 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.input}
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="filled" 
                            size="small"

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

                        />
                    </Grid>
                </Grid>
                <Button
                    className={classes.button}
                    type="submit">Register</Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
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