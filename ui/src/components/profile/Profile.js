import React, { useState } from 'react';
import {
  ClickAwayListener,
  Container,
  IconButton,
  List,
  ListItem,
  Menu,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { MainProfilePage } from './MainProfilePage';
import MyListings from './MyListings';
import MenuIcon from '@material-ui/icons/Menu';
import BuyHistory from './BuyHistory';
import SellHistory from './SellHistory';
import ViewHistory from './ViewHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '700px',
  },
  paper: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridColumnGap: '1rem',
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    marginTop: '1rem',
  },
  sideBar: {},
  menuButton: {
    paddingTop: '1.1em',
    paddingBottom: '1.1em',
  },
}));

const Profile = (props) => {
  const user = useSelector((state) => state.auth.user);
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState('main');
  const theme = useTheme();

  const setPage = (newPage) => () => setCurrentPage(newPage);
  const handleMainButton = setPage('main');
  const handleListButton = setPage('list');
  const handleBuyButton = setPage('buy');
  const handleSellButton = setPage('sell');
  const handleViewButton = setPage('view');

  const sideBar = (
    <List>
      <ListItem button onClick={handleMainButton}>
        My Profile{/*rename this?*/}
      </ListItem>
      <ListItem button onClick={handleListButton}>
        My Listings
      </ListItem>
      <ListItem button onClick={handleBuyButton}>
        Buy History
      </ListItem>
      <ListItem button onClick={handleSellButton}>
        Sell History
      </ListItem>
      <ListItem button onClick={handleViewButton}>
        View History
      </ListItem>
    </List>
  );

  const isSmall = useMediaQuery('(max-width:600px)');
  const [menuEl, setMenuEl] = useState(null);

  return (
    <Container>
      <Paper className={styles.paper}>
        {!isSmall && sideBar}
        {isSmall && (
          <div>
            <div>
              <Button
                onClick={(e) => setMenuEl(e.currentTarget)}
                className={styles.menuButton}
              >
                <MenuIcon />
              </Button>
            </div>
            <Menu open={Boolean(menuEl)}>
              <ClickAwayListener onClickAway={() => setMenuEl(null)}>
                {sideBar}
              </ClickAwayListener>
            </Menu>
          </div>
        )}
        <div style={{ minHeight: '45rem' }}>
          {currentPage === 'main' && <MainProfilePage />}
          {currentPage === 'list' && <MyListings />}
          {currentPage === 'buy' && <BuyHistory />}
          {currentPage === 'sell' && <SellHistory />}
          {currentPage === 'view' && <ViewHistory />}
        </div>
      </Paper>
    </Container>
  );
};

export default Profile;
