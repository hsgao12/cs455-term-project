import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const ErrorAlert = ({error}) => {
    const useStyles = makeStyles({
        alert: {
            marginBottom: "15px"
        }
    })
    const classes = useStyles()
    return (
        <Alert severity="error" className={classes.alert}>
            <AlertTitle>Error</AlertTitle>
            {error}
        </Alert>
    );
}

export default ErrorAlert;