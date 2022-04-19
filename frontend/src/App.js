import { Routes, Route} from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import NavBar from './components/NavBar';
import Quiz from './components/Quiz';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="quiz/:id" element={<Quiz/>} />
      </Routes>
    </div>
  );
}

export default App;
