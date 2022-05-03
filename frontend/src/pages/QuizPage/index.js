import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Paper, Card, Container, Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
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
    // gridContainer: {
    //     justifyContent: 'space-around',
    //     marginTop: '20px'
    // },
    grid: {
        margin: '10px 0'
    },
}));

const QuizPage = ({profile}) => {

    const classes = useStyles();
    const {studentId} = useParams();
    const [student, setStudent] = useState();
    const [quizList, setQuizList] = useState([])
    const [customQuiz, setCustomQuiz] = useState(false)


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

    const subjects = [...new Set(quizList.filter(quiz => (quiz.author === 1 || quiz.author === profile.id)).filter(quiz => quiz.grade = student.grade).map(({subject}) => subject))]
    const cumstomSubjects = [...new Set(quizList.filter(quiz => (quiz.author === profile.id)).filter(quiz => quiz.grade = student.grade).map(({subject}) => subject))]
    const customQuizList = quizList?.filter(quiz => (quiz.author === profile.id))

    return(
        <>
        <LearnerNavBar />
        <Container>
            <ButtonGroup size="small" variant="contained">
                <Button onClick={()=>setCustomQuiz(false)} >All Quiz</Button>
                <Button onClick={()=>setCustomQuiz(true)} >Custom Quiz</Button>
            </ButtonGroup>
            <Grid container>
                {customQuiz? (
                    cumstomSubjects.map(subject => {
                        return(
                            <>
                            <Typography variant='h6'>{subject}</Typography>
                            <br />
                            <Grid container spacing={4}>
                                {customQuizList?.filter(quiz => quiz.grade === student?.grade)
                                                .filter(quiz => quiz.subject === subject)?.map((quiz, index) => {
                                return (
                                <>
                                    <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                        <QuizCard quiz={quiz}/>
                                    </Grid>
                                </>
                                )
                            })}
                            </Grid>
                            </>
                        )
                    })
                ):(
                    subjects.map(subject => {
                        return(
                            <>
                            <Typography variant='h6'>{subject}</Typography>
                            <br />
                            <Grid container spacing={4}>
                                {quizList?.filter(quiz => (quiz.author === 1 || quiz.author === profile.id))
                                            .filter(quiz => quiz.grade === student?.grade).filter(quiz => quiz.subject === subject)?.map((quiz, index) => {
                                return (
                                <>
                                    <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                            <QuizCard quiz={quiz}/>
                                    </Grid>
                                </>
                                )
                            })}
                            </Grid>
                            </>
                        )
                    })
                )}
            </Grid>
        </Container>
        </>    
    )
}
export default QuizPage;