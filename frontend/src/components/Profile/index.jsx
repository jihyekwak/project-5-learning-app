import { useState } from 'react';
import { Dialog, Button, Paper, Card, Typography, Grid, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from '../../api/user.service';
import ProfileEditForm from '../ProfileEditForm';
import StudentEditForm from '../StudentEditForm';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    text:{
        fontFamily: 'Viga',
    },
    paper: {
        margin: "15px 0",
        padding: "15px"
    },
}))

const Profile = ({profile, fetchprofile}) => {

    const classes = useStyles();

    const [editStudent, setEditStudent] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    const [student, setStudent] = useState("")

    const handleDeleteStudent = async(student) => {
        await userService.destroyStudent(student).then(() => {
            fetchprofile()
        })
    }

    const handleProfileEditClose = () => {
        setEditProfile(false);
    };

    const handleStudentEditClose = () => {
        setEditStudent(false)
    }

    return(
    <>
    <Typography variant='h5'>Parent</Typography>
    <Paper className={classes.paper}>
        <Grid container>
            <Grid item xs={11}>
                <Typography variant='h5'>{profile.username}</Typography>
                <Divider></Divider>
                <br />
                <Typography variant='body1'>First Name: {profile.first_name}</Typography>
                <Typography variant='body1'>Last Name: {profile.last_name}</Typography>
                <Typography variant='body1'>Email Address: {profile.email}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Button variant='contained' onClick={()=>setEditProfile(true)}>Edit</Button>
            </Grid>
        </Grid>
    </Paper>

    <Dialog open={editProfile} fullWidth='true'>
        <ProfileEditForm 
            profile={profile}
            handleProfileEditClose={handleProfileEditClose}/>
    </Dialog> 

    <Typography variant='h5'>Student</Typography>
    {profile.students?.map((student) => {
        return(
        <>
            <Card className={classes.paper}>
                <Grid container>
                    <Grid xs={11}>
                        <Typography variant='h5'>{student.name}</Typography>
                            <p>{student.grade}</p>
                    </Grid>
                    <Grid xs={1}>
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