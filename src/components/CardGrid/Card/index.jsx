import PropTypes from "prop-types";
import { CardContainer, Image, Description, Title, Btn, Text } from "./style";

const Card = ({ title, img, description }) => {
  return (
    <CardContainer>
      <Image src={img} alt={title} />
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
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