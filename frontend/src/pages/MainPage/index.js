import { useState, useEffect } from 'react';
import { Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service";
import QuizList from '../../components/QuizList';

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
        <Container>
            <Grid container spacing={2} className={classes.gridContainer}>
            <Button onClick={()=> setFilter(false)} className={classes.button}>All</Button>
                {subjects.map((subject)=> {
                    return(
                    <Button onClick={()=> handleFilter(subject)} className={classes.button}>{subject}</Button>
                    )
                })}
            </Grid>

            <h1 className={classes.headerTitle}>Let's Take Quizzes!! Have Fun :)</h1>
            <Grid container spacing={4} className={classes.gridContainer}>
                {filter? (quizList.filter(q => q.subject === subject).map((quiz) => {
                    return (
                        <QuizList quiz={quiz}/>
                    )
                })) : (quizList.map((quiz) => {
                    return (
                        <QuizList quiz={quiz}/>
                    )
                }))}
            </Grid>
        </Container>
    )
}
export default MainPage;