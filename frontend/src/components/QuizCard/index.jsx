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
        backgroundColor: '#F3974F',
        border: 'none',
        borderRadius: '10px',
        fontSize: '17px',
        padding: '7px',
        fontFamily: 'Viga',
        "&:hover": {
            transform: 'scale(1.3)',
            backgroundColor: '#ea624c',
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
            <Typography variant="h3" className={classes.quizTitle}>
                {quiz.title}
            </Typography>
            <Button href={`/quiz/${quiz.id}`} className={classes.button}>Take Quiz</Button>
        </>
    )
}
export default QuizCard;