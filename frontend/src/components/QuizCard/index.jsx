import { Card, Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tag: {
        // backgroundColor: '#f2e5ca',
        padding: '3px',
        borderRadius: '5px',
        margin: '3px',
        fontFamily: 'Viga',
    },
    quizTitle: {
        textAlign: 'center',
        // fontFamily: 'Cabin Sketch',
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
    card: {
        padding: '10px',
        textAlign: 'center',
        "&:hover": {
            transform: 'scale(1.05)'
        },
    }
}));

const QuizCard = ({quiz}) => {

    const classes = useStyles();

    return(
        <>
        <Card 
            className={classes.card} 
            style={ 
                quiz.subject === "Math"? { border: "1px solid #Fe6845"} : quiz.subject ==="English"? {border: "1px solid #9ecb45"} : quiz.subject ==="Spanish"? {border: "1px solid #7569de"} : quiz.subject ==="Korean"? {border: "1px solid #ffa046"} :{} }
        >
            <Typography noWrap variant="body2" align="right">
                <span className={classes.tag}>{quiz.subject}</span>
                <span className={classes.tag}>{quiz.grade}</span>
                <span className={classes.tag}>{quiz.difficulty}</span>
            </Typography>
            <hr />
            <Typography variant="h5" className={classes.quizTitle}>
                {quiz.title}
            </Typography>
            <hr />
            <Button href={`quizzes/${quiz.id}/`} className={classes.button}>Take Quiz</Button>
        </Card>
        </>
    )
}
export default QuizCard;