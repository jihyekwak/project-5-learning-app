import { Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tag: {
        backgroundColor: '#f2e5ca',
        padding: '3px',
        borderRadius: '5px',
        margin: '3px',
        fontFamily: 'Viga',
    },
    quizTitle: {
        textAlign: 'center',
        fontFamily: 'Cabin Sketch',
        margin: '25px auto'
    },
    button: {
        backgroundColor: '#87bcc780',
        border: 'none',
        fontSize: '17px',
        padding: '7px',
        fontFamily: 'Viga',
        margin: '15px 0 0 0',
        "&:hover": {
            transform: 'scale(1.3)',
            backgroundColor: '#87bcc7',
            cursor: 'pointer'
        },
    },
}));

const QuizCard = ({quiz}) => {

    const classes = useStyles();

    return(
        <>
            <Typography noWrap variant="body2" align="right">
                <span className={classes.tag}>{quiz.subject}</span>
                <span className={classes.tag}>{quiz.grade}</span>
                <span className={classes.tag}>{quiz.difficulty}</span>
            </Typography>
            <hr />
            <Typography variant="h3" className={classes.quizTitle}>
                {quiz.title}
            </Typography>
            <hr />
            <Button href={`quizzes/${quiz.id}`} className={classes.button}>Take Quiz</Button>
        </>
    )
}
export default QuizCard;