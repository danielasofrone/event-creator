import PropTypes from "prop-types";
import * as S from "./heading.styled";

const Heading = ({ title, text }) => (
  <S.HeadingWrapper center>
    <h1>{title}</h1>
    <p>{text}</p>
  </S.HeadingWrapper>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
