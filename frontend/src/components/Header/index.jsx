import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GetStartedBtn from '../GetStartedBtn';

const useStyles = makeStyles((theme) => ({
    component: {
        // backgroundColor: '#F7F7EE',
        padding: '50px',
        // backgroundColor: '#C3E0E7'
        // backgroundColor: "#EDE6CA"
    },
    headerText : {
        // fontFamily: 'Viga',
        margin:'20px'
    },
}
))

const Header = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography variant='h3' className={classes.headerText}>Learning App</Typography>
            <GetStartedBtn />
        </Box>
    )
}

export default Header