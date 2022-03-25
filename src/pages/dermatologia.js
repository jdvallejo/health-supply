import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import { SectionSpec } from "../components/SectionSpec";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as styles from "./products.module.css";
import ProductsGrid from "../components/Products-Grid";

const Dermatologia = () => {
  const { allStrapiProduct } = useStaticQuery(graphql`
    query {
      allStrapiProduct {
        nodes {
          ...ProductCard
        }
      }
    }
  `);

  const { t } = useTranslation();
  const i18n = useI18next();

  return (
    <Layout>
      <main>
        <Helmet
          htmlAttributes={{
            lang: i18n.language,
          }}
        >
          <title>BUSCADOR DE ALIMENTOS</title>
          <meta
            name="keywords"
            content="medicinas, medicamentos, especialidades, oncologia, neurología, cardiología, reumatologia, hepatologia, ecuador"
          />
          <meta
            name="description"
            content="Health Supply, ofrece a pacientes el acceso a medicamentos no disponibles o difíciles de conseguir de forma rápida, segura y cumpliendo todas las normativas legales"
          />
        </Helmet>
        <br></br>
        <br></br>
        <br></br>
        <SectionSpec />
        <div className={styles.container}>
          <div className={styles.containerTitle}>
            <span className={styles.title}>BUSCADOR DE MEDICAMENTOS</span>
          </div>

          <div className={styles.containerActions}>
            <div className={styles.containerSearch}>
              <input type="text" placeholder="¿Qué medicamento buscas?"></input>
              <button className={styles.searchButton}>Buscar</button>
            </div>
            <div className={styles.containerFilter}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Filtrar por</button>
                <div className={styles.dropdownContent}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <ProductsGrid products={allStrapiProduct.nodes} />
        </div>
      </main>
    </Layout>
  );
};

export default Dermatologia;
