import { useState } from 'react';
import { Dialog, Button, Paper, Card, Typography, Grid, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import * as userService from '../../../api/user.service';
import ProfileEditForm from '../ProfileEditForm';
import StudentEditForm from '../StudentEditForm';
import StudentForm from '../../StudentForm';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
    paperTitle: {
        color: '#0B5688',
        fontWeight: 'bold'
    },
    addbutton : {
        backgroundColor: '#0B568850',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: '#0B568890'
        },
    },
}))

const Profile = ({profile, fetchProfile}) => {

    const classes = useStyles();

    const [editStudent, setEditStudent] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    const [student, setStudent] = useState("")
    const [addStudent, setAddStudent] = useState(false)

    const handleDeleteStudent = async(student) => {
        await userService.destroyStudent(student).then(() => {
            fetchProfile()
        })
    }

    const handleProfileEditClose = () => {
        setEditProfile(false);
    };

    const handleStudentEditClose = () => {
        setEditStudent(false)
    }
    
    const handleStudentAddClose = () => {
        setAddStudent(false)
    }

    return(
    <>
        <Typography className={classes.paperTitle} variant='h6'>Parent</Typography>
        <Paper className={classes.paper}>
            <Grid container>
                <Grid item xs={11}>
                    <Typography variant='h5'>{profile.username}</Typography>
                    <Divider></Divider>
                    <ul>
                        <li><Typography variant='body1'>First Name: {profile.first_name}</Typography></li>
                        <li><Typography variant='body1'>Last Name: {profile.last_name}</Typography></li>
                        <li><Typography variant='body1'>Username: {profile.username}</Typography></li>
                        <li><Typography variant='body1'>Email Address: {profile.email}</Typography></li>
                    </ul>
                </Grid>
                <Grid item xs={1}>
                    <EditIcon font='small' type="submit" onClick={()=>setEditProfile(true)}>Edit</EditIcon>
                </Grid>
            </Grid>
        </Paper>

        <Dialog open={editProfile} fullWidth='true'>
            <ProfileEditForm 
                profile={profile}
                handleProfileEditClose={handleProfileEditClose}/>
        </Dialog> 

        <Grid container>
            <Grid item xs={1}>
                <Typography className={classes.paperTitle} variant='h6'>Student</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setAddStudent(true)} className={classes.addbutton}>+ New Student</Button>
            </Grid>
        </Grid>

        <Dialog open={addStudent} fullWidth='true'>
            <StudentForm handleClose={handleStudentAddClose}/>
        </Dialog>

        {profile.students?.map((student, index) => {
            return(
            <>
                <Card className={classes.paper} key={index}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography variant='h6'>{student.name}</Typography>
                            <Divider></Divider>
                            <br />
                            <Typography variant='body2'>{student.grade}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <EditIcon
                                font='small'
                                className={classes.button}
                                type="submit"
                                onClick={()=> {
                                    setEditStudent(true)
                                    setStudent(student)
                                }}>Edit</EditIcon>
                            <DeleteForeverIcon
                                font='small'
                                className={classes.button}
                                type="submit"
                                onClick={()=> handleDeleteStudent(student.id)}>Delete</DeleteForeverIcon>
                        </Grid>
                    </Grid>
                </Card>                  
            </>
            )
        })}

        <Dialog open={editStudent} fullWidth='true'>
            <StudentEditForm 
                student={student}
                handleClose={handleStudentEditClose}/>
        </Dialog>  

    </>
    )
}
export default Profile