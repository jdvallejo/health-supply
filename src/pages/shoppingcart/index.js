import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../../components/ProductCard.module.css";
import * as secondstyles from "./shoppingcart.module.css";
import { useLocalStorage } from "../../hooks/useLocaleStorage";
import { DeleteFilled } from "@ant-design/icons";
import { InputNumber } from "antd";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const ShoppingCart = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useLocalStorage("products", []);

  return (
    <Layout>
      <div className={secondstyles.menu}></div>
      <div className={secondstyles.containerInfo}>
        <h1 className={secondstyles.title}>{t("ShoppingCart.title")}</h1>
        <div className={secondstyles.segment}></div>
        <div>
          {" "}
          {t("ShoppingCart.description")}
        </div>
      </div>
      <div className={secondstyles.container}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
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

export default ShoppingCart;

const ProductCard = ({ product, products, setProducts }) => {
  const i18n = useI18next();
  const currentLanguage = i18n.language;
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  if (product.locale !== currentLanguage){
    product = product.localizations.data[0].attributes
  }

  const removeProduct = (id) => {
    const newProducts = products.filter((y) => y.id !== id);
    setProducts(newProducts);
  };

  const quantityChange = (value) => {
    setProductQuantity(value);

    const newProducts = products.map((y) => {
      if (y.id === product.id) {
        y.quantity = value;
      }
      return y;
    });

    setProducts(newProducts);
  };

  return (
    <div className={secondstyles.containerCard}>
      <div className={styles.containerImg}>
        <GatsbyImage image={getImage(product.imagen?.localFile)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={secondstyles.numberProduct}>
          <InputNumber
            min={1}
            max={1000}
            defaultValue={1}
            bordered={false}
            style={{ width: 70 }}
            onChange={(value) => quantityChange(value)}
            value={productQuantity}
          />
        </div>
        <div className={styles.containerLabel}>
          <span className={styles.label}>{product.label?.titulo}</span>
        </div>
        <div>
          <span className={styles.title}>{product.nombreComercial}</span>
          <p>{product.descripcion}</p>
        </div>
        <button
          onClick={() => removeProduct(product.id)}
          className={secondstyles.button}
        >
          <DeleteFilled />
          Eliminar
        </button>
      </div>
    </div>
  );
};
