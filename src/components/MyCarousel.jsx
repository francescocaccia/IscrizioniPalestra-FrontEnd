import React from "react";
import { Carousel } from "react-bootstrap";
import KoFermo from "../k.o fermo.jpg"; // Assicurati che il percorso sia corretto
import Logo from "../logo.jpg"; // Assicurati che il percorso sia corretto
// Altre immagini che vuoi includere

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={KoFermo} alt="Boxing Ring" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Logo} alt="Boxing Gloves" />
      </Carousel.Item>
      {/* Aggiungi altri Carousel.Item qui per più immagini */}
    </Carousel>
  );
}

export default MyCarousel;
