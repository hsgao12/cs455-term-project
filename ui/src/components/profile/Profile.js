import React, {useState} from 'react';
import {Container, List, ListItem, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {MainProfilePage} from "./MainProfilePage";
import {EditProfile} from "./EditProfile"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridColumnGap: "1rem",
        width: "100%"

    },
    sideBar: {}
}));


const Profile = (props) => {
    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();
    const [currentPage,setCurrentPage] = useState("main");

    return (
        <Container>
            <Paper className={styles.root}>
                <List>
                    <ListItem button onClick={()=>setCurrentPage("main")}>
                        Main{/*rename this?*/}
                    </ListItem>
                    <ListItem button onClick={()=>setCurrentPage("edit")}>
                        Edit Profile
                    </ListItem>
                    <ListItem button>
                        List item to sell
                    </ListItem>
                    <ListItem button>
                        Buy History
                    </ListItem>
                    <ListItem button>
                        Sell History
                    </ListItem>

                </List>
                <div>
                    {currentPage === "main" && <MainProfilePage/>}
                    {currentPage === "edit" && <EditProfile/>}
                </div>
            </Paper>
        </Container>
    );
}

export default Profile;