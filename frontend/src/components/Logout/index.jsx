import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

const Logout = () => {

    const classes = useStyles();
    const navigate = useNavigate()

    const logout = () => {
        authService.logout();
        console.log("Logged out");
        navigate("/")
        navigate(0)
    }
    
    return (
        <>
            <span onClick={logout} className={classes.navlink}>Logout</span>
        </>
    )
}

export default Logout;