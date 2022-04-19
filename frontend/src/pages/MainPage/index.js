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

    const cardStyle = {
        backgroundColor: '#F9D263',
        width: '400px',
        height: '200px',
        display: 'inline-block',
        borderRadius: '30px',
        padding: '10px',
        margin: '20px',
        textAlign: 'center'
    }

    const titleStyle = {
        textAlign: 'center',
        fontFamily: 'Cabin Sketch',
        fontSize: '50px',
        margin: '25px auto'
    }

    const tagStyle = {
        backgroundColor: '#f2e5ca',
        padding: '3px',
        borderRadius: '5px',
        margin: '3px',
        fontFamily: 'Sniglet',
    }

    const buttonStyle = {
        backgroundColor: '#F3974F',
        border: 'none',
        borderRadius: '15px',
        fontSize: '20px',
        padding: '5px',
        fontFamily: 'Sniglet'
    }
    
    return(
        <div>
            <h1 style={{
                textAlign:'center',
                fontSize: '50px',
                fontFamily: 'Staatliches'
            }}>Quiz List</h1>
            <div>
                {quizList.map((quiz) => {
                    return (

                    <div style={cardStyle} key={quiz.id}>
                        <div style={{ textAlign: 'right',margin: '10px'}}>
                            <span style={tagStyle}>{quiz.subject}</span>
                            <span style={tagStyle}>{quiz.grade}</span>
                            <span style={tagStyle}>{quiz.difficulty}</span>
                        </div>
                        <h2 style={titleStyle}>{quiz.title}</h2>
                        <Link to={`/quiz/${quiz.id}`}>
                            <button style={buttonStyle}>Take Quiz</button></Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MainPage;