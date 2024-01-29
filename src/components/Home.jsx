import React from "react";
import KoFermo from "../k.o fermo.jpg";
import Logo from "../logo.jpg";
import MyMap from "./MyMap";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import MyCarousel from "./MyCarousel";

function Home() {
  return (
    <div className="home">
      <div className="fixed-background text-center">
        <Container>
          <div className="custom-carousel-container">
            <MyCarousel />
          </div>
        </Container>
        <h3 className="text-white">
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
        <h3 className="text-center fs-1">Dove siamo 🗺️</h3>
        <Container>
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
