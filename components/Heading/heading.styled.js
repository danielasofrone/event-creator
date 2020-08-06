import styled from "styled-components";

export const HeadingWrapper = styled.div`
  width: 100%;
  float: left;
  text-align: ${({ center }) => (center ? "center" : "left")};
  h1 {
    font-display: Hind;
    font-size: 28px;
    font-weight: normal;
    line-height: 1.71;
    color: #323c46;
    margin: 0;
  }
  p {
    font-display: Hind;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.33;
    color: #949ea8;
    margin: 0;
  }
`;
