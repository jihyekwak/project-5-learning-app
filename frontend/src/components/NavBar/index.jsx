import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {NavLink} from 'react-router-dom';
import Logout from '../../components/Logout';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#87BCC7',
        height: '65px'
    },
    toolbar: {
        justifyContent:'space-between',
        height: '50px',
    },
    navlink: {
        textDecoration: 'none',
        color: '#23596D',
        fontSize: '25px',
        margin: '0 40px 0 0',
        fontFamily: 'Staatliches',
    },
}))

const NavBar = ({profile}) => {

    const classes = useStyles();
    return(
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                {profile? <span className={classes.navlink}>Welcome, {profile.username}</span>: null }
                {profile? null : <NavLink to='/' className={classes.navlink}>LoveToLearn</NavLink>}
                {profile? <NavLink to='/student' className={classes.navlink}>Student Learning</NavLink> : null }
                {profile? <NavLink to='/dashboard' className={classes.navlink}>Parent Dashboard</NavLink>: null }
                <div>
                    {profile? null : <NavLink to='/login' className={classes.navlink}> LogIn</NavLink> }
                    {profile? null : <NavLink to='/register' className={classes.navlink}>Register</NavLink> }
                </div>

                {profile? <Logout/> : null }
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;