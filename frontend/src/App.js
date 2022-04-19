import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import axios from "axios";
import './App.css';
import WelcomePage from './pages/WelcomePage';
import NavBar from './components/NavBar';
import Quiz from './components/Quiz';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

function App() {

  // const [quizList, setQuizList] = useState([])

  // useEffect(() => {
  //   axios
  //   .get("/api/quizzes/")
  //   .then((res)=> {
  //     console.log(res.data)
  //     setQuizList(res.data)
  //   })
  //   .catch((err) => console.log(err))
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="/quiz/:id" element={<Quiz/>} />
      </Routes>
      {/* <h1>Learning App</h1>
      <h2>Quiz List</h2>
        {quizList.map((quiz) => {
          return (
            <div 
              style={{
                border: '2px solid gray',
                width: '450px',
                height: '200px',
                borderRadius: '20px',
                display: 'inline-block',
                margin: '20px'
              }}
              key={quiz.id}>
              <>
                <h2>{quiz.title}</h2>
                <p>{quiz.subject}</p>
                <p>{quiz.grade}</p>
                <p>{quiz.difficulty}</p>
              </>
            </div>
          )
        })} */}
    </div>
  );
}

export default App;
