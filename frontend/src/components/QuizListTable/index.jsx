import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../api/quiz.service";

const QuizListTable= () => {

    const [quizList, setQuizList] = useState([])

    const fetchQuizzes = async () => {
        await quizService.getAll().then((res) => {
            setQuizList(res.data)
        })
    };

    useEffect(() => {
        fetchQuizzes()
    }, [])

    return(
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Subject</TableCell>
                    <TableCell align="right">Grade&nbsp;(g)</TableCell>
                    <TableCell align="right">Difficulty&nbsp;(g)</TableCell>
                    <TableCell align="right">Created_at&nbsp;(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {quizList.map((quiz) => (
                <TableRow key={quiz.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {quiz.title}
                    </TableCell>
                    <TableCell align="right">{quiz.subject}</TableCell>
                    <TableCell align="right">{quiz.grade}</TableCell>
                    <TableCell align="right">{quiz.difficulty}</TableCell>
                    <TableCell align="right">{quiz.created_at}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default QuizListTable;