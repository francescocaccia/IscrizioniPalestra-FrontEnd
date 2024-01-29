import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../logo.jpg";
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
        <Nav className="justify-content-center w-100">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {/* Altri link a sinistra */}

          <Nav.Item className="mx-auto">
            <Navbar.Brand as={Link} to="/">
              <div>
                <img
                  src={Logo}
                  alt="Logo della Pugilistica Fabrianese"
                  className="logo-image-navbar"
                />
              </div>
            </Navbar.Brand>
          </Nav.Item>

          {/* Inserisci qui i link a destra */}
          {/* Esempio: <Nav.Link as={Link} to="/another-page">Altra Pagina</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
