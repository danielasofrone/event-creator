import * as S from "./modal.styled";
import PropTypes from "prop-types";

const Modal = ({ children }) => {
  return (
    <S.Backdrop>
      <S.ModelContent>{children}</S.ModelContent>
    </S.Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Modal;
