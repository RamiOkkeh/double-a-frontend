// Creates the Redux variables
const initState = {
  username: '',
  email: '',
};

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.username };
    case 'email':
      return { ...state, email: action.email };
    default:
      return state;
  }
};

export default rootReducer;
