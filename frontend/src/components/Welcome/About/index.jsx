import { Container, Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        // backgroundColor: '#F7F7EE',
        padding: '20px',
        backgroundColor: '#C3E0E7',
        // backgroundColor: "white",
    },
    headerText : {
        // fontFamily: 'Viga',
        margin:'20px'
    },
    img: {
        width: '100%',
        borderRadius: '20px'
    },
    homepageContainer: {
        marginTop: '-40px',
    },
    grid: {
        margin: '70px 0',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#0B5688',
        margin: '20px 0',
        fontWeight: 'bold',
    },
}
))

const About = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Container className={classes.homepageContainer}>
                <br/><br/>
                <Typography className={classes.headerTitle} variant='h5'>Parent</Typography>
                <Grid container className={classes.grid}>
                    <Grid item xs={5}>
                        <img src="image/dashboard.png" alt="dashboard" className={classes.img}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4' className={classes.headerTitle}>Dashboard Student Report</Typography>
                        <Typography variant='body1'>Parent can see the individual student report at parent dashboard. How many quizzes the learner have taken and can see the all taken quiz list. In the report it shows the score, taken date and the status of completion if the quiz is completed or not.</Typography>
                    </Grid>
                </Grid>

                <Grid container className={classes.grid}>
                    <Grid item xs={6}>
                        <Typography variant='h4' className={classes.headerTitle}>Create Quiz</Typography>
                        <Typography variant='body1'>In the parent dashboard parent can make quizzes and questions. So that their lerner can take customized quizzes.</Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <img src="image/createquiz.png" alt="dashboard" className={classes.img}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About