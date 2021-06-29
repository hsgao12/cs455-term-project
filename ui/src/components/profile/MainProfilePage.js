import {Typography, Paper} from "@material-ui/core";
import React from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridRowGap: "1em",
        maxWidth: "60em"
    },
    profileHeader: {
        display: "inline-grid",
        gridTemplateColumns: "auto auto",
        gridColumnGap: "0.5em"
    },
    profileInfo:{
        
    }
}));

export function MainProfilePage(props) {
    const user = useSelector((state) => state.auth.user);
    const sellerRating = 4.3;
    const styles = useStyles();

    return <React.Fragment>
        <div className={styles.root}>
            <Paper>
                <div className={styles.profileHeader}>
                    <div style={{width: "150px", background: "red", height: "150px"}}>
                        User Profile Pic placeholder
                    </div>
                    <div>
                        <Typography variant={"h5"}>
                            User name
                        </Typography>
                        <div>
                            description
                        </div>
                    </div>
                </div>
            </Paper>

            <Paper>
                <div>
                    <Typography>
                        Email
                    </Typography>
                    {user.email}{/*maybe have a way to disable showing this?*/}
                </div>
                <div>
                    <Typography>Rating</Typography>
                    seller rating
                </div>

                <div>
                    shipping info
                </div>
            </Paper>
        </div>
    </React.Fragment>;
}