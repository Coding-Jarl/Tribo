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

  useEffect(() => {
    function closeOnEscape(evt) {
      if (evt.key === "Escape") close();
    }

    document.body.addEventListener("keypress", closeOnEscape);

    return () => {
      document.body.removeEventListener("keypress", closeOnEscape);
    };
  }, []);

  if (!modal.isOpen) return null;

  return (
    <Styled onClick={close}>
      <div className="modal" onClick={stopPropagation}>
        {/* {children} */}
        {modal.content}
      </div>
    </Styled>
  );
}
