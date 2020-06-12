import styled from "styled-components";
import bg from "../../../assets/img/background.png";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  float: left;
  background: white;
`;

export const ImageContainer = styled.div`
  width: 480px;
  float: left;
  height: 100%;
  position: relative;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-color: #323c46;
  background-size: cover;
`;

export const Quoate = styled.div`
  position: absolute;
  bottom: 148px;
  left: 85px;
  color: white;
  width: 310px;
  font-family: "Playfair Display", serif;
  font-size: 36px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 480px);
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 480px;
  height: auto;
`;
