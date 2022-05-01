import { useEffect, useState } from "react";
import * as quizService from "../../../api/quiz.service";
import { Table, TableContainer, Paper, Button, Typography } from "@material-ui/core";
import QuizListTable from "../QuizListTable";
import { makeStyles } from "@material-ui/core/styles";

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
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
}));

const QuizForm = ({handleEditQuiz}) => {

    const classes = useStyles();
    const [quizList, setQuizList] = useState([])

    const [title, setTitle] = useState();
    const [subject, setSubject] = useState();
    const [grade, setGrade] = useState();
    const [difficulty, setDifficulty] = useState();

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

    return(
    <>
        <Paper className={classes.paper}>
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
            <Button type="submit"  onClick={handleSubmit}>Submit</Button>  
        </Paper>

        <QuizListTable quizList={quizList} fetchQuizzes={fetchQuizzes} handleEditQuiz={handleEditQuiz}/>
    </>
    )
}
export default QuizForm;