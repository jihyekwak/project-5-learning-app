import { useState } from 'react';
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Profile from '../../components/Profile';
import StudentForm from '../../components/StudentForm';

const useStyles = makeStyles((theme) => ({
    grid: {
        justifyContent: 'space-evenly'
    },
    button: {
        border: '15px solid #0B568850',
        width: '200px',
        height: '200px',
        borderRadius: '40px',
        fontFamily: 'Viga',
        fontSize: '30px',
        margin: '5px',
        "&:hover": {
            transform: 'scale(1.1)',
            cursor: 'pointer',
            border: '15px solid #0B5688'
        },
    }
}))

const MyPage = ({profile}) => {

    const classes = useStyles();
    const [add, setAdd] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setAdd(true)
    }

    if (add) {
        return(
<Container>
            <Grid container>
                <Grid item xs={2}>
                    <Profile profile={profile}/>
                </Grid>
                <Grid item xs={10}>
                    <StudentForm/>
                </Grid>
            </Grid>
        </Container>
        )

    } 

    return(
        <Container>
            <Grid container>
                <Grid item xs={2}>
                    <Profile profile={profile}/>
                </Grid>
                <Grid item xs={10}>
                    <h1>Let's Start Learning!</h1>
                    <h1>Select Learner</h1>
                    <Grid container className={classes.grid}>
                    {profile.students?.map((student) => {
                        return(
                            <Button href={`/${student.id}/quizzes`} className={classes.button}>{student.name}</Button>
                        )
                    })}
                    <Button onClick={handleSubmit} className={classes.button}>New Student</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default MyPage