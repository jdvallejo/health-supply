import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as styles from "./product-post.module.css";

const ProductPage = ({ data }) => {
  const product = data.strapiProduct;

  const seo = {
    metaTitle: product.nombreComercial,
    metaDescription: product.descripcion,
    shareImage: product.imagen,
  };

  return (
    <Layout as="product">
      <div className={styles.navegation}></div>
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <GatsbyImage
            image={getImage(product?.imagen?.localFile)}
            className={styles.image}
          />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.titleProduct}>{product.nombreComercial}</h1>
          <div className={styles.segment}></div>
          <p className={styles.description}>{product.descripcion}</p>
          <div className={styles.divider}></div>
          <div>
            <span className={styles.title}>LABORATORIO:</span>
            <span>{product.aprobadoPor}</span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span className={styles.title}>PRESENTACION:</span>
            <span>{product.presentacion}</span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <button className={styles.button}>Ordenar Medicamento</button>
          </div>
        </div>
      </div>
      <div className={styles.sectionInfo}>
        <div className={styles.divider}></div>
        <span>
          Health Supply pude ayudarte importando o consiguiendo el procucto y
          posteriormente contactando contigo para su posterior entrega.
        </span>
        <div className={styles.divider}></div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiProduct(slug: { eq: $slug }) {
      id
      slug
      nombreComercial
      descripcion
      presentacion
      aprobadoPor
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

export default ProductPage;
