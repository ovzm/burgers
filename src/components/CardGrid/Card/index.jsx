import PropTypes from "prop-types";
import { CardContainer, Image, Description, Title } from "./style";

const Card = ({ title, img, description }) => {
  return (
    <CardContainer>
      <Image src={img} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Card;