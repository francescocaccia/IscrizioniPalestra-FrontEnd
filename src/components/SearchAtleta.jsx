import React, { useState } from "react";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { format } from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";
import EditAtleta from "./EditAtleta";
import { useNavigate } from "react-router-dom";

const SearchAtleta = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [atleti, setAtleti] = useState([]);
  const [modificaAtleta, setModificaAtleta] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = (atleta) => {
    const userConfirmed = window.confirm(
      "Sei sicuro di voler modificare questo atleta?"
    );
    if (userConfirmed) {
      navigate(`/editAtleta/${atleta.id}`);
    }
  };

  const fetchData = () => {
    if (searchTerm) {
      fetch(`http://localhost:8080/atleti/search?nome=${searchTerm}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Errore durante la chiamata API");
          }
          return response.json();
        })
        .then((data) => {
          setAtleti(data);
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setAtleti([]);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container className="mt-5">
      <div className="home-page">
        <h1>Benvenuto nella nostra palestra di pugilato!🥊🥊🥊</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Cerca atleta per nome..."
            aria-label="Nome dell'atleta"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={handleChange}
          />{" "}
          <div>
            <Button onClick={fetchData}>Cerca</Button>
          </div>
        </InputGroup>
        <Container className="d-flex flex-wrap justify-content-around">
          {atleti.map((atleta, index) => (
            <Card
              className="searchAtletaCard"
              style={{ width: "18rem", margin: "20px" }}
              key={index}
            >
              <Card.Body>
                <Card.Title>{atleta.nome}</Card.Title>
                <Card.Text>
                  Email: {atleta.email} <hr />
                  Telefono: {atleta.telefono} <hr />
                  Data di Nascita:{" "}
                  {format(new Date(atleta.dataDiNascita), "dd/MM/yyyy")}
                  <hr />
                  Tipo Abbonamento: {atleta.tipoAbbonamento}
                  <hr />
                  Data Inizio Abbonamento:{" "}
                  {format(
                    new Date(atleta.dataInizioAbbonamento),
                    "dd/MM/yyyy"
                  )}{" "}
                  <hr />
                  Data Scadenza Abbonamento:{" "}
                  {format(
                    new Date(atleta.dataScadenzaAbbonamento),
                    "dd/MM/yyyy"
                  )}{" "}
                  <hr />
                  Data Visita Medica:{" "}
                  {format(new Date(atleta.dataVisitaMedica), "dd/MM/yyyy")}{" "}
                  <hr />
                  Data Scadenza Visita Medica:{" "}
                  {format(
                    new Date(atleta.dataScadenzaVisitaMedica),
                    "dd/MM/yyyy"
                  )}{" "}
                  {atleta.dataInizioElettroencefalogramma && (
                    <>
                      <hr />
                      Data Inizio Elettroencefalogramma:{" "}
                      {format(
                        new Date(atleta.dataInizioElettroencefalogramma),
                        "dd/MM/yyyy"
                      )}
                    </>
                  )}
                  {atleta.dataFineElettroencefalogramma && (
                    <>
                      <hr />
                      Data Fine Elettroencefalogramma:{" "}
                      {format(
                        new Date(atleta.dataFineElettroencefalogramma),
                        "dd/MM/yyyy"
                      )}
                    </>
                  )}
                </Card.Text>

                <Button onClick={() => handleEditClick(atleta)}>
                  Modifica
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
        {modificaAtleta && <EditAtleta atleta={modificaAtleta} />}
      </div>
    </Container>
  );
};

export default SearchAtleta;
