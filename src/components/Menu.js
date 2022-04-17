import React, { useState } from "react";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { StaticImage } from "gatsby-plugin-image";
import logo1 from "../images/assets/health-supply-logo.png";
import logo2 from "../images/assets/health-supply-logo-white.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import SpecialityList from "./Speciality-List";
import { useStaticQuery, graphql } from "gatsby";

const Menu = () => {
  const { allStrapiSpeciality } = useStaticQuery(graphql`
    query {
      allStrapiSpeciality {
        nodes {
          ...SpecialityItem
        }
      }
    }
  `);

  const { t } = useTranslation();
  const { originalPath } = useI18next();

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
    <Navbar
      expand="lg"
      className={navbar ? "menu active shadow" : "menu"}
      fixed="top"
    >
      <Container className="px-3 px-md-4">
        <Navbar.Brand as={Link} to="/" className="ms-3">
          <figure className="logo m-0 d-block d-sm-none">
            <Image
              alt="health supply"
              src={navbar ? `${logo1}` : `${logo2}`}
              fluid
            />
          </figure>
          <figure className="logo m-0 d-none d-sm-block">
            <StaticImage
              alt="health supply"
              src="../images/assets/health-supply-logo.png"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </figure>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to={t("scroll.opcion1")}
              className={
                navbar
                  ? "nav-link nav-link-light active"
                  : "nav-link nav-link-light"
              }
            >
              {t("menu.opcion1")}
            </Nav.Link>
            <AnchorLink
              to={t("scroll.opcion2")}
              className={
                navbar
                  ? "nav-link nav-link-light active"
                  : "nav-link nav-link-light"
              }
            >
              {t("menu.opcion2")}
            </AnchorLink>
            {/* <NavDropdown
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
            </NavDropdown> */}
            <AnchorLink
              as={Link}
              to={t("scroll.opcion3")}
              className={
                navbar
                  ? "nav-link nav-link-light active"
                  : "nav-link nav-link-light"
              }
            >
              {t("menu.opcion3")}
            </AnchorLink>

            <SpecialityList
              navbar={navbar}
              specialities={allStrapiSpeciality.nodes}
              key={allStrapiSpeciality.nodes}
            />
            <AnchorLink
              as={Link}
              to={t("scroll.opcion4")}
              className={
                navbar
                  ? "nav-link nav-link-light active"
                  : "nav-link nav-link-light"
              }
            >
              {t("menu.opcion5")}
            </AnchorLink>
            <Nav.Link
              as={Link}
              to={originalPath}
              language="es"
              className={
                navbar
                  ? "nav-link-light active d-flex me-0"
                  : "nav-link-light d-flex me-0"
              }
            >
              <figure className="menu-flag">
                <StaticImage
                  alt="health supply"
                  src="../images/assets/spain-flag.svg"
                  style={{ height: "100%", width: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </figure>
              <span className="ps-1">ES</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={originalPath}
              language="en"
              className={
                navbar
                  ? "nav-link-light active d-flex me-0"
                  : "nav-link-light d-flex me-0"
              }
            >
              <figure className="menu-flag">
                <StaticImage
                  alt="health supply"
                  src="../images/assets/usa-flag.svg"
                  style={{ height: "100%", width: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </figure>
              <span className="ps-1">EN</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
