import { Grid, Card} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizCard from '../../components/QuizCard';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '15px 0'
    },
    card: {
        backgroundColor: '#F9D263',
        padding: '10px',
        // borderRadius: '20px',
        textAlign: 'center',
        height: '100%',
    }
}));

const QuizList = ({quiz}) => {

    const classes = useStyles();

    return(
        <Grid item xs={4} zeroMinWidth key={quiz.id} className={classes.grid}>
            <Card className={classes.card}>
                <QuizCard quiz={quiz}/>
            </Card>
        </Grid>
    )
}

export default QuizList;