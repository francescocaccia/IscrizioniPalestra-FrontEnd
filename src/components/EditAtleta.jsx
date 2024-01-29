import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const EditAtleta = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataDiNascita: "",
    telefono: "",
    tipoAbbonamento: "",
    dataInizioAbbonamento: "",
    dataScadenzaAbbonamento: "",
    dataVisita: "",
    dataScadenzaVisita: "",
    dataInizioElettroencefalogramma: "",
    dataFineElettroencefalogramma: "",
  });

  const endpoint = "http://localhost:8080";
  //https://iscrizioni-pugilistica-backend-e83ee638be60.herokuapp.com
  const [tipiAbbonamento, setTipiAbbonamento] = useState([]);

  useEffect(() => {
    fetch(endpoint + `/atleti/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          nome: data.nome,
          email: data.email,
          dataDiNascita: data.dataDiNascita,
          telefono: data.telefono,
          tipoAbbonamento: data.tipoAbbonamento,
          dataInizioAbbonamento: data.dataInizioAbbonamento,
          dataScadenzaAbbonamento: data.dataScadenzaAbbonamento,
          dataVisitaMedica: data.dataVisitaMedica,
          dataScadenzaVisitaMedica: data.dataScadenzaVisitaMedica,
          dataInizioElettroencefalogramma: data.dataInizioElettroencefalogramma,
          dataFineElettroencefalogramma: data.dataFineElettroencefalogramma,
        });
      });

    fetch(endpoint + `/atleti/tipoAbbonamento`)
      .then((response) => response.json())
      .then((data) => setTipiAbbonamento(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm(
      "Sei sicuro di voler procedere con la modifica?"
    );

    if (isConfirmed) {
      fetch(endpoint + `/atleti/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              "Si è verificato un errore durante l'aggiornamento"
            );
          }
        })
        .then((data) => {
          console.log(data);
          window.alert("Modifica completata con successo!");
        })
        .catch((error) => {
          console.error(error);
          window.alert("Si è verificato un errore: " + error.message);
        });
    }
  };
  return (
    <>
      {" "}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Modifica Atleta🥊</h2>
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
            <Form.Label style={{ fontWeight: "bold" }}>
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
              Modifica Atleta
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default EditAtleta;
