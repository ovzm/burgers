import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.js";
import burger1 from "../../assets/imgs/burger1.png";
import burger2 from "../../assets/imgs/burger2.jpeg";   
import burger3 from "../../assets/imgs/burger3.jpeg";
import { Img, SlideContainer, SlideImg, SlideText } from "./style.js";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      img: burger1,
      text: "Suculência e qualidade em cada hambúrguer! Feitos com carnes nobres e pães fresquinhos.",
    },
    {
      img: burger2,
      text: "Cada mordida, uma explosão de sabor! Descubra nossos hambúrgueres artesanais preparados com ingredientes selecionados.",
    },
    {
      img: burger3,
      text: "Do clássico ao mais ousado! Escolha seu hambúrguer favorito e prepare-se para uma experiência única.",
    },
  ];

  return (
    <Slider {...settings}>
  {slides.map((slide, index) => (
    <div key={index}> 
      <SlideContainer>
        <SlideText>
          <h2>{slide.text}</h2>
          <button>Faça seu pedido!</button>
        </SlideText>
        <SlideImg> 
          <Img src={slide.img} alt="Hambúrguer" />
        </SlideImg>
      </SlideContainer>
    </div>
  ))}
</Slider>

  );
};

export default Carousel;