import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GetStartedBtn from '../GetStartedBtn'

const useStyles = makeStyles((theme) => ({
    component: {
        padding: '50px',
        backgroundColor: '#F7F7EE',
    },
    headerTitle: {
        color: '#0B5688',
        margin: '20px 0',
        fontWeight: 'bold',
    },
}
))

const GetStarted = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography variant='h5' className={classes.headerTitle}>Ready to start?</Typography>
            <GetStartedBtn />
        </Box>
    )
}


export default GetStarted;