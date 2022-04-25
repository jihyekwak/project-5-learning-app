import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizForm from "../../components/QuizForm";
import QuizListTable from "../../components/QuizListTable";
import Profile from "../../components/Profile";

const useStyles = makeStyles((theme) => ({

}))

const MyPage = ({profile}) => {

    const classes = useStyles();

    return(
        <Container>
            <Grid container>
                <Grid item xs={2}>
                    <Profile profile={profile}/>
                </Grid>
                <Grid item xs={10}>
                    <QuizForm />
                </Grid>
            </Grid>


            {/* <QuizListTable /> */}
        </Container>
    )
}
export default MyPage;