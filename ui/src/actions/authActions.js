import auth from '../auth/firebase';

const signIn = (username) => {
  return {
    type: 'SIGN_IN',
    payload: {
      username: username,
    },
  };
};

export default signIn;
