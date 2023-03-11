import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormAuth from "@forms/Auth";
import FormEvent from "@forms/Event";
import Styled from "./style";

export default function Modal() {
  const { modal } = useSelector((store) => store);
  const dispatch = useDispatch();

  const close = () => {
    dispatch({ type: "MODAL_CLOSE" });
  };
  const stopPropagation = (evt) => {
    evt.stopPropagation();
  };
  const hKeyDown = (evt) => {
    if (evt.key === "Escape") close();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", hKeyDown);

    return () => {
      document.body.removeEventListener("keydown", hKeyDown);
    };
  }, []);

  let content = "Nada";
  switch (modal.content) {
    case "auth":
      content = <FormAuth />;
      break;
    case "event":
      content = <FormEvent />;
      break;
    default:
      content = "Meh!";
  }

  if (!modal.isOpen) return null;
  return (
    <Styled onClick={close}>
      <div className="modal" onClick={stopPropagation} onKeyDown={hKeyDown}>
        {content}
      </div>
    </Styled>
  );
}
