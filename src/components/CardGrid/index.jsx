import Card from "./Card/index";
import cardsData from "./data";
import { GridContainer } from "./style";

const CardGrid = () => {
  return (
    <GridContainer>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </GridContainer>
  );
};

export default CardGrid;