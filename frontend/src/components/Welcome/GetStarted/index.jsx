import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GetStartedBtn from '../GetStartedBtn'

const useStyles = makeStyles((theme) => ({
    component: {
        padding: '50px',
        backgroundColor: '#F7F7EE',
        // backgroundColor: '#C3E0E7',
    },
}
))

const GetStarted = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography variant='h5'>Ready to start?</Typography>
            <GetStartedBtn />
        </Box>
    )
}


export default GetStarted;