import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchAtleta from "./components/SearchAtleta";
import InsertAtleta from "./components/InsertAtleta";
import NavBar from "./components/NavBar";
import EditAtleta from "./components/EditAtleta";
import Home from "./components/Home";
import "./App.css";
import Orari from "./components/Orari";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchAtleta" element={<SearchAtleta />} />
          <Route path="/insertAtleta" element={<InsertAtleta />} />
          <Route path="/editAtleta/:id" element={<EditAtleta />} />
          <Route path="/orari" element={<Orari />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
