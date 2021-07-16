import { Typography, Paper, useTheme } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import EditProfileButton from './EditProfileButton';
import ShippingInformation from './ShippingInformation';

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
    paddingRight: '5rem',
  },
  profileEmail: {
    paddingBottom: '1rem',
  },
  profileRating: {
    paddingBottom: '1rem',
  },
}));

export function MainProfilePage(props) {
  const user = useSelector((state) => state.auth.user);
  const styles = useStyles();

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
            <Avatar src={user.profileImage} className={styles.largeAvatar} />
          </div>
        </div>
      </Paper>

      <Paper className={styles.profileInfo} elevation={0}>
        <div className={styles.profileEmail}>
          <Typography>My Email</Typography>
          {user.email}
        </div>
        <div className={styles.profileRating}>
          <Typography>My Rating</Typography>
          <Rating
            name="userRating"
            defaultValue={user.rating}
            precision={0.1}
            readOnly
          />
        </div>

        <div className={styles.profileShipping}>
          <Typography>Shipping Information</Typography>
          <ShippingInformation />
          <EditProfileButton edit={user.address !== null} />
        </div>
      </Paper>
    </div>
  );
}
