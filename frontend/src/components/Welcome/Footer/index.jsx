import React from 'react';
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        padding: '50px 70px 20px 70px',
        backgroundColor: '#23596d'
    },
    headerText : {
        margin:'20px'
    },
    textTitle: {
        margin:'10px 0 5px 0',
        fontSize: '15px',
    },
    text: {
        fontSize: '14px',
        margin: '3px auto'
    },
    copyright: {
        fontSize: '15px',
        marginTop : '50px',
    }
}
))

const Footer = () => {

    const classes = useStyles();
  return (
    <Box className={classes.component}>
    <Grid container>
        <Grid xs={4}>
            <Typography variant='h6' className={classes.textTitle}>Subjects</Typography>
            <Typography variant='body1' className={classes.text}>Math</Typography>
            <Typography variant='body1' className={classes.text}>English</Typography>
            <Typography variant='body1' className={classes.text}>Spanish</Typography>
            <Typography variant='body1' className={classes.text}>Korean</Typography>
            <Typography variant='body1' className={classes.text}>Science</Typography>
            <Typography variant='body1' className={classes.text}>Social Studies</Typography>
        </Grid>
        <Grid xs={4}>
            <Typography variant='h6' className={classes.textTitle}>Features</Typography>
            <Typography variant='body1' className={classes.text}>Sign up</Typography>
            <Typography variant='body1' className={classes.text}>Log in</Typography>
            <Typography variant='body1' className={classes.text}>Take Quizzes</Typography>
            <Typography variant='body1' className={classes.text}>Create Quizzes</Typography>
            <Typography variant='body1' className={classes.text}>Dashboard</Typography>
            <Typography variant='body1' className={classes.text}>Student Report</Typography>
        </Grid>
        <Grid xs={4}>
            <Typography variant='h6' className={classes.textTitle}>About</Typography>
            <Typography variant='body1' className={classes.text}>Love To Learn</Typography>
        </Grid>
    </Grid>
    <Typography variant='h6' className={classes.copyright}>Designed & Built by Jihye Kwak</Typography>
    </Box>
  )
}

export default Footer