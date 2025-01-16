import React from "react";
import { Alert, Card, Container } from "react-bootstrap";
import VolantinoBack from "../VolantinoBack.jpg";

const Orari = () => {
  return (
    <Container className="orari-container mt-5">
      <div className="d-flex justify-content-center">
        <Card.Img
          variant="top"
          src={VolantinoBack}
          alt="Orari delle lezioni"
          style={{
            maxWidth: "50%",
            height: "auto",
            backgroundColor: "#f8f9fa", // Aggiungi uno sfondo grigio chiaro (opzionale)
            padding: "10px", // Aggiungi padding intorno all'immagine (opzionale)
          }}
        />
      </div>

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
