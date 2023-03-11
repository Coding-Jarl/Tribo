import { useState } from "react";
import useApi from "@services/useApi";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function FormAuth() {
  const [formAuthData, setFormAuthData] = useState({
    email: "",
    password: "",
  });
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const api = useApi();

  const hChange = (evt) => {
    setFormAuthData({
      ...formAuthData,
      // formAuthData.email === formAuthData["email"]
      [evt.target.name]: evt.target.value,
    });
  };

  const hLogin = (evt) => {
    evt.preventDefault();
    api
      .post("/auth/login", formAuthData)
      .then(({ data }) => {
        dispatch({
          type: "USER_LOGIN",
          payload: { ...data.user, token: data.token },
        });
        dispatch({ type: "MODAL_CLOSE" });
        api.defaults.headers.authorization = `Bearer ${data.token}`;
        // Stocker le token dans un cookie
        toast("Yay!");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  const hLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
    dispatch({ type: "MODAL_CLOSE" });
  };

  if (!user.id) {
    return (
      <form onSubmit={hLogin}>
        <input
          name="email"
          type="email"
          value={formAuthData.email}
          onChange={hChange}
        />
        <input
          name="password"
          type="password"
          value={formAuthData.password}
          onChange={hChange}
        />
        <input type="submit" value="Log in" />
      </form>
    );
  }
  return (
    <button type="button" onClick={hLogout}>
      Log out
    </button>
  );
}
