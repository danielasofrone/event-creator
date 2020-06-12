import Proptypes from "prop-types";
import * as S from "./publicLayout.styled";

const PublicLayout = ({children}) => (
  <S.Wrapper>
    <S.ImageContainer>
      <S.Quoate>Great, kid. Dont get cocky.</S.Quoate>
    </S.ImageContainer>
    <S.ContentWrapper>
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.ContentWrapper>
  </S.Wrapper>
);

PublicLayout.propTypes = {
  children: Proptypes.node.isRequired,
};

export default PublicLayout;
