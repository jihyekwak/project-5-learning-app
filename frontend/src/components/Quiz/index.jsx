import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const Quiz = () => {

    const {id} =useParams();
    const [questionList, setQeustionList] = useState([])

    useEffect(() => {
        axios
        .get(`/api/quizzes/${id}`)
        .then((res)=> {
            console.log(res.data.questions)
            setQeustionList(res.data.questions)
        })
        .catch((err) => console.log(err))
    }, [])


    return(
        <div>
            Quiz component
            <div>
                <h2>Question List</h2>
                {questionList.map(({text, answers} ,i) => {
                    return(
                        <div key={i}>
                        <p>{text}</p>
                        {answers.map(({text, id}) => {
                            return (
                                <div key={id}>
                                <input type="checkbox" name={text} value={text}></input>
                                <label>{text}</label>    
                                </div>

                            )
                            
                        })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Quiz;