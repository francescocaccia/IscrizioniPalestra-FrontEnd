import React from "react";
import { Carousel } from "react-bootstrap";
import KoFermo from "../k.o fermo.jpg"; // Assicurati che il percorso sia corretto
import Federico from "../FedericoStroppa.webp";
import Francesco from "../FrancescoCacciapuoti2.jpg";
import Federico2 from "../Stroppa.webp";
import Giacomino from "../Giacomino.jpg";
function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={KoFermo} alt="Boxing Ring" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Federico} alt="Boxing Gloves" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Francesco} alt="Boxing Gloves" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Federico2} alt="Boxing Gloves" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Giacomino} alt="Boxing Gloves" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
