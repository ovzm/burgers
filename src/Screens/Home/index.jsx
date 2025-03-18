import { Card } from "../../components/CardGrid/Card";
import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <section>
        <h1>Nosso Cardápio</h1>
        <Card title="texto" image="" description="Esse é um exemplo" />
      </section>
    </div>
  );
};
