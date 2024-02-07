import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Assicurati di importare il CSS di Bootstrap
import Primo1 from "../Primetto.jpg";
import Primo2 from "../Primo.jpeg";
import Primo3 from "../Zamparini.jpg";
import Primo4 from "../zamparini.jpeg";
import Primo5 from "../zampariniko.jpeg";
import Primo6 from "../zampariniOlim.jpeg";

// Simula un array di immagini
const images = [
  { id: 1, url: Primo1 },
  { id: 2, url: Primo2 },
  { id: 3, url: Primo3 },
  { id: 4, url: Primo4 },
  { id: 5, url: Primo5 },
  { id: 6, url: Primo6 },
];

const ChampGallery = () => {
  return (
    <div className="champ-gallery-container">
      <h2 className="champ-gallery-title text-center mb-4">
        Primo Zamparini - Orgoglio di Fabriano
      </h2>
      <h5 className="champ-gallery-text">"La macchina da pugni"</h5>
      <p className="text-center">
        Primo è Presidente Onorario a Vita della nostra palestra
      </p>
      <p>
        {" "}
        <p>
          "Orgoglio di Fabriano, Primo Zamparini è una leggenda vivente nel
          mondo della boxe. Nato nella nostra amata città il 9 febbraio 1939,
          Primo ha scalato le vette dell'Olimpo del pugilato con la passione e
          la determinazione che solo i veri campioni possiedono. La sua
          straordinaria carriera è stata coronata da una storica medaglia
          d'argento nei pesi gallo ai Giochi Olimpici di Roma 1960, un momento
          indimenticabile che ha elevato lo spirito sportivo di tutta l'Italia.
          Primo Zamparini non è solo un simbolo di eccellenza sportiva ma anche
          un esempio di dedizione e impegno, valori che continuano a ispirare
          giovani atleti nella nostra comunità e oltre. La sua eredità vive
          nella nostra palestra, dove Primo, con grande onore, ricopre il ruolo
          di Presidente Onorario a Vita, la sua immagine guida con passione le
          nuove generazioni verso la grandezza."
        </p>
      </p>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card champ-card shadow">
              <img
                src={image.url}
                alt={image.alt}
                className="card-img-top champ-img-top"
              />
              <div className="card-body">
                <p className="card-text">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampGallery;
