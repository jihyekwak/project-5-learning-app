import React from 'react';
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        // backgroundColor: '#F7F7EE',
        padding: '50px',
        backgroundColor: '#23596d'
    },
    headerText : {
        // fontFamily: 'Viga',
        margin:'20px'
    },
}
))

const Footer = () => {

    const classes = useStyles();
  return (
    <Box className={classes.component}>
    <Grid container>
        <Grid xs={4}>
            <h5>Subjects</h5>
        </Grid>
        <Grid xs={4}>
            <h5>Features</h5>
        </Grid>
        <Grid xs={4}>
            <h5>About</h5>
        </Grid>
    </Grid>
    </Box>
  )
}

export default Footer