import React from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import vittoriaFede from "./vittoriaFede.mp4"; // Importa il video

// Dati di esempio per gli incontri di Federico
const fightsData = [
  {
    id: 1,
    title: "Vittoria Imponente a Berlino",
    date: "23/03/2024",
    description:
      "Un incontro emozionante che ha visto Federico trionfare con una performance eccezionale.",
    videoUrl: { vittoriaFede }, // Utilizza il video importato
    upcoming: false,
  },
  {
    id: 2,
    title: "Prossimo Match: Sfida Internazionale",
    date: "2024-05-20",
    description:
      "Federico si prepara per la sua prossima grande sfida su scala internazionale.",
    videoUrl: "", // Nessun video per gli incontri futuri
    upcoming: true,
  },
  // Altri incontri...
];

function Fede() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Aggiornamenti su Federico</h2>
      <Row>
        {fightsData.map((fight) => (
          <Col md={6} key={fight.id} className="mb-4">
            <Card>
              {fight.videoUrl &&
                (fight.upcoming ? (
                  <Card.Img
                    variant="top"
                    src="path/to/your/video/thumbnail.png"
                  />
                ) : (
                  // Utilizza l'elemento video per il match passato che ha un video
                  <video
                    controls
                    src={fight.videoUrl}
                    style={{ width: "100%" }}
                  >
                    Il tuo browser non supporta il tag video.
                  </video>
                ))}
              <Card.Body>
                <Card.Title>{fight.title}</Card.Title>
                {fight.upcoming ? (
                  <Badge bg="warning" text="dark">
                    Prossimo Match
                  </Badge>
                ) : (
                  <Badge bg="success">Guarda il Match</Badge>
                )}
                <Card.Text>{fight.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">Data: {fight.date}</small>
                </Card.Text>
                {fight.upcoming ? (
                  <Button variant="primary">Dettagli Match</Button>
                ) : (
                  // Se vuoi mantenere il bottone per gli incontri senza video
                  <Button variant="secondary" href={fight.videoUrl}>
                    Guarda Video
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Fede;
