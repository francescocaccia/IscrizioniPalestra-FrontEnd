import React from "react";
import { Alert, Container, Table } from "react-bootstrap";
import apepugi from "../apepugi.png";
const Orari = () => {
  // Dati esemplificativi per dimostrare la struttura
  const giorni = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const orari = ["16:30 - 17:30", "17:30 - 18:30", "18:30 - 20:00"];

  // Esempio di come potrebbero essere organizzate le classi per orario e giorno
  // Questa struttura dovrebbe essere adattata in base ai tuoi dati reali
  const classiPerOrario = {
    "16:30 - 17:30": {
      Lunedì: "Sotto i 13 anni",
      Mercoledì: "Sotto i 13 anni",
      Venerdì: "Sotto i 13 anni",
      Sabato: "Solo su invito",
    },
    "17:30 - 18:30": {
      Lunedì: "Prepugilistica e Amatori",
      Mercoledì: "Prepugilistica e Amatori",
      Venerdì: "Prepugilistica e Amatori",
    },
    "18:30 - 20:00": {
      Lunedì: "Agonisti/Amatori",
      Martedì: "Agonisti",
      Mercoledì: "Agonisti/Amatori",
      Giovedì: "Agonisti",
      Venerdì: "Agonisti/Amatori",
    },
  };

  return (
    <Container className="orari-container mt-5">
      <h2 className="text-center">
        Orari delle Lezioni{" "}
        <img
          src={apepugi}
          alt="apepugi"
          className="mx-auto d-block img-fluid"
          style={{
            maxWidth: "150px",
            filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))",
          }}
        />
      </h2>
      <div className="table-responsive">
        <Table striped bordered hover variant="dark" className="text-white">
          <thead>
            <tr>
              <th>Orario</th>
              {giorni.map((giorno, index) => (
                <th key={index}>{giorno}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orari.map((orario, index) => (
              <tr key={index}>
                <td>{orario}</td>
                {giorni.map((giorno) => (
                  <td key={giorno}>{classiPerOrario[orario][giorno] || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <p className="text-center text-light m-0 ">
          Prossimamente verranno stabiliti nuovi orari...!
        </p>
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
        </p>{" "}
      </Alert>
    </Container>
  );
};

export default Orari;
