import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductGridSection from "../components/Product-Grid-Section";
import { SpecialitySection } from "../components/SpecialitySection";

const SpecialityPage = ({ data }) => {
  const speciality = data.strapiSpeciality;

  const seo = {
    metaTitle: speciality.product,
    metaDescription: speciality.descripcion,
    shareImage: speciality.imagen,
  };

  return (
    <Layout as="speciality">
      <main>
        {/* <Helmet
          htmlAttributes={{
            lang: i18n.language,
          }}
        >
          <title>{speciality.nombre}</title>
          <meta
            name="keywords"
            content="medicinas, medicamentos, especialidades, oncologia, neurología, cardiología, reumatologia, hepatologia, ecuador"
          />
          <meta
            name="description"
            content="Health Supply, ofrece a pacientes el acceso a medicamentos no disponibles o difíciles de conseguir de forma rápida, segura y cumpliendo todas las normativas legales"
          />
        </Helmet> */}

        {/* <div className={styles.navegation}></div> */}
        <SpecialitySection speciality={speciality} key={speciality.nombre} />

        <ProductGridSection />
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiSpeciality(slug: { eq: $slug }) {
      nombre
      locale
      descripcion {
        data {
          descripcion
        }
      }
      slug
      imagen {
        localFile {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77)
          }
        }
      }
    }
  }
`;

export default SpecialityPage;