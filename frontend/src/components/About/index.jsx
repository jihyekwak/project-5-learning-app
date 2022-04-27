import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        // backgroundColor: '#F7F7EE',
        padding: '50px',
        // backgroundColor: '#C3E0E7',
        backgroundColor: "#EEECDD"
    },
    headerText : {
        // fontFamily: 'Viga',
        margin:'20px'
    },
}
))

const About = () => {

    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography>About</Typography>
            <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </Box>
    )
}

export default About