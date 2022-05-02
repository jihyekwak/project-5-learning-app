import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Card, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service";
import * as userService from "../../api/user.service";
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

const QuizPage = ({profile}) => {

    const classes = useStyles();
    const {studentId} = useParams();
    const [student, setStudent] = useState();
    const [quizList, setQuizList] = useState([])
    const [subject, setSubject] = useState([])
    const [filter, setFilter] = useState(false)


    const fetchQuizzes = async () => {
        await quizService.getAll().then((res) => {
            setQuizList(res.data)
            console.log(quizList)
        })
    };

    const fetchStudent = async () => {
        await userService.getOneStudent(studentId).then((res)=> {
            setStudent(res.data)
            console.log(student)
    })}

    useEffect(() => {
        fetchQuizzes()
        // fetchStudent()
    }, [])

    useEffect(()=> {
        fetchStudent()
    }, [])

    const handleFilter = (subject) => {
        setFilter(true);
        setSubject(subject);
        console.log(subject)
    }
    
    const subjects = [...new Set(quizList.map(({subject}) => subject))]

    return(
        <>
        <LearnerNavBar />
        <Container>
            <Grid container spacing={2} className={classes.gridContainer}>
            <Button onClick={()=> setFilter(false)} className={classes.button}>All</Button>
                {subjects.map((subject, index)=> {
                    return(
                    <Button key={index} onClick={()=> handleFilter(subject)} className={classes.button}>{subject}</Button>
                    )
                })}
            <Button onClick={()=> handleFilter("myquiz")} className={classes.button}>Custom Quiz</Button>
            </Grid>

            <Grid container spacing={4} className={classes.gridContainer}>
                {!filter? (
                    quizList?.filter(quiz => (quiz.author === 1 || quiz.author === profile.id)).filter(quiz => quiz.grade === student?.grade).map((quiz, index) => {
                        return (
                        <>
                            <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                <Card className={classes.card}>
                                    <QuizCard quiz={quiz}/>
                                </Card>
                            </Grid>
                        </>
                        )
                    })
                ):(
                    (subject !== "myquiz") ? (
                        quizList?.filter(quiz => (quiz.author === 1 || quiz.author === profile.id)).filter(quiz => quiz.grade === student?.grade).filter(quiz => quiz.subject === subject).map((quiz, index) => {
                        return (
                        <>
                            <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                <Card className={classes.card}>
                                    <QuizCard quiz={quiz}/>
                                </Card>
                            </Grid>
                        </>
                        )
                    })):(
                        quizList?.filter(quiz => (quiz.author === profile.id)).filter(quiz => quiz.grade === student?.grade).map((quiz, index) => {
                            return (
                            <>
                                <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                    <Card className={classes.card}>
                                        <QuizCard quiz={quiz}/>
                                    </Card>
                                </Grid>
                            </>
                            )
                        })
                    )
                )}
            </Grid>
        </Container>
        </>    
    )
}
export default QuizPage;