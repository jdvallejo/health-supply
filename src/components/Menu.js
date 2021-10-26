import React, { useState } from "react";
// import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import logo1 from "../images/assets/health-supply-logo.png"
import logo2 from "../images/assets/health-supply-logo-white.png"

const Menu = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 56) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY)
  };

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <Navbar expand="lg" className={navbar ? "menu active" : "menu"} fixed="top">
      <Container className="px-3 px-md-4">
        <Navbar.Brand as={Link} to="/" className="ms-3">
          <figure className="logo m-0 d-block d-sm-none">
            <Image
              alt="healthy supply"
              src={navbar ? `${logo1}` : `${logo2}`}
              fluid
              /* src="../images/assets/health-supply-logo-white.png" */
            />
          </figure>
          {/* <figure className="logo m-0 d-none d-sm-block">
            <StaticImage
              alt="healthy supply"
              src="../images/assets/health-supply-logo.png"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </figure> */}
          <figure className="logo m-0 d-none d-sm-block">
            <StaticImage
              alt="healthy supply"
              /* src={navbar ? "../images/assets/health-supply-logo.png" : "../images/assets/health-supply-logo-white.png"} */
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
            <NavDropdown
              title="Empresa"
              className={navbar ? "nav-link-light active" : "nav-link-light"}
            >
              <NavDropdown.Item as={Link} to="/">
                EMPRESA 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                EMPRESA 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/"
              className={navbar ? "nav-link-light active" : "nav-link-light"}
            >
              CONTACTO
            </Nav.Link>
            <NavDropdown
              title="Español"
              className={navbar ? "nav-link-light active" : "nav-link-light"}
            >
              <NavDropdown.Item as={Link} to="/">
                INGLÉS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex btn-nav">
            <Button variant="outline-success me-3">Whatsapp</Button>
            <Button variant={navbar ? "outline-secondary" : "outline-light"}>
              Contactarnos
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
