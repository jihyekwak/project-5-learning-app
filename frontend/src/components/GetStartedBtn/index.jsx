import { Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button : {
        backgroundColor: '#0B568850',
        color: '#0B5688',
        // fontFamily: 'Viga',
        fontSize: '15px',
        // margin: '15px 10px',
        padding: '10px',
        borderRadius: '30px',
        "&:hover": {
            backgroundColor: '#0B5688',
            color: 'white',
            cursor: 'pointer'
        },
    }
}))

const GetStartedBtn = () => {
    const classes = useStyles();

    return (
        <Button href="/register" className={classes.button}>Get Started</Button>
    )
}


export default GetStartedBtn;