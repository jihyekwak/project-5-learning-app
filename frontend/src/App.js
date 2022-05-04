import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/DashBoardPage';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import TakeQuizPage from './pages/TakeQuizPage';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import StudentForm from './components/StudentForm';
import * as authService from "./api/auth.service";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");

  const userActive = () => {
    if(authService.currentUser() !== null) {
        setIsLoggedIn(true);
        fetchProfile();
    } else {
        setIsLoggedIn(false);
    }
  }

  const fetchProfile = async () => {
    await authService.getProfile().then((res) => {
      setProfile(res.data)
    })
  }

  useEffect(()=>{
    userActive();
  }, [])

  useEffect(()=>{
    fetchProfile();
  }, [])

  if (isLoggedIn) {
    return (
      <div className="App">

      <Routes>
        <Route path="student" element={<StartPage profile={profile}/>} />
        <Route path="dashboard" element={<DashboardPage profile={profile} fetchProfile={fetchProfile}/>} />
        <Route path="/student/:studentId/quizzes/:id/" element={<TakeQuizPage/>} />
        <Route path="/student/:studentId/" element={<QuizPage profile={profile}/>} />
        <Route path="newstudent" element={<StudentForm/>} />
      </Routes>
    </div>
    )
  } else {
    return(
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    )
  }
}

export default App;