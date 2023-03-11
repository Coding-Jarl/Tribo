import useApi from "@services/useApi";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }

    useApi().defaults.headers.authorization = `Bearer ${
      JSON.parse(serializedState).user.token
    }`;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error(err);
  }
};
