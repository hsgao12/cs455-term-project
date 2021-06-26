import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import Register from '../login/Register';

const RegisterButton = () => {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        onClick={() => setRegisterFormOpen(true)}
        style={{ color: 'White' }}
        size={"large"}
      >
        Register
      </Button>
      <Modal open={registerFormOpen} onClose={() => setRegisterFormOpen(false)}>
        <Register setRegisterFormOpen={setRegisterFormOpen}/>
      </Modal>
    </React.Fragment>
  );
};

export default RegisterButton;
