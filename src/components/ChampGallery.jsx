import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Primo1 from "../Primetto.jpg";
import Primo2 from "../Primo.jpeg";
import Primo3 from "../Zamparini.jpg";
import Primo4 from "../zamparini.jpeg";
import Primo5 from "../zampariniko.jpeg";
import Primo6 from "../zampariniOlim.jpeg";
import Federico from "../Federico.jpg";
import Io from "../ioEclaude.jpg";
import Matteo from "../Matteo.jpg";
import BenzWin from "../BenzWin.jpg";
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
    <>
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
            Orgoglio di Fabriano, Primo Zamparini è una leggenda vivente nel
            mondo della boxe. Nato nella nostra amata città il 10 febbraio 1939,
            Primo ha scalato le vette dell'Olimpo del pugilato con la passione e
            la determinazione che solo i veri campioni possiedono. La sua
            straordinaria carriera è stata coronata da una storica medaglia
            d'argento nei pesi gallo ai Giochi Olimpici di Roma 1960, un momento
            indimenticabile che ha elevato lo spirito sportivo di tutta
            l'Italia. Primo Zamparini non è solo un simbolo di eccellenza
            sportiva ma anche un esempio di dedizione e impegno, valori che
            continuano a ispirare giovani atleti nella nostra comunità e oltre.
            La sua eredità vive nella nostra palestra, dove Primo, con grande
            onore, ricopre il ruolo di Presidente Onorario a Vita, la sua
            immagine guida con passione le nuove generazioni verso la grandezza.
          </p>
        </p>
        {/* video */}

        <div className="video-container my-4">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ppJRPmDJRK8"
            title="Video di Primo Zamparini"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="video-credits text-center">
            <a className="nav-link" href="https://www.manuelbrega.com/">
              Video realizzato da Manuel Brega
            </a>
          </p>
        </div>

        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card champ-card shadow">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="card-img-top champ-img-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="champ-gallery-container">
        <h2 className="champ-gallery-title text-center mb-4">
          Federico Stroppa - Nuove glorie Fabrianesi
        </h2>

        <p>
          {" "}
          <p>
            Federico Stroppa, nato nel 1998, è una stella nascente del panorama
            pugilistico italiano, cresciuto e formato nella rinomata scuola
            della Pugilistica Fabrianese. Dall'inizio della sua avventura nel
            mondo della boxe, Federico ha dimostrato un talento straordinario e
            una determinazione senza pari, caratteristiche che lo hanno portato
            a conquistare la medaglia di bronzo agli Assoluti Italiani di Boxe,
            un traguardo che ha evidenziato la sua abilità e la sua tenacia sul
            ring... Ma Federico non si è fermato qui. Spinto dal desiderio di
            superare nuovi limiti e di affrontare sfide sempre più ardue, ha
            deciso di portare il suo talento oltre i confini nazionali,
            dirigendosi in Germania con l'ambizione di conquistare il titolo di
            Campione Tedesco. La sua partenza per la Germania segna l'inizio di
            un nuovo capitolo nella sua carriera, un percorso che molti
            prevedono essere ricco di successi e di nuove conquiste. Federico
            Stroppa rappresenta non solo l'eccellenza sportiva italiana nel
            mondo, ma è anche un modello di ispirazione per i giovani atleti che
            sognano di seguire le sue orme.Nella Pugilistica Fabrianese,
            Federico ha lasciato un segno indelebile, diventando un simbolo di
            eccellenza e di orgoglio per la sua città natale. Mentre prosegue
            nella sua avventura internazionale, tutti noi restiamo in attesa di
            celebrare i suoi futuri trionfi, sicuri che porterà il nome di
            Fabriano sempre più in alto nel mondo della boxe. Buona fortuna,
            Federico, il ring tedesco ti attende, e noi siamo convinti che
            saprai conquistarlo con la stessa grinta e determinazione che hai
            sempre dimostrato.
          </p>
        </p>
        <div className="row">
          <div className="card champ-card shadow">
            <img
              src={Federico}
              alt="Federico"
              className="card-img-top champ-img-top"
            />
          </div>
        </div>
      </div>
      <div className="champ-gallery-container">
        <h2 className="champ-gallery-title text-center mb-4">
          Francesco Cacciapuoti - Nuove glorie Fabrianesi
        </h2>{" "}
        <p>
          Francesco Cacciapuoti, si distingue nel panorama del pugilato per la
          sua straordinaria dedizione e spirito competitivo. Cresciuto
          nell'ambiente stimolante e ricco di tradizione della Pugilistica
          Fabrianese , Francesco ha dimostrato fin dai suoi esordi una passione
          bruciante e un impegno costante verso lo sport. Dotato di un talento
          naturale e di una determinazione ferrea, Francesco si è guadagnato il
          rispetto dei compagni di allenamento e degli avversari sul ring. La
          sua carriera, pur non essendo costellata di titoli, si distingue per
          una caratteristica notevole: la potenza del suo pugno, che gli ha
          permesso di vincere numerosi match alla prima ripresa. Questa
          capacità, unita alla sua abilità tecnica e resilienza atletica, rende
          Francesco un avversario formidabile e un esempio di forza e strategia
          nel mondo della boxe. Attualmente, mette la sua esperienza al servizio
          della comunità come allenatore, guidando la prossima generazione di
          pugili con la stessa passione e dedizione che hanno caratterizzato la
          sua carriera agonistica.
        </p>
        <div className="row">
          <div className="card champ-card shadow">
            <img src={Io} alt="Io" className="card-img-top champ-img-top" />
            {/* <div className="card-body">per aggiungere una descrizione alla foto</div> */}
          </div>
        </div>
      </div>

      <div className="champ-gallery-container">
        <h2 className="champ-gallery-title text-center mb-4">
          Matteo Mantini - Nuove glorie Fabrianesi
        </h2>{" "}
        <p>
          <p>
            Matteo Mantini si è affermato come una figura rispettata nel
            panorama del pugilato di Fabriano, grazie alla sua carriera
            brillante, segnata da una passione profonda per lo sport e risultati
            notevoli. Con un background di anni di pratica e la vittoria di un
            campionato interregionale, Matteo ha dimostrato non solo talento e
            abilità sul ring, ma anche una rara capacità di mantenere un record
            quasi impeccabile, con una sola sconfitta che attesta la sua
            resilienza e spirito competitivo. Oltre ai successi in gara, Matteo
            è conosciuto per la sua dedizione e il contributo al pugilato di
            Fabriano, dimostrando un impegno costante sia in allenamento che in
            competizione. Attualmente, sta canalizzando la sua esperienza e
            passione nel ruolo di aspirante tecnico, con l'obiettivo di
            trasferire la sua conoscenza e ispirare nuovi talenti nel mondo
            della pugilistica. Il suo approccio equilibrato tra tecnica
            raffinata e tattica acuta fa di lui un modello da seguire e un
            potenziale allenatore di successo per la nuova generazione di
            pugili.
          </p>
        </p>
        <div className="row">
          <div className="card champ-card shadow">
            <img src={Matteo} alt="Io" className="card-img-top champ-img-top" />
            {/* <div className="card-body">per aggiungere una descrizione alla foto</div> */}
          </div>
        </div>
      </div>

      <div className="champ-gallery-container">
        <h2 className="champ-gallery-title text-center mb-4">
          Beniamino Stango - Nuove glorie Fabrianesi
        </h2>{" "}
        <p>
          <p>
            Beniamino Stango emerge come figura preminente nel mondo del
            pugilato, si è rapidamente distinto per il suo stile unico e i
            risultati eccellenti. La sua carriera è stata impreziosita da un
            prestigioso bronzo ai campionati italiani universitari, dove si è
            misurato con avversari del calibro di Roberto Bassi, testimoniando
            la sua capacità di competere al più alto livello. La sua statura
            longilinea e i colpi fulminei lo contraddistinguono in modo
            significativo, facendolo risaltare come un pugile di rara abilità.
            Queste caratteristiche lo rendono un avversario formidabile, la cui
            agilità e rapidità gli consentono di dominare sul ring con
            un'eleganza e una precisione che pochi possono eguagliare. Oltre al
            talento naturale, Beniamino porta nella pugilistica fabrianese
            un'etica di lavoro e una dedizione che ispirano compagni e aspiranti
            pugili. La sua presenza arricchisce la società, portando nuove
            prospettive e elevando il livello di competizione.
          </p>
        </p>
        <div className="row">
          <div className="card champ-card shadow">
            <img
              src={BenzWin}
              alt="Io"
              className="card-img-top champ-img-top"
            />
            {/* <div className="card-body">per aggiungere una descrizione alla foto</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampGallery;
