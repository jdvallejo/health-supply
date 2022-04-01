import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <GatsbyImage image={getImage(product.imagen?.localFile)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.containerLabel}>
          <span className={styles.label}>{product.label?.titulo}</span>
        </div>
        <div>
          <span className={styles.title}>{product.nombreComercial}</span>
          <p>{product.descripcion}</p>
        </div>
        <Link to={`/product/${product.slug}`}>
          <button className={styles.button}>Ver medicamento</button>
        </Link>
      </div>
    </div>
  );
};

export const query = graphql`
  fragment ProductCard on STRAPI_PRODUCT {
    id
    slug
    nombreComercial
    compuestoPrincipal
    presentacion
    descripcion
    position
    label {
      titulo
    }
    imagen {
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`;

export default ProductCard;
