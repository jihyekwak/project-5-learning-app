import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const MainPage = () => {

    const [quizList, setQuizList] = useState([])

    useEffect(() => {
        axios
        .get("/api/quizzes/")
        .then((res)=> {
            console.log(res.data)
            setQuizList(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            main page
            <div>
                <h2>Quiz List</h2>
                {quizList.map((quiz) => {
                    return (
                    <div style={{
                        border: '2px solid gray',
                        width: '450px',
                        height: '200px',
                        borderRadius: '20px',
                        display: 'inline-block',
                        margin: '20px'
                    }}
                    key={quiz.id}>
                    <h2>{quiz.title}</h2>
                    <p>{quiz.subject}</p>
                    <p>{quiz.grade}</p>
                    <p>{quiz.difficulty}</p>
                    <Link to={`/quiz/${quiz.id}`}><button>Take Quiz</button></Link>
                    
                    </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}
export default MainPage;