import React from 'react';
import { Button, Modal, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditListing from './EditListing';

const EditListingButton = (props) => {
  const [modal, setModal] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setModal(true);
        }}
      >
          Edit
      </Button>
      <Modal open={modal} onClose={() => setModal(false)}>
        <EditListing setModal={setModal} item={props.item} editItem={props.editItem} loading={props.loading}/>
      </Modal>
    </React.Fragment>
  );
};

export default EditListingButton;
