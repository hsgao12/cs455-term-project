import React from 'react';
import { Button, Modal, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddListing from './AddListing';

const AddListingButton = (props) => {
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
                Add Listing
            </Button>
            <Modal open={modal} onClose={() => setModal(false)}>
                    <AddListing />
            </Modal>
        </React.Fragment>
    );
};

export default AddListingButton;
