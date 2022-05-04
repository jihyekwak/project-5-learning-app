import { useEffect, useState } from "react";
import { Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../../api/quiz.service";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
    gridContainer: {
        justifyContent: 'space-around'
    },
    input: {
        width: '60%',
        height: '25px',
        margin: '10px 10px'
    },
    paperTitle: {
        color: '#0B5688',
        fontWeight: 'bold'
    }
}));

const QuestionForm = ({editQuizData, handleCompleteEditQuiz}) => {

    const classes = useStyles();
    const [quiz, setQuiz] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("")
    const [correctAnswer1, setCorrectAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState("")
    const [correctAnswer2, setCorrectAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState("")
    const [correctAnswer3, setCorrectAnswer3] = useState(false);
    const [create, setCreate] = useState(false)
    console.log(editQuizData.id)

    const fetchQuiz = async () => {
        await quizService.getOne(editQuizData.id).then((res) => {
            setQuiz(res.data)
            setCreate(false)
            setQuestion("")
            setAnswer1("")
            setCorrectAnswer1(false)
            setAnswer2("")
            setCorrectAnswer2(false)
            setAnswer3("")
            setCorrectAnswer3(false)
        })
    }

    useEffect(() => {
        fetchQuiz()
    }, [create])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newQuestion = 
        {   
            text: question,
            answers: [
                {
                    text: answer1, 
                    is_correct: correctAnswer1
                }, 
                {
                    text: answer2, 
                    is_correct: correctAnswer2
                }, {
                    text: answer3, 
                    is_correct: correctAnswer3,
                }
            ],
            quiz: editQuizData.id
        }

        console.log(newQuestion);
        setCreate(true)
        await quizService.questionCreate(newQuestion).then(() => {
            fetchQuiz()
        })
    }

    const handleDelete = async (question) => {
        await quizService.questionDestroy(question).then(() => {
            fetchQuiz()
        })
    }

    return(
    <>
        <Button variant='contained' onClick={()=>handleCompleteEditQuiz()}>go back</Button>
        <Grid container className={classes.gridContainer}>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <Typography variant="h4">{quiz.title}</Typography>
                    <br />
                    <Typography variant="body1">{quiz.grade} / {quiz.subject} / {quiz.difficulty}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography className={classes.paperTitle} variant="h6">Create New Question</Typography>
                    <form>
                        <div>
                            <label>Question </label>
                            <input className={classes.input} type="text" name="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
                        </div>
                        <div>
                            <label>Answer1 </label>
                            <input className={classes.input} type="text" name="answer" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
                            <label>correct </label>
                            <input type="checkbox" name="is_correct" value={correctAnswer1} onChange={() => setCorrectAnswer1(!correctAnswer1)} />
                        </div>
                        <div>
                            <label>Answer2 </label>
                            <input className={classes.input} type="text" name="answer" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
                            <label>correct </label>
                            <input type="checkbox" name="is_correct" value={correctAnswer2} onChange={() => setCorrectAnswer2(!correctAnswer2)} />
                        </div>
                        <div>
                            <label>Answer3 </label>
                            <input className={classes.input} type="text" name="answer" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
                            <label>correct </label>
                            <input type="checkbox" name="is_correct" value={correctAnswer3} onChange={() => setCorrectAnswer3(!correctAnswer3)} />
                        </div>
                            <Button variant='contained' type="submit"  onClick={handleSubmit}>Submit</Button>  
                    </form>
                </Paper>
            </Grid>
        </Grid>
        
        <TableContainer component={Paper} className={classes.paper}>
            <Typography className={classes.paperTitle} variant="h6">Question List</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell>Question</TableCell>
                        <TableCell align="right">Answer1</TableCell>
                        <TableCell align="right">Answer2</TableCell>
                        <TableCell align="right">Answer2</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {quiz.questions?.map((question, index) => (
                    <TableRow key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                        <TableCell component="th" scope="row">{question.text}</TableCell>
                        {question.answers.map((answer, index) => {
                            return (
                                <TableCell key={index} align="right">{answer.is_correct? <strong>{answer.text}</strong>: <span>{answer.text}</span>}</TableCell>
                            )
                        })}
                        <TableCell align="right">
                            <DeleteForeverIcon onClick={()=> handleDelete(question.id)}></DeleteForeverIcon>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )
}
export default QuestionForm;