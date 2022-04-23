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

  const userActive = () => {
    if(authService.currentUser()) {
      console.log('currentUser')
        setIsLoggedIn(true);
    } else {
      console.log('nocurrentuser')
        setIsLoggedIn(false);
    }
  }

  useEffect(()=>{
    userActive();
  }, [])

  if (isLoggedIn) {
    return (
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="main" element={<MainPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="quiz/:id" element={<Quiz/>} />
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
