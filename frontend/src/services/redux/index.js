import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorageManagement";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";

const store = configureStore({
  reducer: { user: userReducer, modal: modalReducer },
  preloadedState: loadState(),
});
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
