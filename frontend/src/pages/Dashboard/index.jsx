import { useState } from 'react';
import { Button, Container, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StudentForm from '../../components/StudentForm';
// import SettingsIcon from '@mui/icons-material/Settings';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
        fontSize: '40px',
        fontFamily: 'Staatliches',
        color: '#0B5688',
        letterSpacing:'1px',
        margin: '30px 0'
    },
    text: {
        fontFamily: 'Viga',
        margin: '15px  0 5px 0',
        textDecoration: 'underline'
    }
}))

const Dashboard = ({profile}) => {

    const classes = useStyles();
    const [add, setAdd] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setAdd(true)
    }

    if (add) {
        return(
            <Container>
                <StudentForm/>
            </Container>
        )
    } 

    return(
        <Container>
            <Typography variant='h5' className={classes.headerTitle}>Welcome {profile.username}</Typography>
            <Grid container spacing={4} className={classes.gridContainer}>
                {profile.students?.map((student) => {
                    return(
                        <Grid item xs={4} zeroMinWidth key={student.id} className={classes.grid}>
                        <Card href={`/${student.id}/quizzes`} className={classes.card}>
                            <Grid container>
                                <Grid xs={2}></Grid>
                                <Grid xs={8}>
                            <Typography className={classes.text}>{student.grade}</Typography>
                            </Grid>
                            <Grid xs={2}>
                            <Button>setting</Button>
                            </Grid>
                            </Grid>
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
        </Container>
    )
}
export default Dashboard