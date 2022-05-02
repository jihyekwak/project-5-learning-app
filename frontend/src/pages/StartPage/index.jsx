import { useState } from 'react';
import { Dialog, Button, Container, Grid, Card, Typography, Avatar} from "@material-ui/core";
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
        border: '10px solid #0B568850',
        borderRadius: '20px'
    },
    gridContainer : {
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    grid: {
        margin: '20px 0',
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
    },
    avatar: {
        maxWidth: "100%",
        marginTop: '25%',
    }
}))

const StartPage = ({profile}) => {

    const classes = useStyles();
    const [addStudent, setAddStudent] = useState(false)

    const handleOpen = () => {
        setAddStudent(true)
    }

    const handleClose = () => {
        setAddStudent(false);
    };

    return(
        <>
        <NavBar profile={profile}/>
        <Container>
            <Typography variant='h3' className={classes.headerTitle}>Choose Student and Start Learning</Typography>
            <Grid container spacing={4} className={classes.gridContainer}>
                {profile.students?.map((student) => {
                    return(
                        <Grid item xs={4} zeroMinWidth key={student.id} className={classes.grid}>
                        <Card className={classes.card}>
                            <Grid container justifyContent='space-evenly'>
                                <Grid item xs={4}>
                                    <img className={classes.avatar} src={`image/${student.avatar}.png`} alt={`${student.avatar}`} />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography className={classes.text}>{student.grade}</Typography>
                                    <Typography variant='h3' className={classes.text}> {student.name}</Typography>
                                    <Button key={student.id} href={`student/${student.id}/`} className={classes.button}>
                                        start
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <Button onClick={handleOpen} className={classes.addbutton}>+ New Student</Button>
            <Dialog open={addStudent} fullWidth='true'>
                <StudentForm handleClose={handleClose}/>
            </Dialog>

        </Container>
        </>    
    )
}
export default StartPage;