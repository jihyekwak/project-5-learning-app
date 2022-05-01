import { useState, useEffect } from 'react';
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as quizService from "../../../api/quiz.service";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const QuizListTable= (props) => {

    const classes = useStyles();
    // const [quizList, setQuizList] = useState([])
    const [edit, setEdit] = useState(false)
    const [editQuiz, setEditQuiz] = useState()

    // const fetchQuizzes = async () => {
    //     await quizService.getAll().then((res) => {
    //         setQuizList(res.data)
    //     })
    // };

    useEffect(() => {
        props.fetchQuizzes()
        console.log('fetched quizlist at table')
    }, [] )

    const handleEdit = (quiz) => {
        // setEdit(true)
        // setEditQuiz(quiz)
    }

    const handleDelete = async (id) => {
        await quizService.destroy(id).then((res) => {
            console.log("deleted")
            props.fetchQuizzes()
        })
    }

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Subject</TableCell>
                    <TableCell align="right">Grade</TableCell>
                    <TableCell align="right">Difficulty</TableCell>
                    <TableCell align="right">Number of Questions</TableCell>
                    <TableCell align="right">Created_at</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.quizList.map((quiz) => (
                <TableRow key={quiz.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{quiz.title}</TableCell>
                    <TableCell align="right">{quiz.subject}</TableCell>
                    <TableCell align="right">{quiz.grade}</TableCell>
                    <TableCell align="right">{quiz.difficulty}</TableCell>
                    <TableCell align="right">{quiz.questions.length}</TableCell>
                    <TableCell align="right">{quiz.created_at}</TableCell>
                    <TableCell align="right">

                        <EditIcon onClick={() => {
                            console.log("edit btn")
                            props.handleEditQuiz(quiz)}
                            }></EditIcon>
                        <DeleteForeverIcon onClick={()=> handleDelete(quiz.id)}></DeleteForeverIcon>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default QuizListTable;