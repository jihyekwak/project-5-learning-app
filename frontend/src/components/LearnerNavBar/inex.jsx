import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {NavLink} from 'react-router-dom';
import Logout from '../../components/Logout';

const useStyles = makeStyles((theme) => ({
    appbar: {
        // backgroundColor: '#ea624c',
        backgroundColor: '#87BCC7',
        // backgroundColor: '#87c7b2',
        // backgroundColor: '#f5b120',
    },
    toolbar: {
        justifyContent:'space-between'
    },
    navlink: {
        textDecoration: 'none',
        color: '#23596D',
        fontSize: '25px',
        fontFamily: 'Staatliches',
        "&:hover": {
            transform: 'scale(1.2)',
            cursor: 'pointer'
        },
    },
    button : {
        backgroundColor: '#0B568850',
        color: '#0B5688',
        fontFamily: 'Viga',
        fontSize: '15px',
        margin: '15px 10px',
        padding: '10px',
        width: '100px',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#0B5688',
            color: 'white',
            cursor: 'pointer'
        },
    },
    grid: {
        display: 'flex',
        flexDirection: 'row'
    }
}))

const LearnerNavBar = ({profile}) => {

    const classes = useStyles();
    return(
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <NavLink to='/student' className={classes.navlink}>Student</NavLink>
                <NavLink to='#' className={classes.navlink}>Welcome Yoon</NavLink>
                <NavLink to='#' className={classes.navlink}>DailyProgressBar 4/10</NavLink>
                <NavLink to='#' className={classes.navlink}>Reward 4000</NavLink> 
                <Button href="/dashboard" className={classes.button}>Parent</Button>
            </Toolbar>
        </AppBar>
    )
}
export default LearnerNavBar;