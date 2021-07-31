import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import { Typography, CircularProgress, List, Paper } from '@material-ui/core';
import ListingCard from './ListingCard';
import EditListing from './EditListing';

const useStyles = makeStyles((theme) => ({
  root: { maxHeight: '100%', overflow: 'auto' },
  topText: {
    paddingBottom: "2.5%"
  }
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

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/listing/deleteListing/${id}`);
      console.log(res);
      const newListings = myListings.filter((item) => { return item._id !== id });
      setMyListings(newListings); 
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  const editItem = async (id, newSize, newPrice) => {
    try {
      setLoading(true); 
      let res = await axios.put(`/listing/editListing/${id}`, {price: newPrice, size: newSize}); 
      console.log(res); 
      res = await axios.get(`/users/myListings/${user.id}`); 
      setMyListings(res.data.listings); 
      setLoading(false); 
    } catch (err) {
      console.log(err.message); 
    }
  }

  return (
    <div className={styles.root}>
      <Typography className={styles.topText} variant="h5">My Listings</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <List>
            {myListings.map((item) => (
              <ListingCard item={item} deleteItem={deleteItem} editItem={editItem} loading= {loading} />
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default MyListings;
