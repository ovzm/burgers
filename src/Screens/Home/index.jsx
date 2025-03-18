import CardGrid from "../../components/CardGrid";
import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <section>
        <h1>Nosso Cardápio</h1>     
      </section>
      <CardGrid/>
    </div>
  );
};
