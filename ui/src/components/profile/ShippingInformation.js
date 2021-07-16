import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
});

const ShippingInformation = () => {
  const user = useSelector((state) => state.auth.user);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <Typography variant="overline" display="block">
          Address
        </Typography>
        <Typography variant="subtitle1">{user.address}</Typography>
      </div>
      <div>
        <Typography variant="overline" display="block">
          City
        </Typography>
        <Typography variant="subtitle1">{user.city}</Typography>
      </div>
      <div>
        <Typography variant="overline" display="block">
          Country
        </Typography>
        <Typography variant="subtitle1">{user.country}</Typography>
      </div>
    </div>
  );
};

export default ShippingInformation;
