import propTypes from "prop-types";
import Styled from "./style";

export default function Content({ children }) {
  return <Styled>{children}</Styled>;
}

Content.propTypes = {
  children: propTypes.element,
};
Content.defaultProps = {
  children: null,
};
