import styled from "styled-components";
import logo from "../../assets/img/logo.svg";

export const Container = styled.header`
  width: 100%;
  height: 40px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

// font-family: ${({theme}) => theme.fonts.primary};

export const Logo = styled.div`
  width: 29px;
  height: 28px;
  float: left;
  text-indent: -99999px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

export const UserInfo = styled.div`
  font-family: Hind;
  font-size: ${({ theme: { px2rem } }) => px2rem(14)};
  color: #949ea8;
  width: auto;
  display: flex;
  align-items: center;
`;

export const UserInitials = styled.div`
  font-family: Hind;
  width: 40px;
  height: 40px;
  background-color: #d9dce1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #949ea8;
  font-size: ${({ theme: { px2rem } }) => px2rem(14)};
  margin-right: 20px;
`;

export const Logout = styled.div`
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: black;
  }
`;
