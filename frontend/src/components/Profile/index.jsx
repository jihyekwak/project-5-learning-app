import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    text:{
        fontFamily: 'Viga',
    }
}))

const Profile = ({profile}) => {

    const classes = useStyles();

    return(
        <>
        <h1 className={classes.text}>{profile.username}</h1>
        {profile.students?.map((student) => {
            return(
                <div>
                <Button className={classes.text}>{student.name}</Button>
                </div>
            )
        })}
        </>
    )
}
export default Profile