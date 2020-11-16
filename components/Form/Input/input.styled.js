import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 14px;
  position: relative;

  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  font-size: ${({ isActive }) => (isActive ? "14px" : "18px")};
  color: #c9ced3;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  position: absolute;
  top: ${({ isActive }) => (isActive ? "0" : "25px")};
  left: 0;
  transition: 0.3s;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #dae1e7;
  font-size: 18px;
  padding: 24px 0 8px 0;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  outline: none;
  ::placeholder {
    opacity: 0;
  }
`;
