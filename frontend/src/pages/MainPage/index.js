import { useState, useEffect } from 'react';
import { Container, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service";
import QuizCard from '../../components/QuizCard';

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
    }
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
                                <QuizCard quiz={quiz}/>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default MainPage;