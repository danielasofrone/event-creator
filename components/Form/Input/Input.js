/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/forbid-dom-props */
import PropTypes from "prop-types";
import * as S from "./input.styled";

const activeLabelTypes = ["time", "date"];

const Input = ({
  label,
  name,
  type,
  placeholder,
  error,
  errorMessage,
  value,
  onChange,
  onBlur,
}) => (
  <S.InputWrapper>
    {label && (
      <S.Label
        isActive={value !== "" || activeLabelTypes.includes(type)}
        htmlFor={name}
      >
        {label}
      </S.Label>
    )}
    <S.Input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <div>{errorMessage}</div>}
  </S.InputWrapper>
);

Input.defaultProps = {
  error: false,
  errorMessage: "",
  label: "",
  placeholder: "",
};

Input.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
