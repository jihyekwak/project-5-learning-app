import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams} from "react-router-dom";
import { Container, Grid, Typography, Button, Card, Dialog, DialogContent, DialogActions, DialogTitle, ButtonGroup} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    }
}))

const Quiz = () => {

    const classes = useStyles();
    const {id} =useParams();
    const [questionList, setQuestionList] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        axios
        .get(`/api/quizzes/${id}`)
        .then((res)=> {
            console.log(res.data.questions)
            setQuestionList(res.data.questions)
        })
        .catch((err) => console.log(err))
    }, [])

    const handleSelection = (correct) => {
        console.log("answer clicked");

        if (correct) {
            console.log("correct");
            setScore(score + 1);
        } else {
            console.log("wrong");
        }

        const nextQuestion = currentQuestion+ 1;
        if (nextQuestion < questionList.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    const handleTryAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return(
        <Container>
            {showScore ? (
                <Dialog open={true}>
                    <Typography align='center' className={classes.score} >
                        <h2>You scored {score} out of {questionList.length}!</h2>
                    </Typography>
                    <div style={{margin: 'auto auto'}}>
                        <Button onClick={() => handleTryAgain()} className={classes.button}>Try Again</Button>
                        <Button href="/main" className={classes.button}>Quiz List</Button>
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
                    <Button href="/main" className={classes.button}>Go Back</Button>
                </>
            )}

        </Container>
    )
}
export default Quiz;