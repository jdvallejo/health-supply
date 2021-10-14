import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <Navbar expand="lg" className="menu my-2" fixed="top">
      <Container className="px-3 px-md-4">
        <Navbar.Brand as={Link} to="/" className="ms-3">
          <figure className="logo m-0">
            <StaticImage
              alt="vw camiones"
              src="../images/assets/health-supply-logo.png"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </figure>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <NavDropdown title="Medicinas">
              <NavDropdown.Item as={Link} to="/">
                MEDICINA 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                MEDICINA 2
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Empresa" className="nav-link-light">
              <NavDropdown.Item as={Link} to="/" >
                EMPRESA 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                EMPRESA 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/" className="nav-link-light">
              CONTACTO
            </Nav.Link>
            <NavDropdown title="Español" className="nav-link-light">
              <NavDropdown.Item as={Link} to="/">
                INGLÉS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex btn-nav">
            <Button variant="outline-success me-3">Whatsapp</Button>
            <Button variant="outline-light">Contactarnos</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
