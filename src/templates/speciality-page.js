import * as React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as styles from "../components/speciality-page.module.css";
import ProductGridSection from "../components/Product-Grid-Section";
import { SpecialitySection } from "../components/SpecialitySection";

const SpecialityPage = ({ data }) => {
  const i18n = useI18next();
  const currentLanguage = i18n.language;
  const isBrowser = () => typeof window !== "undefined"

  const speciality = data.strapiSpeciality;
if( speciality.locale !== currentLanguage){
  isBrowser() && navigate(`/speciality/${speciality.localizations.data[0].attributes.slug}`);
}

//random key for component
const key = Math.random();




  const seo = {
    metaTitle: speciality.product,
    metaDescription: speciality.descripcion,
    shareImage: speciality.imagen,
  };

  return (
    <Layout as="speciality" >
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

        <div className={styles.menu}></div>
        <SpecialitySection speciality={speciality} key={speciality.nombre} />

        <ProductGridSection speciality={speciality.nombre} key={speciality.nombre} />
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String, $language: String!) {
    strapiSpeciality(slug: { eq: $slug }) {
      nombre
      locale
      descripcion {
        data {
          descripcion
        }
      }
      localizations {
        data {
          attributes {
            nombre
            locale
            slug
            descripcion
          }
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

export default SpecialityPage;
