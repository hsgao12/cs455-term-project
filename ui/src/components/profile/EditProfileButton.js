import React from 'react';
import { Button, Modal, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditProfile from './EditProfile';

const useStyles = makeStyles();
const EditProfileButton = (props) => {
  const [modal, setModal] = React.useState(false);
  const styles = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        className={styles.editButton}
        onClick={() => {
          setModal(true);
        }}
      >
        {props.edit ? 'Edit Address' : 'Add Address'}
      </Button>
      <Modal open={modal} onClose={() => setModal(false)}>
        <EditProfile setModal={setModal} />
      </Modal>
    </React.Fragment>
  );
};

export default EditProfileButton;
