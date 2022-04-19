import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Quiz = () => {

    const {id} =useParams();
    const [questionList, setQuestionList] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    useEffect(() => {
        axios
        .get(`/api/quizzes/${id}`)
        .then((res)=> {
            console.log(res.data.questions)
            setQuestionList(res.data.questions)
        })
        .catch((err) => console.log(err))
    }, [])

    const handleSelection = (correct) => {
        console.log("answer clicked")

        if (correct) {
            console.log("correct")
            setScore(score + 1)
        } else {
            console.log("wrong")
        }

        const nextQuestion = currentQuestion+ 1;
        if (nextQuestion < questionList.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true)
        }
    }

    const handleTryAgain = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }

    return(
        <div>
            Quiz component
            {showScore ? (
                <div>
                    <p>you scored {score} out of {questionList.length}</p>
                    <button onClick={() => handleTryAgain()}>Try Again</button>
                    <Link to="/main"><button>Quiz List</button></Link>
                </div>
            ) : (
                <div>
                    <p>Question {currentQuestion +1 }/{questionList.length}</p>
                    <p>{questionList[currentQuestion]?.text}</p>
                    {questionList[currentQuestion]?.answers?.map(({text, is_correct, id})=> {
                        return(
                            <div key={id}>
                                <button onClick={() => handleSelection(is_correct)}>{text}</button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
export default Quiz;