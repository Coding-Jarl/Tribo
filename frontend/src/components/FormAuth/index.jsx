import { useState } from "react";
import useApi from "@services/useApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function FormAuth() {
  const [formAuthData, setFormAuthData] = useState({
    email: "",
    password: "",
  });
  const api = useApi();
  const dispatch = useDispatch();

  const hChange = (evt) => {
    setFormAuthData({
      ...formAuthData,
      // formAuthData.email === formAuthData["email"]
      [evt.target.name]: evt.target.value,
    });
  };

  const hSubmit = (evt) => {
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

  return (
    <form onSubmit={hSubmit}>
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
