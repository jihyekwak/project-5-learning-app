import { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Container, Grid, Typography, Button, Dialog, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service"
import * as userService from "../../api/user.service";


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px' 
    },
    gridContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: '100px',
        backgroundColor: 'white',
        padding: '50px 0',
        borderRadius: '5px'
    },
    question: {
        fontFamily: 'Viga',
        letterSpacing: '10px'
    },
    selectButton: {
        backgroundColor: '#F9D263',
        fontFamily: 'Viga',
        fontSize: '20px',
        margin: '15px',
        padding: '10px',
        width: '200px',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#ea624c',
            cursor: 'pointer'
        },
    },
    score: {
        fontFamily: 'Sniglet',
        margin: '30px'
    },
    button : {
        backgroundColor: '#0B568850',
        color: '#0B5688',
        fontFamily: 'Viga',
        fontSize: '15px',
        margin: '15px 10px',
        padding: '10px',
        width: '100px',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#0B5688',
            color: 'white',
            cursor: 'pointer'
        },
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
}))

const TakeQuizPage = () => {

    const classes = useStyles();
    const {id} =useParams();
    const {student} = useParams();
    const [quizTitle, setQuizTitle] = useState("")
    const [questionList, setQuestionList] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [start, setStart] = useState(false);
    const [takenQuiz, setTakenQuiz] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)

    const fetchQuiz = async () => {
        await quizService.getOne(`${id}`).then((res) => {
            setQuizTitle(res.data.title)
            setQuestionList(res.data.questions)
        })
    }

    useEffect(() => {
        fetchQuiz()
    }, [])

    const handleStart = async() => {
        setStart(true)
        let newTakenQuiz = {student: `${student}`, quiz_id: `${id}`, is_completed: false, score: 0}
        console.log(newTakenQuiz)
        await userService.takenQuizCreate(newTakenQuiz).then((res)=>{
            setTakenQuiz(res.data.id)
        })
    }

    const updateTakenQuiz = async() => {
        await userService.takenQuizUpdate(`${takenQuiz}`, {student: `${student}`, quiz_id: `${id}`, is_completed: isCompleted, score: `${score}`}).then((res) => {
            console.log(res)
        })
    }

    const handleSelection = (correct) => {

        if (correct) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion+ 1;
        if (nextQuestion < questionList.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setIsCompleted(true)
            setShowScore(true)
            // updateTakenQuiz()
        }
    }

    const handleTryAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsCompleted(false);
        setShowScore(false);
    }

    if (!start) {
        return (
            <>
            {/* <LearnerNavBar /> */}
            <Container>
                <Card className={classes.card}>
                    <Typography variant='h3'>{quizTitle}</Typography>
                <Button onClick={handleStart} className={classes.button}>Start</Button>
                <Button href={`/student/${student}/`} className={classes.button}>Go Back</Button>

                </Card>
                
            </Container>
            </>

        )
    } else {
        return(
            <>
            {/* <LearnerNavBar /> */}
            <Container>
                {showScore ? (
                    <Dialog open={true}>
                        <Typography align='center' className={classes.score} >
                            <h2>You scored {score} out of {questionList.length}!</h2>
                        </Typography>
                        <div style={{margin: 'auto auto'}}>
                            <Button onClick={() => handleTryAgain()} className={classes.button}>Try Again</Button>
                            <Button href={`/student/${student}/`} onClick={()=>updateTakenQuiz()}className={classes.button}>Quiz List</Button>
                        </div>
                    </Dialog>
                ) : (
                    <>
                        <p>Question {currentQuestion +1 }/{questionList.length}</p>
                        <Grid container className={classes.gridContainer}>
                            <Grid item x3={4}>
                                <Typography variant='h1' className={classes.question}>
                                    {questionList[currentQuestion]?.text}
                                </Typography>
                            </Grid>
                            <Grid item x3={8}>
                                {questionList[currentQuestion]?.answers?.map(({text, is_correct, id})=> {
                                    return(
                                        <div key={id}>
                                            <Button onClick={() => handleSelection(is_correct)} className={classes.selectButton}>{text}</Button>
                                        </div>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Button href={`/student/${student}/`} onClick={()=> updateTakenQuiz()} className={classes.button}>Go Back</Button>
                    </>
                )}
    
            </Container>
            </>
           
        )
    }


}
export default TakeQuizPage;