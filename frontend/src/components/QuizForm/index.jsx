import { useEffect, useState } from "react";
import * as quizService from "../../api/quiz.service";
import * as subjectService from "../../api/subject.service";

const QuizForm = () => {

    const [subjectList, SetSubjectList] = useState([]);
    const [title, setTitle] = useState();
    const [subject, setSubject] = useState();
    const [difficulty, setDifficulty] = useState();
    const [grade, setGrade] = useState();
    
    const fetchSubjects = async () => {
        await subjectService.getAll().then((res) => {
            SetSubjectList(res.data)
        })
    }

    useEffect(() => {
        fetchSubjects();
    }, [])

    const handleSubmit = async () => {
        let newQuiz = {title, subject, difficulty, grade};
        console.log(newQuiz);
        let res = await quizService.create(newQuiz).then(() => {
            document.location = "/main"
        })
        if (!res===201) {
            alert(`ERROR! It was code: ${res.status}`)
        }
    }
    
    return(
    <div>
        Quiz Form
        <form>
            <label>
            Title:
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
            Subject:
                <select onChange={(e) => setSubject(e.target.value)}>
                    <option>select</option>
                    {subjectList?.map(({id, name}, i) => {
                        return(
                            <option key={i} value={id}>{name}</option>
                        )
                    })}
                    
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
            <button type="submit"  onClick={handleSubmit}>Add</button>  
        </form>

    </div>
    )
}
export default QuizForm;