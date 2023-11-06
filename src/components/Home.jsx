import React from "react";

function Home() {
  return (
    <div className="App">
      <header className="bg-dark text-white p-3">
        <h1 className="text-center">A.S.D. Pugilistica Fabrianese Liberti</h1>
      </header>
      <main className="container mt-3">
        <div className="text-center">
          <h1>
            Pugilistica Fabrianese: Resilienza e Rispetto nel Ring e nella Vita
          </h1>
          <h3>
            La Pugilistica Fabrianese è un incrocio dove mente e corpo si
            incontrano, rivelando come la vera forza scaturisca dalla resilienza
            interiore. Ogni istante trascorso tra le corde del ring è un passo
            avanti verso una maggiore fiducia in sé e rispetto reciproco. Il
            rispetto è la nostra bussola; nel guardare negli occhi l'altro,
            riconosciamo un alleato nel viaggio, non un avversario. Qui, il
            benessere fisico è forgiato dall'impegno e dalla perseveranza, con
            ogni respiro e goccia di sudore che segnano il ritmo del nostro
            progresso. Ci alleniamo non solo nella tecnica del pugno, ma
            nell'arte di vivere con dignità, accogliendo le sfide e la crescita
            personale. Lo scontro di sguardi sul ring diventa un'occasione di
            riconoscimento, un battito condiviso nella ricerca della versione
            migliore di noi stessi. Alla Pugilistica Fabrianese, ogni goccia di
            sudore testimonia l'impegno che trascende il fisico, celebra una
            vita sana e l'energia che nutre anima e muscoli, un percorso
            costellato di trionfi personali. Vi invitiamo a unirvi a noi in
            questo viaggio di coraggio e forza, dove ogni round ci fortifica, ci
            illumina, ci unifica.
          </h3>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <p>
              La Pugilistica Fabrianese Liberti A.S.D. è una palestra di
              pugilato con una lunga storia e una forte passione per lo sport.
              Offriamo corsi per tutte le età e livelli di abilità, dai
              principianti ai professionisti.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.wyL0biGFvTjw8u6ZXwI3oQHaE8&pid=Api&P=0&h=180"
              alt="Boxing Ring"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <img
              src="https://tse2.explicit.bing.net/th?id=OIP.bPofsnGCrX55pDYyl-41HwHaE8&pid=Api&P=0&h=180"
              alt="Boxing Gloves"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-lg-6">
            <h2>I Nostri Corsi</h2>
            <p>
              Offriamo una varietà di corsi, tra cui pugilato per principianti,
              pugilato avanzato, allenamento di resistenza e molto altro. Scopri
              di più sui nostri corsi qui.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white p-3 mt-3 text-center">
        <p>
          © 2023 Pugilistica Fabrianese Liberti A.S.D. | Tutti i diritti
          riservati
        </p>
      </footer>
    </div>
  );
}

export default Home;
