import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GetStartedBtn from '../GetStartedBtn';
import Cover from '../../../assets/image/coverimg2.jpg';

const useStyles = makeStyles((theme) => ({
    component: {
        backgroundColor: "white",
        height: '500px',
        backgroundImage: `url(${Cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    },
    headerText : {
        // fontFamily: 'Viga',
        margin:'20px'
    },
    img: {
        width: '100%',
        opacity: '0.8',
    },
    startBtn: {
        marginTop: '300px'
    }
}
))

const Header = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography variant='h3'>Love To Learn</Typography>
            <div className={classes.startBtn}>
                <GetStartedBtn />
            </div>

        </Box>
    )
}

export default Header