import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizForm from "../../components/QuizForm";
import QuizListTable from "../../components/QuizListTable";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px' 
    }
}))

const MyPage = () => {

    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <QuizForm />
            {/* <QuizListTable /> */}
        </Container>
    )
}
export default MyPage;