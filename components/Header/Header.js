import * as S from "./header.styled";
import Router from "next/router";
import { getUserInitials } from "../../utils/shared";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    Router.push("/login");
  };
  return (
    <S.Container>
      <S.Logo>Eventio</S.Logo>
      <S.UserInfo>
        <S.UserInitials>{getUserInitials()}</S.UserInitials>
        <S.Logout onClick={handleLogout}>Logout</S.Logout>
      </S.UserInfo>
    </S.Container>
  );
};

export default Header;
