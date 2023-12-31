import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar
        data-bs-theme="dark"
        className="sticky-top navbar-custom"
        style={{
          borderBottom: "15px solid black",
          borderTop: "15px solid black",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pugilistica Fabrianese
          </Navbar.Brand>
          <Nav className="me-auto mt-3">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/insertAtleta">
              Inserisci Atleta
            </Nav.Link>
            <Nav.Link as={Link} to="/searchAtleta">
              Cerca Atleta
            </Nav.Link>
            {/* Aggiungi ulteriori Link per altre pagine se necessario */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
