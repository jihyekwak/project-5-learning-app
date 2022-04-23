import { Link} from 'react-router-dom';
import { Container } from "@material-ui/core";

const WelcomePage = () => {

    return(
        <Container>
            <h1>Welcome Page</h1>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </Container>
    )
}
export default WelcomePage;