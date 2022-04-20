import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizForm from "../../components/QuizForm";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px' 
    }
}))


const MyPage = () => {

    const classes = useStyles();

    return(
        <Container className={classes.container}>
            my page
            <QuizForm />
        </Container>
    )
}
export default MyPage;