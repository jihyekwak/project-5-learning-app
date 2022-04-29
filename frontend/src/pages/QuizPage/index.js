import { useState, useEffect } from 'react';
import { Card, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service";
import LearnerNavBar from '../../components/LearnerNavBar/inex';
import QuizCard from '../../components/QuizCard';

const useStyles = makeStyles((theme) => ({
    button : {
        backgroundColor: '#87c7b290',
        color: '#0B5688',
        fontFamily: 'Viga',
        fontSize: '15px',
        margin: '25px 10px',
        padding: '10px',
        width: '130px',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#87c7b2',
            color: 'white',
            cursor: 'pointer'
        },
    },
    headerTitle: {
        textAlign:'center',
        fontSize: '40px',
        fontFamily: 'Staatliches',
        color: '#0B5688',
        letterSpacing:'1px',
        margin: '30px 0'
    },
    gridContainer: {
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    grid: {
        margin: '20px 0'
    },
    card: {
        // backgroundColor: '#F9D263',
        padding: '10px',
        // borderRadius: '20px',
        textAlign: 'center',
        height: '100%',
        "&:hover": {
            transform: 'scale(1.05)'
        },
    }
}));

const QuizPage = () => {

    const classes = useStyles();
    const [quizList, setQuizList] = useState([])
    const [subject, setSubject] = useState([])
    const [filter, setFilter] = useState(false)


    const fetchQuizzes = async () => {
        await quizService.getAll().then((res) => {
            setQuizList(res.data)
        })
    };

    useEffect(() => {
        fetchQuizzes()
    }, [])

    const handleFilter = (subject) => {
        setFilter(true);
        setSubject(subject);
    }
    
    const subjects = [...new Set(quizList.map(({subject}) => subject))]

    return(
        <>
        <LearnerNavBar />
        <Container>
            <Grid container spacing={2} className={classes.gridContainer}>
            <Button onClick={()=> setFilter(false)} className={classes.button}>All</Button>
                {subjects.map((subject)=> {
                    return(
                    <Button onClick={()=> handleFilter(subject)} className={classes.button}>{subject}</Button>
                    )
                })}
            </Grid>

            <Grid container spacing={4} className={classes.gridContainer}>
                {filter? (quizList.filter(q => q.subject === subject).map((quiz) => {
                    return (
                    <>
                        <Grid item xs={4} zeroMinWidth key={quiz.id} className={classes.grid}>
                            <Card className={classes.card}>
                                <QuizCard quiz={quiz}/>
                            </Card>
                        </Grid>
                    </>
                    )
                })) : (quizList.map((quiz) => {
                    return (
                    <>
                        <Grid item xs={4} zeroMinWidth key={quiz.id} className={classes.grid}>
                            <Card className={classes.card}>
                                <QuizCard quiz={quiz}/>
                            </Card>
                        </Grid>
                    </>
                    )
                }))}
            </Grid>
        </Container>
        </>    
    )
}
export default QuizPage;