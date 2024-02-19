import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchAtleta from "./components/SearchAtleta";
import InsertAtleta from "./components/InsertAtleta";
import NavBar from "./components/NavBar";
import EditAtleta from "./components/EditAtleta";
import Home from "./components/Home";
import Orari from "./components/Orari";
import Footer from "./components/Footer";
import ChampGallery from "./components/ChampGallery";
import ParlanoDiNoi from "./components/ParlanoDiNoi";
import GymBoxe from "./components/GymBoxe";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchAtleta" element={<SearchAtleta />} />
          <Route path="/champGallery" element={<ChampGallery />} />
          <Route path="/insertAtleta" element={<InsertAtleta />} />
          <Route path="/editAtleta/:id" element={<EditAtleta />} />
          <Route path="/orari" element={<Orari />} />
          <Route path="/noi" element={<ParlanoDiNoi />} />
          <Route path="/GymBoxe" element={<GymBoxe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
