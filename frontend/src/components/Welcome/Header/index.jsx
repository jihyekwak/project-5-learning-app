import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GetStartedBtn from '../GetStartedBtn';
import Cover from '../../../assets/image/coverimg2.jpg';

const useStyles = makeStyles((theme) => ({
    headerTitle: {
        color: '#0B5688',
        margin: '20px 0',
        fontWeight: 'bold',
    },
    startBtn: {
        marginTop: '20px'
    },
    cover: {
        alignItems: 'center',
        textAlign: 'center',
        height: '600px',
        backgroundImage: `url(${Cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    text: {
        color: '#0B5688',
        fontWeight: 'bold'
    }
}
))

const Header = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.cover}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
                <Typography className={classes.headerTitle} variant='h3'>Love To Learn</Typography>
                <Typography variant='h5' className={classes.text}>Personalized Learning</Typography>
                <Typography variant='h6' className={classes.text}>Customize learning for each student's strengths, needs, skills, and interests</Typography>
                <div className={classes.startBtn}>
                    <GetStartedBtn />
                </div>
            </Grid>
        </Grid>
    )
}

export default Header