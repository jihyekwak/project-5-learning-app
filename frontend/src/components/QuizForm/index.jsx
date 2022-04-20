import { useEffect, useState } from "react";
import axios from 'axios';

const QuizForm = () => {

    const [subjectList, SetSubjectList] = useState([]);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [grade, setGrade] = useState("");
    
    useEffect(() => {
        axios
        .get("/api/subjects/")
        .then((res)=> {
            console.log(res.data)
            SetSubjectList(res.data)
        })
        .catch((err) => console.log(err))
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let newQuiz = {title, subject, difficulty, grade};

        
            axios
            .post('/api/quizzes/new/', {newQuiz})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => console.log(err))
    
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
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="difficult">difficult</option>
                </select>
            </label>
            <label>
            Grade:
                <select onChange={(e) => setGrade(e.target.value)}>
                    <option value="Pre-k">Pre-k</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="1st Grage">1st Grage</option>
                    <option value="2nd Grage">2nd Grage</option>
                    <option value="3rd Grage">3rd Grage</option>
                </select>
            </label>
            <button type="submit"  onClick={handleSubmit}>Add</button>
        </form>
    </div>
    )
}
export default QuizForm;