import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {NavLink} from 'react-router-dom';
import Logout from '../../components/Logout';

const useStyles = makeStyles((theme) => ({
    appbar: {
        // backgroundColor: '#ea624c',
        backgroundColor: '#87BCC7',
        // backgroundColor: 'white',
        // backgroundColor: '#f5b120',
    },
    toolbar: {
        justifyContent:'space-evenly'
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
    }
}))

const NavBar = ({profile}) => {

    const classes = useStyles();
    return(
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                {profile? <NavLink to='#' className={classes.navlink}>Welcome, {profile.username}</NavLink>: null }
                {profile? null : <NavLink to='/' className={classes.navlink}>Logo</NavLink>}
                {profile? <NavLink to='/dashboard' className={classes.navlink}>Dashboard</NavLink>: null }
                {profile? <NavLink to='/mypage' className={classes.navlink}>My Page</NavLink> : null }
                {profile? null : <NavLink to='/login' className={classes.navlink}>LogIn</NavLink> }
                {profile? null : <NavLink to='/register' className={classes.navlink}>Register</NavLink> }
                {profile? <Logout/> : null }
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;