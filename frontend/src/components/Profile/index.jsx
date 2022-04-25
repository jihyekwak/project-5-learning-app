import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#f5b120',
        width: '120px',
        height: '120px',
        borderRadius: '60px',
        fontFamily: 'Viga',
        fontSize: '30px',
        margin: '5px'
    }
}))

const Profile = ({profile}) => {

    const classes = useStyles();

    return(
        <>
        Profile
        {/* <h1>{profile?.username}</h1>
        {profile.students?.map((student) => {
            return(
                <Button href={`/${student.id}/quizzes`} className={classes.button}>{student.name}</Button>
            )
        })} */}
        </>
    )
}
export default Profile