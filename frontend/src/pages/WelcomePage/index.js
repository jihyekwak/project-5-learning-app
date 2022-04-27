import Header from '../../components/Header';
import About from '../../components/About';
import Footer from '../../components/Footer';
import GetStarted from '../../components/GetStarted';

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