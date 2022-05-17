import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GetStartedBtn from '../GetStartedBtn';
import Cover from '../../../assets/image/coverimg2.jpg';

const useStyles = makeStyles((theme) => ({
    component: {
        height: '00px',
        backgroundImage: `url(${Cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
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
                <Typography variant='h5'>Personalized Learning</Typography>
                <div className={classes.startBtn}>
                    <GetStartedBtn />
                </div>
            </Grid>
        </Grid>
    )
}

export default Header