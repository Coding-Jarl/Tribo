const initialState = {
  needle: "",
};

// eslint-disable-next-line import/prefer-default-export
export const needleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEEDLE_UPDATE":
      return {
        ...state,
        needle: action.payload,
      };
    default:
      return state;
  }
};
