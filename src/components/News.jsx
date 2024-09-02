import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link

const newsData = [
  {
    id: 1,
    title: "Allenamenti Estivi 2024",
    description: "Scopri il nostro programma estivo per restare in forma!",
    videoUrl: "https://www.example.com/video-estivi.mp4",
    moreInfoUrl: "/fede", // Cambia con il path desiderato
  },
  // Altri oggetti news...
];

function News() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Ultime News dalla Palestra</h2>
      <Row>
        {newsData.map((news) => (
          <Col md={6} lg={4} key={news.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src="path/to/your/video/thumbnail.png" />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                {/* Utilizza Link al posto di Button */}
                <Link to={news.moreInfoUrl} className="btn btn-primary">
                  Leggi di più
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
