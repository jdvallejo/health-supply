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
import { Select } from "antd";

const { Option } = Select;

const ProductGridSection = () => {
  const [text, setText] = useState("");
  const [filtreText, setFiltreText] = useState("");

  const { allStrapiProduct, allStrapiSpeciality } = useStaticQuery(graphql`
    query {
      allStrapiProduct {
        nodes {
          ...ProductCard
        }
      }
      allStrapiSpeciality {
        nodes {
          nombre
        }
      }
    }
  `);

  const { t } = useTranslation();
  const i18n = useI18next();

  function handleChange(value) {
    setFiltreText(value);
  }

  console.log(allStrapiProduct.nodes);

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
          <Select
            size="large"
            bordered={false}
            className={styles.dropbtn}
            showSearch
            allowClear
            style={{ width: 293 }}
            placeholder="Filtrar por"
            optionFilterProp="children"
            value={filtreText}
            onChange={handleChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {allStrapiSpeciality.nodes.map((speciality) => (
              <Option value={speciality.nombre}>{speciality.nombre}</Option>
            ))}
          </Select>
          ,
        </div>
      </div>
      <ProductsGrid
        products={allStrapiProduct.nodes}
        search={text}
        key={text}
        filtre={filtreText}
      />
    </div>
  );
};

export default ProductGridSection;
