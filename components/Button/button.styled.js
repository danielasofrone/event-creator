import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: ${({ small }) => (small ? "100px" : "240px")};
  font-size: ${({ small, theme: { px2rem } }) => px2rem(small ? 14 : 16)};
  border-radius: 4px;
  border: 0;
  color: #fff;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 1px;
  text-align: center;
  padding: 7px 0;
  background-color: ${({ active }) => (active ? "#ff4081" : "#22d486")};
  cursor: pointer;
  transition: background-color 0.3s;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ active }) => (active ? "#e73370" : "#20bd78")};
  }

  ${({ editable }) =>
    editable &&
    `
  color: #a9aeb4;
   background-color: #d9dce1
   &:hover {
    background-color: #c4c9d1
   }
   `};

  &:disabled {
    color: #a9aeb4;
    background-color: #d9dce1;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
