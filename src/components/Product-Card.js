import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.container}>
      <GatsbyImage
        image={getImage(product.imagen?.localFile)}
        alt={product.cover?.alternativeText}
      />
      <div>
        <span className={styles.title}>
          {product.nombreComercial} - presentación en {product.presentacion}
        </span>
        <p>{product.descripcion}</p>
      </div>
      <Link to={`/product/${product.slug}`}>
        <button className={styles.button}>Ver medicamento</button>
      </Link>
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
