import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import { Typography, CircularProgress, List, Paper } from '@material-ui/core';
import ListingCard from './ListingCard';

const useStyles = makeStyles((theme) => ({
  root: { maxHeight: '100%', overflow: 'auto' },
}));

const MyListings = () => {
  const styles = useStyles();
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(`/users/myListings/${user.id}`);
    setMyListings(res.data.listings);
    setLoading(false);
  }, []);

  useEffect(() => {});
  return (
    <div className={styles.root}>
      <Typography variant="h3">My Listings</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <List>
            {myListings.map((item) => (
              <ListingCard item={item} />
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default MyListings;
