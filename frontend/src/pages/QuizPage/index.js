import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Container, Grid, Button, Paper, Typography, Divider } from "@material-ui/core";
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
        color: '#0B5688',
        margin: '20px 0',
        fontWeight: 'bold'
    },
    subject: {
        margin: '20px 0 10px 0'
    },
    paper: {
        margin: "15px 0",
        padding: "15px",
    },
    container: {
        width: '70%'
    }

}));

const QuizPage = ({profile}) => {

    const classes = useStyles();
    const {studentId} = useParams();
    const [student, setStudent] = useState();
    const [quizList, setQuizList] = useState([])
    const [customQuiz, setCustomQuiz] = useState(false)
    const [header, setHeader] = useState("All Quizzes")

    const fetchQuizzes = async () => {
        await quizService.getAll().then((res) => {
            setQuizList(res.data)
        })
    };

    const fetchStudent = async () => {
        await userService.getOneStudent(studentId).then((res)=> {
            setStudent(res.data)
    })}

    useEffect(() => {
        fetchQuizzes()
    }, [])

    useEffect(()=> {
        fetchStudent()
    }, [])

    const subjects = [...new Set(quizList.filter(quiz => (quiz.author === 1)).filter(quiz => quiz.grade = student?.grade).map(({subject}) => subject))]
    const cumstomSubjects = [...new Set(quizList.filter(quiz => (quiz.author === profile.id)).filter(quiz => quiz.grade = student?.grade).map(({subject}) => subject))]
    const customQuizList = quizList?.filter(quiz => (quiz.author === profile.id))

    return(
        <>
        <LearnerNavBar />
        <Container maxWidth='True' className={classes.container}>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <Typography variant='h6' className={classes.headerTitle}>{header}</Typography>
                    <Paper className={classes.paper}>
                        <Typography variant='body1'>Select Quiz List</Typography>
                        <Divider></Divider><br />
                        <div>
                            <Button 
                                onClick={()=>{
                                    setCustomQuiz(false)
                                    setHeader("All Quizzes")
                                }} >All Quizzs
                            </Button>
                        </div>
                        <div>
                            <Button 
                                onClick={()=>{
                                    setCustomQuiz(true)
                                    setHeader("Custom Quizzes")
                                }} >Custom Quizzes
                            </Button>
                        </div>
                    </Paper>
                    
                </Grid>
                <Grid item xs={10}>
                    {customQuiz? (
                    cumstomSubjects.map((subject, index) => {
                        return(
                            <>
                            <Typography className={classes.subject} variant='body1' key={index}>{student.grade} / {subject}</Typography>
                            <Grid container spacing={4}>
                                {customQuizList?.filter(quiz => quiz.grade === student?.grade)
                                                .filter(quiz => quiz.subject === subject)?.map((quiz, index) => {
                                return (
                                    <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                        <QuizCard quiz={quiz}/>
                                    </Grid>
                                )
                            })}
                            </Grid>
                            </>
                        )
                    })
                    ):(
                        subjects.map((subject, index) => {
                            return(
                                <>
                                <Typography className={classes.subject} variant='body1' key={index}>{student.grade} / {subject}</Typography>
                                <Grid container spacing={4}>
                                    {quizList?.filter(quiz => quiz.author === 1)
                                                .filter(quiz => quiz.grade === student?.grade).filter(quiz => quiz.subject === subject)?.map((quiz, index) => {
                                    return (
                                        <Grid item xs={4} zeroMinWidth key={index} className={classes.grid}>
                                                <QuizCard quiz={quiz}/>
                                        </Grid>
                                    )
                                })}
                                </Grid>
                                </>
                            )
                        })
                    )}
                </Grid>
            </Grid>


        </Container>
        </>    
    )
}
export default QuizPage;