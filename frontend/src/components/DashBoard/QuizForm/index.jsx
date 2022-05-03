import { useEffect, useState } from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../../api/quiz.service";
import QuizListTable from "../QuizListTable";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
    input: {
        width: '20%',
        height: '30px',
        margin: '10px 10px'
    },
    titleInput: {
        width: '60%',
        height: '25px',
        margin: '10px 10px'
    },
    gridContainer: {
        justifyContent: 'space-between'
    },
    paperTitle: {
        color: '#0B5688',
        fontWeight: 'bold'
    }
}));

const QuizForm = ({handleEditQuiz, profile}) => {

    const classes = useStyles();
    const [quizList, setQuizList] = useState([])

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [difficulty, setDifficulty] = useState("");

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
        let newQuiz = {title, subject, grade, difficulty, author: `${profile.id}`}
        await quizService.create(newQuiz).then((res) => {
            console.log(res)
            fetchQuizzes()
            setTitle("")
            setSubject("")
            setGrade("")
            setDifficulty("")
        })
    }

    return(
    <>
        <Paper className={classes.paper}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={3}>
                    <Typography className={classes.paperTitle} variant="h6">Create New Quiz</Typography>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <label>Grade</label>
                        <select className={classes.input} value={grade} onChange={(e)=> setGrade(e.target.value)}>
                            <option>---</option>
                            <option value="Pre-K">Pre-K</option>
                            <option value="Kindergarten">Kindergarten</option>
                            <option value="1st Grade">1st Grade</option>
                            <option value="2nd Grade">2nd Grade</option>
                            <option value="3rd Grade">3rd Grade</option>
                        </select>

                        <label>Subject</label>
                        <select className={classes.input} value={subject} onChange={(e)=> setSubject(e.target.value)}>
                            <option>---</option>
                            <option value="Math">Math</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Korean">Korean</option>
                            <option value="Science">Science</option>
                            <option value="Social Studies">Social Studies</option>
                        </select>

                        <label>Difficulty</label>
                        <select className={classes.input} value={difficulty} onChange={(e)=> setDifficulty(e.target.value)}>
                            <option>---</option>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </div>
                    
                    <div>
                        <label>Title</label>
                        <input  className={classes.titleInput} type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Button type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>  
                    </div>
                    
                </Grid>
            </Grid>
        </Paper>

        <QuizListTable quizList={quizList} fetchQuizzes={fetchQuizzes} handleEditQuiz={handleEditQuiz} profile={profile}/>
    </>
    )
}
export default QuizForm;