import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Federico from "../FedericoStroppa.webp";
import Francesco from "../FrancescoCacciapuoti2.jpg";
import Federico2 from "../Stroppa.webp";
import Giacomino from "../Giacomino.jpg";
import Favilla from "../FavillaWin.jpeg";
import GiacomoWin from "../GiacoWin.jpeg";
import FedeSignani from "../FedeeSignani.jpeg";
import GiacoPunch from "../GiacoPunch.jpeg";
import IoeMat from "../IoeMatteo.jpeg";
import KalAll from "../KalambayAllenatore.jpeg";
import MatchMatteo from "../MatchMatteo.jpeg";
import PrimoeMinchillo from "../PrimoeMinchillo.jpeg";

function ParlanoDiNoi() {
  const articoli = [
    {
      id: 9,
      titolo: "Al Fianco dei Campioni: Francesco e Matteo",
      img: IoeMat,
      descrizione: "Dietro ogni grande atleta, una squadra dedicata...",
    },
    {
      id: 12,
      titolo: "I Campioni Luigi Minchillo e Primo Zamparini",
      img: PrimoeMinchillo,
      descrizione: "Tra i più grandi di sempre...",
    },
    {
      id: 1,
      titolo: "La Gloria di Federico Stroppa",
      img: Federico,
      descrizione: "Federico Stroppa conquista il titolo...",
    },
    {
      id: 2,
      titolo: "Francesco Cacciapuoti: La Determinazione",
      img: Francesco,
      descrizione: "La storia di Francesco Cacciapuoti e la sua ascesa...",
    },
    {
      id: 3,
      titolo: "Il Ritorno di Stroppa",
      img: Federico2,
      descrizione: "Federico Stroppa fa il suo grande ritorno...",
    },
    {
      id: 4,
      titolo: "Giacomino: Il Prodigio del Ring",
      img: Giacomino,
      descrizione: "Giacomo si afferma come uno dei talenti emergenti...",
    },
    {
      id: 5,
      titolo: "La Vittoria di Favilla",
      img: Favilla,
      descrizione: "Un momento indimenticabile per Favilla...",
    },
    {
      id: 6,
      titolo: "Giacomo: Trionfo sul Ring",
      img: GiacomoWin,
      descrizione: "Giacomo vince in maniera spettacolare...",
    },
    {
      id: 7,
      titolo: "Sfida Epica: Matteo sul Ring",
      img: MatchMatteo,
      descrizione: "Un'incredibile dimostrazione di forza e tecnica...",
    },
    {
      id: 8,
      titolo: "Kalambay: Un Leggenda come Allenatore ",
      img: KalAll,
      descrizione: "L'impatto di Kalambay nel mondo della boxe...",
    },

    {
      id: 10,
      titolo: "Il Pugno di Giacomo",
      img: GiacoPunch,
      descrizione: "Analisi di una vittoria ottenuta con colpi decisivi...",
    },
    {
      id: 11,
      titolo: "Federico e Signani: Tecnica e Passione",
      img: FedeSignani,
      descrizione: "Sparring con il fuoriclasse Matteo Signani...",
    },
  ];

  return (
    <div className="container my-5 parlano-di-noi-container">
      <h2 className="text-center mb-4 parlano-di-noi-title">Parlano di Noi</h2>
      <div className="row">
        {articoli.map((articolo) => (
          <div key={articolo.id} className="col-md-4 mb-4">
            <div className="card h-100 parlano-di-noi-card">
              <img
                src={articolo.img}
                className="card-img-top parlano-di-noi-img"
                alt={articolo.titolo}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title parlano-di-noi-card-title">
                  {articolo.titolo}
                </h5>
                <p className="card-text parlano-di-noi-card-text">
                  {articolo.descrizione}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParlanoDiNoi;
