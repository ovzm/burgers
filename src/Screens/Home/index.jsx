import CardGrid from "../../components/CardGrid";
import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";
import { SectionCard } from "./style";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <SectionCard>
        <h1>Nosso Cardápio</h1>   
        <CardGrid/>  
      </SectionCard>
    </div>
  );
};
