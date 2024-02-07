import React from "react";
import MyMap from "./MyMap";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import MyCarousel from "./MyCarousel";
import LogoApe from "../apepugi.png";
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
          <SiInstagram className="fs-1 me-3 text-warning" />
          <SiFacebook className="fs-1 text-primary" />
        </div>
        <h2 className="mt-3">Chi siamo</h2>
        <h3 className="text-white my-4 styled-text">
          La Pugilistica Fabrianese è un incrocio dove mente e corpo si
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
          forza, dove ogni round ci fortifica, ci illumina, ci unifica.
        </h3>
      </div>

      <div className="col-lg-6">
        {/* Puoi mettere altro contenuto qui o lasciarlo vuoto */}
      </div>
      <div>
        <h3 className="text-center fs-1 mt-3 mb-3">Dove siamo</h3>
        <Container
          style={{
            border: "7px solid #343a40",
            padding: 0,
          }}
        >
          <MyMap />
        </Container>
      </div>
      <footer className="bg-dark text-white p-3 mt-3 text-center">
        <p>© 2023 Pugilistica Fabrianese | Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}

export default Home;
