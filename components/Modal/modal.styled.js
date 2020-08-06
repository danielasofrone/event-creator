import styled from "styled-components";

export const Backdrop = styled.div`
  background: #f9f9fb;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModelContent = styled.div`
  width: 100%;
  max-width: 480px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  padding: 32px;
`;
