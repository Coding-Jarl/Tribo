import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  function closeOnEscape(evt) {
    if (evt.key === "Escape") close();
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  if (!modal.isOpen) return null;

  return (
    <Styled onClick={close}>
      <div
        className="modal"
        onClick={stopPropagation}
        onKeyDown={closeOnEscape}
      >
        {modal.content}
      </div>
    </Styled>
  );
}
