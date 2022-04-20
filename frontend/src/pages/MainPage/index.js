import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Grid, Typography, Button, Card, CardHeader, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#F9D263',
        padding: '10px',
        borderRadius: '30px',
        textAlign: 'center',
        height: '100%'
    },
    tag: {
        backgroundColor: '#f2e5ca',
        padding: '3px',
        borderRadius: '5px',
        margin: '3px',
        fontFamily: 'Sniglet',
    },
    quizTitle: {
        textAlign: 'center',
        fontFamily: 'Cabin Sketch',
        margin: '25px auto'
    },
    button: {
        backgroundColor: '#F3974F',
        border: 'none',
        borderRadius: '15px',
        fontSize: '17px',
        padding: '7px',
        fontFamily: 'Sniglet',
        "&:hover": {
            transform: 'scale(1.3)',
            backgroundColor: '#ea624c',
            cursor: 'pointer'
        },
    },
}));

const MainPage = () => {

    const classes = useStyles();
    const [quizList, setQuizList] = useState([])

    useEffect(() => {
        axios
        .get("/api/quizzes/")
        .then((res)=> {
            console.log(res.data)
            setQuizList(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    return(
        <Container fluid>
            <h1 style={{
                textAlign:'center',
                fontSize: '50px',
                fontFamily: 'Staatliches'
            }}>Quiz List</h1>
            <Grid container spacing={3} className={classes.gridContainer}>
                {quizList.map((quiz) => {
                    return (
                        <Grid item xs={3} zeroMinWidth key={quiz.id}>
                            <Card className={classes.card}>
                                <Typography noWrap variant="body2" align="right">
                                    <span className={classes.tag}>{quiz.subject}</span>
                                    <span className={classes.tag}>{quiz.grade}</span>
                                    <span className={classes.tag}>{quiz.difficulty}</span>
                                </Typography>
                                <Typography variant="h3" className={classes.quizTitle}>
                                    {quiz.title}
                                </Typography>
                            {/* <Link to={`/quiz/${quiz.id}`}> */}
                                <Button href={`/quiz/${quiz.id}`} className={classes.button}>Take Quiz</Button>
                            {/* </Link> */}
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default MainPage;