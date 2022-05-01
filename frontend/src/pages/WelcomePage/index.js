import Header from '../../components/Welcome/Header';
import About from '../../components/Welcome/About';
import Footer from '../../components/Welcome/Footer';
import GetStarted from '../../components/Welcome/GetStarted';
import NavBar from '../../components/NavBar';

const WelcomePage = () => {

    return(
        <div className='container'>
            <Header />
            <About />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default WelcomePage;