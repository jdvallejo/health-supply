import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "./Layout";
import Helmet from "react-helmet";
import { SectionSpec } from "./SpecialitySection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as styles from "./products.module.css";
import ProductsGrid from "./Products-Grid";
import { useState } from "react";

const ProductGridSection = () => {
  const [text, setText] = useState("");

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
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <span className={styles.title}>BUSCADOR DE MEDICAMENTOS</span>
      </div>

      <div className={styles.containerActions}>
        <div className={styles.containerSearch}>
          <input
            placeholder="¿Qué medicamento buscas?"
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
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
      <ProductsGrid
        products={allStrapiProduct.nodes}
        search={text}
        key={text}
      />
    </div>
  );
};

export default ProductGridSection;
