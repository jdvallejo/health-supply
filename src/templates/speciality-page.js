import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as styles from "./product-post.module.css";
import ProductGridSection from "../components/Product-Grid-Section";

const SpecialityPage = ({ data }) => {
  const speciality = data.strapiSpeciality;

  console.log(speciality);

  // const seo = {
  //   metaTitle: speciality.product,
  //   metaDescription: speciality.descripcion,
  //   shareImage: speciality.imagen,
  // };

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

        {/* Speciality section */}
        <div className={styles.navegation}></div>
        <div className={styles.container}>
          <div className={styles.containerImg}>
            <GatsbyImage
              image={getImage(speciality?.imagen?.localFile)}
              className={styles.image}
            />
          </div>
          <div className={styles.specialityInfo}>
            <h1 className={styles.title}>{speciality.nombre}</h1>
            <p className={styles.description}>
              {speciality.descripcion.data.descripcion}
            </p>
          </div>
        </div>

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
