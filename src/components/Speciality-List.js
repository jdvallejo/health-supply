import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

const SpecialityList = ({ navbar, specialities }) => {
  const { t } = useTranslation();
  const i18n = useI18next();
  const currentLanguage = i18n.language;

  specialities.sort((a, b) => a.nombre > b.nombre && 1 || -1)

  //filter specialities by current language
  specialities = specialities.filter(
    (speciality) => speciality.locale === currentLanguage
  );



  return (
    <NavDropdown
      title={t("menu.opcion4")}
      className={
        navbar ? " nav-link-light active" : " nav-link-light"
      }
    >
      {specialities.map((speciality) => (
        <Link
          key={speciality.id}
          /* className=
           {navbar
             ? "nav-link nav-link-light active"
             : "nav-link nav-link-light"}{" "}
           */
          className="d-flex align-items-center py-2"
          to={`/speciality/${speciality.slug}`}
        >
          {/* <figure className="menu-especialidad">
            <GatsbyImage
                image={`../images/especialidades/${speciality.slug}.png`}
                alt=""
              />
          </figure> */}
          <span>{speciality.nombre}</span>
        </Link>
      ))}
    </NavDropdown>
  );
};

export const query = graphql`
  fragment SpecialityItem on STRAPI_SPECIALITY {
    id
    slug
    nombre
    locale
    descripcion {
      data {
        descripcion
      }
    }
  }
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default SpecialityList;
