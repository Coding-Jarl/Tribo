import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorageManagement";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
import needleReducer from "./needleReducer";

const store = configureStore({
  reducer: { user: userReducer, modal: modalReducer, needle: needleReducer },
  preloadedState: loadState(),
});
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
