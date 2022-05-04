import { Container, Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        backgroundColor: '#F7F7EE',
        padding: '20px',
        // backgroundColor: '#C3E0E7',
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

const Learners = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Container className={classes.homepageContainer}>
                <br/><br/>
                <Typography className={classes.headerTitle} variant='h5'>Lerners</Typography>
                <Grid container className={classes.grid}>
                    <Grid item xs={5}>
                        <img src="image/quizlist.png" alt="dashboard" className={classes.img}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.headerTitle} variant='h4'>Quiz List</Typography>
                        <Typography variant='body1'>There are several types of quizzes in main subjects including Math, English, Science, Social Studies, Spanish, Korean. Learner can select the custom quizzes their parents created.</Typography>
                    </Grid>
                </Grid>

                <Grid container className={classes.grid}>
                    <Grid item xs={6}>
                    <Typography variant='h4' className={classes.headerTitle}>Take Quiz</Typography>
                        <Typography variant='body1'>Learner can take quizzes in their grade. Learner can see the how many questions correct or incorrect. And after taking quiz, the score is stored and gain the reward. Learner can try again and go back to quiz list. </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <img src="image/quiz.png" alt="dashboard" className={classes.img}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Learners;