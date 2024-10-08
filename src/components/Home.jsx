import React from "react";
import MyMap from "./MyMap";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import MyCarousel from "./MyCarousel";
import { SiInstagram, SiFacebook } from "react-icons/si";

function Home() {
  return (
    <div className="home">
      <div className="fixed-background text-center">
        {/* <img
          className="d-block mx-auto w-10 custom-img-size"
          src={LogoApe}
          alt="Boxing Ring"
        /> */}
        <span className="custom-carousel-container ">
          <MyCarousel />
        </span>
        <div className="mt-3">
          <a
            href="https://www.instagram.com/pugilistica.fabrianese/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram className="fs-1 me-3 text-warning" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61557709285125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFacebook className="fs-1 text-primary" />
          </a>
        </div>
        <h2 className="mt-3">Chi siamo</h2>
        <h3 className="text-white my-4 styled-text">
          {" "}
          "Abbiamo scelto l'ape come simbolo della nostra palestra, la
          Pugilistica Fabrianese, per una serie di motivi profondamente
          significativi. L'ape è un'icona di lavoro instancabile e spirito di
          sacrificio. La sua opera incessante nella raccolta del nettare e nella
          produzione del miele riflette il nostro impegno costante
          nell'allenamento e nel perseguimento dei nostri obiettivi. Ma c'è di
          più dietro questa scelta simbolica. L'ape, con il suo pungiglione,
          rappresenta la determinazione e il coraggio nel difendere ciò che è
          prezioso per lei, anche a costo della vita. Questo atto di sacrificio
          la rende nobile e le conferisce un'onorevolezza unica. Inoltre, l'ape,
          con la sua capacità di volare come una farfalla e pungere come un'ape
          (cit. Mouhammad Alì), incarna l'armonia tra grazia e forza, una
          dualità che rispecchia la nostra filosofia di vita e di allenamento.
          Così come l'ape, noi della Pugilistica Fabrianese aspiriamo a essere
          lavoratori instancabili, coraggiosi difensori dei nostri valori e a
          incarnare l'equilibrio tra determinazione e eleganza."
        </h3>
      </div>

      <div className="col-lg-6">
        {/* Puoi mettere altro contenuto qui o lasciarlo vuoto */}
      </div>
      <div>
        <h3 className="text-center fs-1 mt-3 mb-3">Dove siamo</h3>
        <div
          style={{
            border: "3px solid rgba(52, 58, 64, 0)", // Colore del bordo trasparente
            padding: 0,
          }}
        >
          <Container
            className="mb-4"
            style={{
              border: "7px solid #343a40",
              padding: 0,
            }}
          >
            <MyMap />
          </Container>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;

/* La Pugilistica Fabrianese è un incrocio dove mente e corpo si
incontrano, rivelando come la vera forza scaturisca dalla resilienza
interiore. Ogni istante trascorso tra le corde del ring è un passo
avanti verso una maggiore fiducia in sé e rispetto reciproco. Il
rispetto è la nostra bussola; nel guardare negli occhi l'altro,
riconosciamo un alleato nel viaggio, non un avversario. Qui, il
benessere fisico è forgiato dall'impegno e dalla perseveranza, con
ogni respiro e goccia di sudore che segnano il ritmo del nostro
progresso. Ci alleniamo non solo nella tecnica del pugno, ma nell'arte
di vivere con dignità, accogliendo le sfide e la crescita personale.
Lo scontro di sguardi sul ring diventa un'occasione di riconoscimento,
un battito condiviso nella ricerca della versione migliore di noi
stessi. Alla Pugilistica Fabrianese, ogni goccia di sudore testimonia
l'impegno che trascende il fisico, celebra una vita sana e l'energia
che nutre anima e muscoli, un percorso costellato di trionfi
personali. Vi invitiamo a unirvi a noi in questo viaggio di coraggio e
forza, dove ogni round ci fortifica, ci illumina, ci unifica.*/
