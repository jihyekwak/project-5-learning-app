import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button, Card} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px' 
    },
    headerTitle: {
        textAlign:'center',
        fontSize: '45px',
        fontFamily: 'Staatliches',
        // color: '#0B5688'
    },
    gridContainer: {
        justifyContent: 'center',
    },
    grid: {
        margin: '11px 0'
    },
    card: {
        backgroundColor: '#F9D263',
        padding: '10px',
        // borderRadius: '20px',
        textAlign: 'center',
        height: '100%',
    },
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

const MainPage = () => {

    const classes = useStyles();
    const [quizList, setQuizList] = useState([])

    const fetchQuizzes = async () => {
        await quizService.getAll().then((res) => {
            setQuizList(res.data)
        })
    };

    useEffect(() => {
        fetchQuizzes()
    }, [])
    
    return(
        <Container className={classes.container}>
            <h1 className={classes.headerTitle}>Quiz List</h1>
            <Grid container spacing={3} className={classes.gridContainer}>
                {quizList.map((quiz) => {
                    return (
                        <Grid item xs={4} zeroMinWidth key={quiz.id} className={classes.grid}>
                            <Card className={classes.card}>
                                <Typography noWrap variant="body2" align="right">
                                    <span className={classes.tag}>{quiz.subject}</span>
                                    <span className={classes.tag}>{quiz.grade}</span>
                                    <span className={classes.tag}>{quiz.difficulty}</span>
                                </Typography>
                                <Typography variant="h3" className={classes.quizTitle}>
                                    {quiz.title}
                                </Typography>
                                <Button href={`/quiz/${quiz.id}`} className={classes.button}>Take Quiz</Button>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default MainPage;