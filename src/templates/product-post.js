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
          <h1 className={styles.title}>{product.nombreComercial}</h1>
          <p className={styles.description}>{product.descripcion}</p>
        </div>
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
