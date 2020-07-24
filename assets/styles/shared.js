import styled from "styled-components";

export const Title = styled.h1`
  color: red;
`;

export const Grid = styled.div`
  width: 100%;
  float: left;
  display: grid;
  grid-template-columns: ${({ isGrid }) =>
    isGrid ? "repeat(3, 1fr)" : "repeat(1, 1fr)"};
  gap: 15px;
`;
