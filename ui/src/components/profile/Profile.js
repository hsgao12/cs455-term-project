import React, {useState} from 'react';
import {
    ClickAwayListener,
    Container,
    IconButton,
    List,
    ListItem,
    Menu,
    Paper,
    Typography,
    useMediaQuery, useTheme
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {MainProfilePage} from "./MainProfilePage";
import {EditProfile} from "./EditProfile"
import ListItemPage from "./ListItemPage";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import BuyHistory from "./BuyHistory";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridColumnGap: "1rem",
        width: "100%",
        paddingTop:"1rem",
        paddingBottom:"1rem"

    },
    sideBar: {},
    menuButton:{
        paddingTop:"1.1em",
        paddingBottom:"1.1em",

    }
}));


const Profile = (props) => {
    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();
    const [currentPage, setCurrentPage] = useState("main");
    const theme = useTheme();

    const setPage = (newPage)=>()=>setCurrentPage(newPage);
    const handleMainButton = setPage("main");
    const handleEditButton = setPage("edit");
    const handleListButton = setPage("list");
    const handleBuyButton = setPage("buy");

    const sideBar = <List>
        <ListItem button onClick={handleMainButton}>
            Main{/*rename this?*/}
        </ListItem>
        <ListItem button onClick={handleEditButton}>
            Edit Profile
        </ListItem>
        <ListItem button onClick={handleListButton}>
            List item to sell
        </ListItem>
        <ListItem button onClick={handleBuyButton}>
            Buy History
        </ListItem>
        <ListItem button>
            Sell History
        </ListItem>

    </List>;

    const isSmall = useMediaQuery("(max-width:600px)");
    const [menuEl, setMenuEl] = useState(null);

    return (
        <Container style={{background:theme.palette.background}}>
            <Paper className={styles.root}>
                {!isSmall && sideBar}
                {isSmall &&
                <React.Fragment>
                    <div>
                        <Button onClick={(e) => setMenuEl(e.currentTarget)} className={styles.menuButton}>
                            <MenuIcon/>
                        </Button>
                    </div>
                    <Menu open={Boolean(menuEl)}>
                        <ClickAwayListener onClickAway={() => setMenuEl(null)}>
                            {sideBar}
                        </ClickAwayListener>
                    </Menu>
                </React.Fragment>
                }
                <div>
                    {currentPage === "main" && <MainProfilePage/>}
                    {currentPage === "edit" && <EditProfile/>}
                    {currentPage === "list" && <ListItemPage/>}
                    {currentPage === "buy" && <BuyHistory/>}
                    {currentPage === "sell" && <ListItemPage/>}
                </div>
            </Paper>
        </Container>
    );
}

export default Profile;