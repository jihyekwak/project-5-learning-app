import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizForm from "../../components/QuizForm";
import QuizListTable from "../../components/QuizListTable";

const useStyles = makeStyles((theme) => ({

}))

const MyPage = () => {

    const classes = useStyles();

    return(
        <Container>
            <QuizForm />
            {/* <QuizListTable /> */}
        </Container>
    )
}
export default MyPage;