import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const CreditCard = (props) => {
  const { name, number, expDate, cvc, focus } = props;
  return (
    <React.Fragment>
      <Cards
        cvc={cvc}
        expiry={expDate}
        focused={focus}
        name={name}
        number={number}
      />
    </React.Fragment>
  );
};

export default CreditCard;
