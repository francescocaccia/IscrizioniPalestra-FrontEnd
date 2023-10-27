import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const InsertAtleta = () => {
  const [tipiAbbonamento, setTipiAbbonamento] = useState([]);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataDiNascita: "",
    telefono: "",
    tipoAbbonamento: "",
    dataInizioAbbonamento: "",
    dataScadenzaAbbonamento: "",
    dataVisitaMedica: "",
    dataScadenzaVisitaMedica: "",
    dataInizioElettroencefalogramma: "", // Aggiunto
    dataFineElettroencefalogramma: "", // Aggiunto
  });

  useEffect(() => {
    fetch("http://localhost:8080/atleti/tipoAbbonamento")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella chiamata API");
        }
        return response.json();
      })
      .then((data) => setTipiAbbonamento(data))
      .catch((error) =>
        console.error("Errore nel recuperare i tipi di abbonamento:", error)
      );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm(
      "Sei sicuro di voler inserire questo atleta?"
    );

    if (!userConfirmed) {
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/atleti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      window.alert("L'atleta è stato inserito con successo!");
    } catch (error) {
      window.alert("Errore nell'inserimento dell'atleta: " + error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Inserisci nuovo Atleta🥊</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mt-4">
            <Form.Group controlId="nome">
              <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>

              <Form.Control
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mt-4">
            <Form.Group controlId="email">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataDiNascita">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data di Nascita
              </Form.Label>
              <Form.Control
                type="date"
                name="dataDiNascita"
                value={formData.dataDiNascita}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-4">
            <Form.Group controlId="telefono">
              <Form.Label style={{ fontWeight: "bold" }}>Telefono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Telefono"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="tipoAbbonamento">
          <Form.Label className="mt-4 " style={{ fontWeight: "bold" }}>
            Tipo Abbonamento
          </Form.Label>
          <Form.Control
            as="select"
            name="tipoAbbonamento"
            value={formData.tipoAbbonamento}
            onChange={handleChange}
          >
            <option value="">Seleziona tipo di abbonamento</option>
            {tipiAbbonamento.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Row>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataInizioAbbonamento">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data Inizio Abbonamento
              </Form.Label>
              <Form.Control
                type="date"
                name="dataInizioAbbonamento"
                value={formData.dataInizioAbbonamento}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataScadenzaAbbonamento">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data Scadenza Abbonamento
              </Form.Label>
              <Form.Control
                type="date"
                name="dataScadenzaAbbonamento"
                value={formData.dataScadenzaAbbonamento}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataVisitaMedica">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data Visita Medica
              </Form.Label>
              <Form.Control
                type="date"
                name="dataVisitaMedica"
                value={formData.dataVisitaMedica}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataScadenzaVisitaMedica">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data Scadenza Visita Medica
              </Form.Label>
              <Form.Control
                type="date"
                name="dataScadenzaVisitaMedica"
                value={formData.dataScadenzaVisitaMedica}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataInizioElettroencefalogramma">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data Inizio Elettroencefalogramma
              </Form.Label>
              <Form.Control
                type="date"
                name="dataInizioElettroencefalogramma"
                value={formData.dataInizioElettroencefalogramma}
                onChange={handleChange}
                placeholder="Data inizio elettroencefalogramma (opzionale)"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-4">
            <Form.Group controlId="dataFineElettroencefalogramma">
              <Form.Label style={{ fontWeight: "bold" }}>
                Data Fine Elettroencefalogramma
              </Form.Label>
              <Form.Control
                type="date"
                name="dataFineElettroencefalogramma"
                value={formData.dataFineElettroencefalogramma}
                onChange={handleChange}
                placeholder="Data fine elettroencefalogramma (opzionale)"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-3">
          <Button className="mb-3 mt-3" variant="primary" type="submit">
            Inserisci Atleta
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default InsertAtleta;
