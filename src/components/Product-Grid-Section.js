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
import specialityList from "./Speciality-List";

const { Option } = Select;

const ProductGridSection = ({speciality}) => {
  const [text, setText] = useState("");
  const [filtreText, setFiltreText] = useState(speciality);

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
          locale
        }
      }
    }
  `);

  const { t } = useTranslation();
  const i18n = useI18next();
  const currentLanguage = i18n.language;

  const specialityList = allStrapiSpeciality.nodes.filter(
    (speciality) => speciality.locale === currentLanguage
  );

  const productList = allStrapiProduct.nodes.filter(
      (product) => product.locale === currentLanguage
  );



  const randomKey = () => {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }

  function handleChange(value) {
    setFiltreText(value);
  }

  const textChange = (e) => {
    setText(e.target.value)
    setFiltreText('')
  }


  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <span className={styles.title}>{t("specialityPage.searchTitle")}</span>
      </div>

      <div className={styles.containerActions}>
        <div className={styles.containerSearch}>
          <input
            placeholder={t("specialityPage.searchPlaceholder")}
            type="text"
            name="text"
            value={text}
            onChange={textChange}
          ></input>
          <button className={styles.searchButton}>{t("specialityPage.searchButton")}</button>
        </div>
        <div className={styles.containerFilter}>
          <Select
            size="large"
            bordered={false}
            className={styles.dropbtn}
            showSearch
            allowClear
            style={{ width: 293 }}
            placeholder={t("specialityPage.filterPlaceholder")}
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
            {specialityList.map((speciality) => (
              <Option value={speciality.nombre}>{speciality.nombre}</Option>
            ))}
          </Select>
          ,
        </div>
      </div>
      <ProductsGrid
        products={productList}
        search={text}
        filtre={filtreText}
      />
    </div>
  );
};

export default ProductGridSection;
