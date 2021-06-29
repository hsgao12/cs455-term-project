import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import Register from '../login/Register';
import ContrastNavButton from "./ContrastNavButton";

const RegisterButton = () => {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  return (
    <React.Fragment>
      <ContrastNavButton
        onClick={() => setRegisterFormOpen(true)}
        size={"large"}
      >
        Register
      </ContrastNavButton>
      <Modal open={registerFormOpen} onClose={() => setRegisterFormOpen(false)}>
        <Register setRegisterFormOpen={setRegisterFormOpen}/>
      </Modal>
    </React.Fragment>
  );
};

export default RegisterButton;
