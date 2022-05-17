import Header from '../../components/Welcome/Header';
import About from '../../components/Welcome/Parents';
import Footer from '../../components/Welcome/Footer';
import GetStarted from '../../components/Welcome/GetStarted';
// import Description from '../../components/Welcome/Description';
import Learners from '../../components/Welcome/Learners';

const WelcomePage = () => {

    return(
        <div className='container'>
            <Header />
            {/* <Description /> */}
            <Learners />
            <About />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default WelcomePage;