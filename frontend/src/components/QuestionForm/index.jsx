import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import * as quizService from "../../api/quiz.service";
import { Container, TextField} from "@material-ui/core";
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const QuestionForm = () => {

    const classes = useStyles();
    const {id} =useParams();
    const [quiz, setQuiz] = useState([]);
    const [questionList, setQuestionList] = useState([])
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("")
    const [correctAnswer1, setCorrectAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState("")
    const [correctAnswer2, setCorrectAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState("")
    const [correctAnswer3, setCorrectAnswer3] = useState(false);

    const fetchQuiz = async () => {
        await quizService.getOne(`${id}`).then((res) => {
            console.log(res.data.id)
            console.log(typeof res.data.id)
            setQuiz(res.data)
            setQuestionList(res.data.questions)
        })
    }

    useEffect(() => {
        fetchQuiz()
    }, [])

    const handleSubmit = async () => {
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
            quiz: `${quiz.id}`
        }

        console.log(newQuestion);
        let res = await quizService.questionCreate(newQuestion).then((res) => {
            console.log(res)
            console.log("created")
        })
        if (!res===201) {
            alert(`ERROR! It was code: ${res.status}`)
        }
    }

    return(
    <Container>
    <>
        <h1>{quiz.title}</h1>
        <form>
            <label>
            Question:
                <input type="text" name="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </label>
            <label>
            Answer1:
                <input type="text" name="answer" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
            </label>
            <label>
            correct:
                <input type="checkbox" name="is_correct" value={correctAnswer1} onChange={() => {
                    setCorrectAnswer1(!correctAnswer1)
                }} />
            </label>
            <label>
            Answer2:
                <input type="text" name="answer" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
            </label>
            <label>
            correct:
                <input type="checkbox" name="is_correct" value={correctAnswer2} onChange={() => {
                    setCorrectAnswer2(!correctAnswer2)
                }} />
            </label>
            <label>
            Answer3:
                <input type="text" name="answer" value={answer3} onChange={(e) => setAnswer3(e.target.value)} />
            </label>
            <label>
            correct:
                <input type="checkbox" name="is_correct" value={correctAnswer3} onChange={() => {
                    setCorrectAnswer3(!correctAnswer3)
                }} />
            </label>

            <button type="submit"  onClick={handleSubmit}>Add</button>  
            {/* <IconButton>
                <RemoveIcon />
            </IconButton>
            <IconButton>
                <AddIcon />
            </IconButton> */}
        </form>

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
            {questionList.map((question, index) => (
                <TableRow key={question.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {question.text}
                    </TableCell>
                        {question.answers.map((answer) => {
                            return (
                                <TableCell align="right">{answer.is_correct? <strong>{answer.text}</strong>: <span>{answer.text}</span>}</TableCell>
                            )
                        })}
                    <TableCell align="right">
                        <Link 
                            color="textPrimary"
							href={`/quiz/edit`}
							className={classes.link}><EditIcon></EditIcon></Link>
                        <Link 
                            color="textPrimary"
							className={classes.link}><DeleteForeverIcon></DeleteForeverIcon></Link>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>

</>
     </Container>
    )
}
export default QuestionForm;