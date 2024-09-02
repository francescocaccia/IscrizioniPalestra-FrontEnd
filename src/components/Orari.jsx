import React from "react";
import { Alert, Card, Container } from "react-bootstrap";
import volantinorari from "../volantinorari.jpg";

const Orari = () => {
  return (
    <Container className="orari-container mt-5">
      <Card.Img variant="top" src={volantinorari} alt="Orari delle lezioni" />
      <Alert variant="success" className="mt-4">
        <h4 className="text-center">Lezioni Private</h4>
        <p className="text-center">
          Per lezioni private, mettersi d'accordo con l'allenatore{" "}
          <strong>Francesco</strong> al{" "}
          <a href="tel:+393207010150" className="telefono">
            <span className="fs-5">+39 320 7010150</span>
          </a>
          .
        </p>
      </Alert>
    </Container>
  );
};

export default Orari;
