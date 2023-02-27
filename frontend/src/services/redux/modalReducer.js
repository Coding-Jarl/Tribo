const initialState = {
  isOpen: false,
  content: "nani le fck ?",
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case "MODAL_OPEN": {
      return {
        isOpen: true,
        content: action.payload,
      };
    }
    case "MODAL_CLOSE": {
      return initialState;
    }
    default:
      return state;
  }
}
