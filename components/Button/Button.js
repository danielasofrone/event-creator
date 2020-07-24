import * as S from "./button.styled";
import PropTypes from "prop-types";

const Button = ({ small, active, children, editable, ...props }) => (
  <S.Button small={small} active={active} editable={editable} {...props}>
    {children}
  </S.Button>
);

Button.defaultProps = {
  small: false,
  active: false,
  editable: false,
};

Button.propTypes = {
  small: PropTypes.bool,
  active: PropTypes.bool,
  editable: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Button;
