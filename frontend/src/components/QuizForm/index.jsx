import { useEffect, useState } from "react";
import * as quizService from "../../api/quiz.service";
import { Container, Button, IconButton } from "@material-ui/core";
import QuizListTable from "../QuizListTable";
// import { RemoveIcon, AddIcon } from "@mateial-ul/icons";
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';


const QuizForm = () => {

    const [title, setTitle] = useState();
    const [subject, setSubject] = useState();
    const [difficulty, setDifficulty] = useState();
    const [grade, setGrade] = useState();
    // const [question1, setQuestion1] = useState();
    // const [answer1, setAnswer1] = useState()
    // const [correctAnswer1, setCorrectAnswer1] = useState(false);
    // const [answer2, setAnswer2] = useState()
    // const [correctAnswer2, setCorrectAnswer2] = useState(false);
    // const [answer3, setAnswer3] = useState()
    // const [correctAnswer3, setCorrectAnswer3] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()
        let newQuiz = {title, subject, difficulty, grade}
        let res = await quizService.create(newQuiz).then((res) => {
            console.log(res)
        })
        if (!res===201) {
            alert(`ERROR! It was code: ${res.status}`)
        }
    }

    return(
    <Container>
    <>
        Quiz Create Form
        <form>
            <label>
            Title:
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
            Subject:
                <select onChange={(e) => setSubject(e.target.value)}>
                    <option>select</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Korean">Korean</option>
                    <option value="Science">Science</option>
                    <option value="diffSocial Studiesicult">Social Studies</option>
                    
                </select>
            </label>
            <label>
            Difficulty:
                <select onChange={(e) => setDifficulty(e.target.value)}>
                    <option>select</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="difficult">difficult</option>
                </select>
            </label>
            <label>
            Grade:
                <select onChange={(e) => setGrade(e.target.value)}>
                    <option>select</option>
                    <option value="Pre-K">Pre-K</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="1st Grade">1st Grade</option>
                    <option value="2nd Grade">2nd Grade</option>
                    <option value="3rd Grade">3rd Grade</option>
                </select>
            </label>
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

            <button type="submit"  onClick={handleSubmit}>Add</button>  
            {/* <IconButton>
                <RemoveIcon />
            </IconButton>
            <IconButton>
                <AddIcon />
            </IconButton> */}
        </form>
</>
    <QuizListTable />
     </Container>
    )
}
export default QuizForm;