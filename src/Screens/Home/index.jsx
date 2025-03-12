import { Card } from "../../components/Card";
import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";
import burger1 from "../../assets/imgs/burger1.png";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <section>
        <h1>Nosso Cardápio</h1>
        <Card title="texto" image="" description="Esse é um exemplo" />
        <img src={burger1} alt="" />
        <img src={burger1} alt="" />
        <img src={burger1} alt="" />
        <img src={burger1} alt="" />
        <img src={burger1} alt="" />
      </section>
    </div>
  );
};
