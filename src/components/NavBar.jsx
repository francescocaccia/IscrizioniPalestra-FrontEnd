import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoCompleto from "../logoCompleto.png";
const NavBar = () => {
  return (
    <>
      <Navbar
        data-bs-theme="dark"
        className="sticky-top navbar-custom"
        style={{
          borderTop: "5px solid black",
          borderBottom: "5px solid white", // Imposta il bordo inferiore
          background:
            "linear-gradient(to right, rgba(255, 255, 0, 0.5), rgba(0, 0, 0, 0.5))", // Gradiente trasparente da giallo a nero
        }}
      >
        <Nav className="d-flex justify-content-center align-items-center w-100">
          {/* Altri link a sinistra */}

          <Nav.Item className="mx-auto">
            <Navbar.Brand as={Link} to="/" className="mx-auto">
              <img
                src={LogoCompleto}
                alt="Logo della Pugilistica Fabrianese"
                className="logo-image-navbar"
                style={{ width: "150px", height: "80px" }} // Imposta la larghezza a 150 pixel
              />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Link as={Link} to="/">
            Galleria
          </Nav.Link>
          {/* Inserisci qui i link a destra */}
          {/* Esempio: <Nav.Link as={Link} to="/another-page">Altra Pagina</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
