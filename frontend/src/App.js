import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import NavBar from './components/NavBar';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
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
      console.log(res)
      setProfile(res.data)
    })
  }

  useEffect(()=>{
    userActive();
  }, [])

  if (isLoggedIn) {
    return (
      <div className="App">
      <NavBar profile={profile}/>
      <Routes>
        <Route path="main" element={<MainPage />} />
        <Route path="mypage" element={<MyPage profile={profile}/>} />
        <Route path="/:student/quizzes/:id" element={<Quiz/>} />
        <Route path="/:student/quizzes" element={<MainPage/>} />
      </Routes>
    </div>
    )
  } else {
    return(
      <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    )
  }

  // return (
  //   <div className="App">
  //     <NavBar />
  //     <Routes>
  //       <Route path="/" element={<WelcomePage />} />
  //       <Route path="main" element={<MainPage />} />
  //       <Route path="mypage" element={<MyPage />} />
  //       <Route path="quiz/:id" element={<Quiz/>} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
  //   </div>
  // );
}

export default App;