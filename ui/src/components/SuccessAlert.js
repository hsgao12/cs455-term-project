import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const SuccessAlert = ({success}) => {
    const useStyles = makeStyles({
        alert: {
            marginBottom: "15px"
        }
    })
    const classes = useStyles()
    return (
        <Alert severity="success" className={classes.alert}>
            <AlertTitle>Success!</AlertTitle>
            {success}
        </Alert>
    );
}

export default SuccessAlert;