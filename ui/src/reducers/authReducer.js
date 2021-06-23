const authReducer = (state = { signedIn: false, username: '' }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        username: action.payload.username,
        signedIn: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
