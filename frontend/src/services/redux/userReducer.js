const initialState = {
  id: null,
  pseudo: null,
  email: null,
  avatarUrl: null,
  birthday: null,
  createdAt: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "USER_LOGOUT": {
      return initialState;
    }
    default:
      return state;
  }
}
