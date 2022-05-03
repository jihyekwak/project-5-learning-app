import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    }
}))

const DashboardHome = ({profile}) => {

    const classes = useStyles();

    return (
    <>
        <Paper className={classes.paper}>
            <Typography variant='h4'>{profile.username}</Typography>
        </Paper>

        {profile.students?.map((student, index) => {
        return(
            <Paper key={index} className={classes.paper}>
                <Typography variant='h5'>{student.name}</Typography>
                <Typography>{student.quizzes?.length}</Typography>
            </Paper>
        )
        })}

        <Paper className={classes.paper}>
            <Typography variant='h6'>My Custom Quizzes</Typography>
            <Typography>{profile.quizzes?.length}</Typography>
        </Paper>

        <Paper className={classes.paper}>
            <Typography variant='h6'>Learning Resource</Typography>
        </Paper>
    </>
    )
}

export default DashboardHome