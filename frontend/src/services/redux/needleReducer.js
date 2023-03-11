const initialState = "";

// eslint-disable-next-line import/prefer-default-export
export default function needleReducer(state = initialState, action) {
  switch (action.type) {
    case "NEEDLE_UPDATE":
      return action.payload;
    default:
      return state;
  }
}
