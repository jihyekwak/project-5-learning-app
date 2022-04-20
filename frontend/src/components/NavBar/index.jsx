import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appbar: {
        // backgroundColor: '#ea624c',
        backgroundColor: '#53b3ae',
        // backgroundColor: 'white',
        // backgroundColor: '#f5b120'
    },
    toolbar: {
        justifyContent:'space-evenly'
    },
    navlink: {
        textDecoration: 'none',
        color: '#0B5688',
        fontSize: '25px',
        fontFamily: 'Staatliches',
        "&:hover": {
            transform: 'scale(1.2)',
            cursor: 'pointer'
        },
    }
}))

const NavBar = () => {

    const classes = useStyles();
    return(
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <NavLink to='/' className={classes.navlink}>Logo</NavLink>
                <NavLink to='/main' className={classes.navlink}>Main</NavLink>
                <NavLink to='/mypage' className={classes.navlink}>MyPage</NavLink>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;