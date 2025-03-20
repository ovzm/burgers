import CardGrid from "../../components/CardGrid";
import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";
import { SectionCard, TextContainer } from "./style";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <SectionCard>
        <TextContainer>
          <h1>Nosso Cardápio</h1>   
          <p>Descubra uma variedade de hambúrgueres artesanais preparados com ingredientes frescos e combinações irresistíveis.</p>
          <p>Cada opção foi cuidadosamente criada para tornar sua refeição uma experiência única e memorável.</p>
        </TextContainer>
        <CardGrid/>  
      </SectionCard>
    </div>
  );
};
