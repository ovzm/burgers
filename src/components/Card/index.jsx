import PropTypes from "prop-types";

export const Card = ({ title, image, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="Imagem" />
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};