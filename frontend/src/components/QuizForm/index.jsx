import { useEffect, useState } from "react";
import * as quizService from "../../api/quiz.service";
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from "@material-ui/core";
import QuizListTable from "../QuizListTable";
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

const QuizForm = () => {

    const classes = useStyles();
    const [quizList, setQuizList] = useState([])
    const [title, setTitle] = useState();
    const [subject, setSubject] = useState();
    const [grade, setGrade] = useState();
    const [difficulty, setDifficulty] = useState();
    // const [question1, setQuestion1] = useState();
    // const [answer1, setAnswer1] = useState()
    // const [correctAnswer1, setCorrectAnswer1] = useState(false);
    // const [answer2, setAnswer2] = useState()
    // const [correctAnswer2, setCorrectAnswer2] = useState(false);
    // const [answer3, setAnswer3] = useState()
    // const [correctAnswer3, setCorrectAnswer3] = useState(false);

    const fetchQuizzes = async () => {
        await quizService.getAll().then((res) => {
            setQuizList(res.data)
        })
    };

    useEffect(() => {
        fetchQuizzes()
    }, [] )

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newQuiz = {title, subject, grade, difficulty}
        let res = await quizService.create(newQuiz).then((res) => {
            console.log(res)
            fetchQuizzes()

        })
        if (!res===201) {
            alert(`ERROR! It was code: ${res.status}`)
        }
    }

    const handleDelete = async (id) => {
        await quizService.destroy(id).then((res) => {
            fetchQuizzes()
        })
    }

    return(
    <>
        <Paper>
            <Typography variant="h6">Create New Quiz</Typography>
            <label>Title:</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Subject</label>
            <select value={grade} onChange={(e)=> setSubject(e.target.value)}>
                <option>---</option>
                <option value="Math">Math</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Korean">Korean</option>
                <option value="Science">Science</option>
                <option value="Social Studies">Social Studies</option>
            </select>

            <label>Grade</label>
            <select value={grade} onChange={(e)=> setGrade(e.target.value)}>
                <option>---</option>
                <option value="Pre-K">Pre-K</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="1st Grade">1st Grade</option>
                <option value="2nd Grade">2nd Grade</option>
                <option value="3rd Grade">3rd Grade</option>
            </select>

            <label>Difficulty</label>
            <select value={difficulty} onChange={(e)=> setDifficulty(e.target.value)}>
                <option>---</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="difficult">difficult</option>
            </select>

            {/* <label>
            Question1:
                <input type="text" name="text" value={question1} onChange={(e) => setQuestion1(e.target.value)} />
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
            </label> */}
            <Button type="submit"  onClick={handleSubmit}>Submit</Button>  
        </Paper>

        <br />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Subject</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">Difficulty</TableCell>
                        <TableCell align="right">Number of Questions</TableCell>
                        <TableCell align="right">Created_at</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {quizList.map((quiz) => (
                    <TableRow key={quiz.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{quiz.title}</TableCell>
                        <TableCell align="right">{quiz.subject}</TableCell>
                        <TableCell align="right">{quiz.grade}</TableCell>
                        <TableCell align="right">{quiz.difficulty}</TableCell>
                        <TableCell align="right">{quiz.questions.length}</TableCell>
                        <TableCell align="right">{quiz.created_at}</TableCell>
                        <TableCell align="right">
                            <Link color="textPrimary" href={`/quiz/${quiz.id}/edit`} className={classes.link}><EditIcon></EditIcon></Link>
                            <DeleteForeverIcon onClick={()=> handleDelete(quiz.id)}></DeleteForeverIcon>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
</>
    )
}
export default QuizForm;