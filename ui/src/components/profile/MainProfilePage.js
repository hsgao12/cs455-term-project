import { Typography, Paper, useTheme } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridRowGap: '1em',
    maxWidth: '60em',
  },
  profileHeader: {
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto',
    gridColumnGap: '0.5em',
    width: '100%',
    marginTop: '1rem',
  },
  profileInfo: {
    display: 'grid',
    gridRowGap: '0.5em',
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: 'auto',
    marginRight: 0,
  },
  emailHeaderTextContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  avatarHeaderContainer: {
    paddingRight: '1rem',
  },
}));

export function MainProfilePage(props) {
  const user = useSelector((state) => state.auth.user);
  const sellerRating = 4.3;
  const styles = useStyles();
  const theme = useTheme();

  return (
    <div className={styles.root} key={'main'}>
      <Paper elevation={0}>
        <div className={styles.profileHeader}>
          <div className={styles.emailHeaderTextContainer}>
            <Typography variant={'h5'}>
              {user.firstName + ' ' + user.lastName}
            </Typography>
          </div>
          <div className={styles.avatarHeaderContainer}>
            <Avatar
              src="https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg"
              className={styles.largeAvatar}
            />
          </div>
        </div>
      </Paper>

      <Paper className={styles.profileInfo}>
        <div>
          <Typography>Email</Typography>
          {user.email}
          {/*maybe have a way to disable showing this?*/}
        </div>
        <div>
          <Typography>Rating</Typography>
          seller rating
        </div>

        <div>shipping info</div>
      </Paper>
    </div>
  );
}
