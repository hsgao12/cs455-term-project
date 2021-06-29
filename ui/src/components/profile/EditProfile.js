import {useSelector} from "react-redux";
import React, {useState} from "react";
import {IconButton, Input, makeStyles, OutlinedInput, TextField, Toolbar, Tooltip, Typography} from "@material-ui/core";
import {Label} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-grid",
        gridTemplateColumns: "auto 1fr",
        gridRowGap: "1em",
        gridColumnGap: "0.2em",
        marginTop: "1em",
        "&>div": {
            display: "contents",
            "&>span": {
                textAlign: "right",
                marginTop: "auto",
                marginBottom: "auto"
            }
        },
        marginBottom: "1em"
    },
    applyChangesButton: {
        gridColumn: "span 2"
    }

}));

export function EditProfile(props) {
    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();

    const [newImage, setNewImage] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    return <React.Fragment>
        <div className={styles.root}>
            <div>
                <span>New profile Picture</span>
                <div>
                    <Button color={"primary"} variant={"contained"}> upload</Button>
                </div>
            </div>
            <div>
                <span>New Username</span>
                <OutlinedInput onChange={(e) => setNewUsername(e.target.value)}>

                </OutlinedInput>
            </div>
            <div>
                <span>New Password</span>
                <OutlinedInput
                    type={showNewPassword ? "text" : "password"}
                    endAdornment={
                        <IconButton onClick={() => setShowNewPassword(!showNewPassword)}>
                            {showNewPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </IconButton>}
                    onChange={(e) => setNewPassword(e.target.value)}
                >
                </OutlinedInput>
            </div>
            <div>
                <span>Confirm New Password</span>
                <OutlinedInput type={"password"} onChange={(e) => setConfirmNewPassword(e.target.value)}>

                </OutlinedInput>
            </div>
            <div>
                <Tooltip title={"required"}><span style={{color:"red"}}>Current Password</span></Tooltip>
                <OutlinedInput type={"password"} onChange={(e) => setCurrentPassword(e.target.value)}>

                </OutlinedInput>
            </div>
            <Button className={styles.applyChangesButton} color={"primary"} variant={"contained"}> apply
                changes</Button>
        </div>
    </React.Fragment>;
}