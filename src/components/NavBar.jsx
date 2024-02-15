import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoCompleto from "../logoCompletoremoveb.png";
const NavBar = () => {
  return (
    <>
      <Navbar
        data-bs-theme="dark"
        className="sticky-top navbar-custom"
        style={{
          borderTop: "5px solid black",
          background:
            "linear-gradient(to right, rgba(255, 255, 0, 0.5), rgba(0, 0, 0, 0.5))", // Gradiente trasparente da giallo a nero
          borderBottom: "5px solid transparent", // Prepara il bordo per il gradiente
          boxShadow:
            "0 5px 0 0 rgba(0, 128, 0, 1), 0 5px 0 5px rgba(255, 255, 255, 1), 0 5px 0 10px rgba(255, 0, 0, 1)", // Crea l'effetto tricolore
        }}
      >
        <Nav className="d-flex justify-content-center align-items-center w-100">
          {/* Altri link a sinistra */}

          <Nav.Item className="mx-auto">
            {/* <Navbar
        data-bs-theme="dark"
        className="sticky-top navbar-custom"
        style={{
          borderTop: "5px solid black",
          borderBottom: "5px solid white", // Imposta il bordo inferiore

          background:
            "linear-gradient(to right, rgba(255, 255, 0, 0.5), rgba(0, 0, 0, 0.5))", // Gradiente trasparente da giallo a nero
        }}
      >
 */}

            <Navbar.Brand as={Link} to="/" className="mx-auto">
              <img
                src={LogoCompleto}
                alt="Logo della Pugilistica Fabrianese"
                className="logo-image-navbar"
                style={{
                  width: "150px",
                  height: "80px",
                  filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.5))",
                }}
              />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Link as={Link} to="/GymBoxe">
            <span>Gym Boxe</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/noi">
            <span>Parlano di Noi</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/champGallery">
            <span>Galleria</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/orari">
            <span>Orari</span>
          </Nav.Link>

          {/* Inserisci qui i link a destra */}
          {/* Esempio: <Nav.Link as={Link} to="/another-page">Altra Pagina</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
