import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
    studentCard: {
        alignItems: 'center',
        textAlign: 'center'
    }
}))

const DashboardHome = ({profile}) => {

    const classes = useStyles();

    return (
    <>
        <Paper className={classes.paper}>
            <Typography variant='h5'>{profile.username}</Typography>
                <ul>
                    <li><Typography variant='body1'>First Name: {profile.first_name}</Typography></li>
                    <li><Typography variant='body1'>Last Name: {profile.last_name}</Typography></li>
                    <li><Typography variant='body1'>Username: {profile.username}</Typography></li>
                    <li><Typography variant='body1'>Email Address: {profile.email}</Typography></li>
                </ul>
        </Paper>

        <Grid container spacing={2}>
            {profile.students?.map((student, index) => {
            return(
                <Grid item xs={3}>
                    <Paper key={index} className={classes.paper}>
                        <Grid container className={classes.studentCard}>
                            <Grid itme xs={4}>
                                <Typography variant='h6'>{student.name}</Typography>
                            </Grid>
                            <Grid itme xs={8}>
                                <Typography>Last 7 Days</Typography>
                                <Typography variant='h4'>{student.quizzes?.length}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            )
            })}
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant='h6'>My Custom Quizzes</Typography>
                    <Typography>{profile.quizzes?.length}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant='h6'>Memo</Typography>
                    
                </Paper>
            </Grid>
        </Grid>

        <Paper className={classes.paper}>
            <Typography variant='h6'>Learning Resource</Typography>
        </Paper>
    </>
    )
}

export default DashboardHome