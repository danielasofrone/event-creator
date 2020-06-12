import PropTypes from "prop-types";

const Heading = ({title, text}) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
