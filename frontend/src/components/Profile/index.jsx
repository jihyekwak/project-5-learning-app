import { useState } from 'react';
import { Dialog, Button, Paper, Card, Typography, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as userService from '../../api/user.service';
import ProfileEditForm from '../ProfileEditForm';
import StudentEditForm from '../StudentEditForm';

const useStyles = makeStyles((theme) => ({
    text:{
        fontFamily: 'Viga',
    }
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

    <Paper>
        <Typography variant='h5'>{profile.username}</Typography>
        <Typography>First Name: {profile.first_name}</Typography>
        <Typography>Last Name: {profile.last_name}</Typography>
        <Typography>Email Address: {profile.email}</Typography>
        <Button onClick={()=>setEditProfile(true)}>Edit</Button>
    </Paper>

    <Dialog open={editProfile} fullWidth='true'>
        <ProfileEditForm 
            profile={profile}
            handleProfileEditClose={handleProfileEditClose}/>
    </Dialog> 

    <h4>Student</h4>
    {profile.students?.map((student) => {
        return(
        <>
            <Card>
                <Grid container>
                    <Grid xs={10}>
                        <Typography variant='h5'>{student.name}</Typography>
                            <p>{student.grade}</p>
                    </Grid>
                    <Grid xs={2}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            type="submit"
                            onClick={()=> {
                                setEditStudent(true)
                                setStudent(student)
                            }}>Edit</Button>
                        <Button
                            className={classes.button}
                            variant="contained"
                            type="submit"
                            onClick={()=> handleDeleteStudent(student.id)}>Delete</Button>
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