import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import * as style from "./ProductsGrid.module.css";
import { Link, graphql } from "gatsby";

const SpecialityList = ({ specialities }) => {
  console.log(specialities);

  return (
    <div className={style.containerProducts}>
      <NavDropdown title="Especialidades">
        {specialities.map((speciality) => (
          <Link
            key={speciality.id}
            /* className={
                  navbar
                  ? "nav-link nav-link-light active"
                  : "nav-link nav-link-light"
                } */

            className="d-flex align-items-center py-2"
            to={`/speciality/${speciality.slug}`}
          >
            <figure className="menu-especialidad">
              <StaticImage
                alt="health supply"
                src="../images/assets/especialidades/dermatologia.svg"
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "contain" }}
              />
            </figure>
          </Link>
        ))}
      </NavDropdown>
    </div>
  );
};

export const query = graphql`
  fragment SpecialityItem on STRAPI_SPECIALITY {
    id
    slug
    nombre
    descripcion {
      data {
        descripcion
      }
    }
  }
`;

export default SpecialityList;
