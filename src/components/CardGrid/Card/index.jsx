import PropTypes from "prop-types";
import { CardContainer, Image, Description, Title, Btn } from "./style";

const Card = ({ title, img, description }) => {
  return (
    <CardContainer>
      <Image src={img} alt={title} />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <Btn>Confira Já!</Btn>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Card;