import { useEffect, useState } from "react";
import * as quizService from "../../../api/quiz.service";
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({

}));

const QuestionForm = (props) => {

    // const classes = useStyles();
    const [quiz, setQuiz] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("")
    const [correctAnswer1, setCorrectAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState("")
    const [correctAnswer2, setCorrectAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState("")
    const [correctAnswer3, setCorrectAnswer3] = useState(false);
    const [create, setCreate] = useState(false)

    const fetchQuiz = async () => {
        await quizService.getOne(props.editQuiz.id).then((res) => {
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
            quiz: quiz.id
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
        <Button onClick={()=>props.handleCompleteEditQuiz()}>go back</Button>
        <Paper>
            <h1>{quiz.title}</h1>
            <p>{quiz.subject} / {quiz.grade} / {quiz.difficulty}</p>
        </Paper>
        <Paper>
        <Typography variant="h6">Create New Question</Typography>
        <form>
            <label>Question:</label>
            <input type="text" name="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            
            <label>Answer1:</label>
            <input type="text" name="answer" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
            
            <label>correct:</label>
            <input type="checkbox" name="is_correct" value={correctAnswer1} onChange={() => setCorrectAnswer1(!correctAnswer1)} />
            
            <label>Answer2:</label>
            <input type="text" name="answer" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
            
            <label>correct:</label>
            <input type="checkbox" name="is_correct" value={correctAnswer2} onChange={() => setCorrectAnswer2(!correctAnswer2)} />
            
            <label>Answer3:</label>
            <input type="text" name="answer" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
            
            <label>correct:</label>
            <input type="checkbox" name="is_correct" value={correctAnswer3} onChange={() => setCorrectAnswer3(!correctAnswer3)} />
            
            <button type="submit"  onClick={handleSubmit}>Submit</button>  
        </form>
        </Paper>

        <br />

        <TableContainer component={Paper}>
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
                            {/* <Link color="textPrimary" href={`/quiz/edit`} className={classes.link}><EditIcon></EditIcon></Link> */}
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