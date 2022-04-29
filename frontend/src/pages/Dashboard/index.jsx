import { useState } from 'react';
import { Button, Container, Grid, Card, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StudentForm from '../../components/StudentForm';
import NavBar from '../../components/NavBar';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#0B568850',
        height: '50px',
        fontFamily: 'Viga',
        fontSize: '15px',
        margin: '25px 10px',
        marginBottom: '5px',
        padding: '10px',
        width: '130px',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#0B5688',
            cursor: 'pointer',
            color: 'white'
        },
    },
    addbutton : {
        width: '25%',
        height: '50px',
        borderRadius: '100px',
        fontFamily: 'Viga',
        fontSize: '20px',
        margin: '50px auto',
        backgroundColor: '#0B568850',
        "&:hover": {
            // transform: 'scale(1.1)',
            cursor: 'pointer',
            backgroundColor: '#0B568890'
        },
    },
    card: {
        padding: '10px',
        textAlign: 'center',
        height: '100%',
        "&:hover": {
            transform: 'scale(1.05)'
        },
    },
    gridContainer : {
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    grid: {
        margin: '20px 0'
    },
    headerTitle: {
        fontFamily: 'Staatliches',
        color: '#0B5688',
        letterSpacing:'1px',
        margin: '20px 0'
    },
    text: {
        fontFamily: 'Viga',
        margin: '15px  0 5px 0',
        textDecoration: 'underline'
    }
}))

const Dashboard = ({profile}) => {

    const classes = useStyles();
    const [addStudent, setAddStudent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setAddStudent(true)
    }

    if (addStudent) {
        return(
            <Container>
                <StudentForm/>
            </Container>
        )
    } 

    return(
        <>
        <NavBar profile={profile}/>
        <Container>
            <Typography variant='h3' className={classes.headerTitle}>Dashboard</Typography>
            <Typography variant='h5' className={classes.headerTitle}>Children</Typography>
            <Grid container spacing={4} className={classes.gridContainer}>
                {profile.students?.map((student) => {
                    return(
                        <Grid item xs={4} zeroMinWidth key={student.id} className={classes.grid}>
                        <Card href={`/${student.id}/quizzes`} className={classes.card}>
                            <Typography className={classes.text}>{student.grade}</Typography>
                            <Typography variant='h3' className={classes.text}> {student.name}</Typography>
                            <Button key={student.id} href={`/${student.id}/quizzes`} className={classes.button}>
                                start
                            </Button>
                        </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <Button onClick={handleSubmit} className={classes.addbutton}>+ New Student</Button>
            {/* <Grid container>
                <Grid xs={3}>
                    <Paper>
                        <Typography variant='h6'>Report</Typography>
                    </Paper>
                </Grid>

                <Grid xs={3}>
                    <Paper>
                    <Typography variant='h6'>My Quiz</Typography>
                    </Paper>
                </Grid>
            </Grid> */}
        </Container>
        </>
        
    )
}
export default Dashboard