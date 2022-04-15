import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as styles from "./product-post.module.css";
import { ProductTabsSection } from "../components/Product-Tabs-Section";
import { Drawer, InputNumber } from "antd";
import { ProductsSelected } from "../components/ProductsSelected";
import { useLocalStorage } from "../hooks/useLocaleStorage";

const ProductPage = ({ data }) => {
  const product = data.strapiProduct;
  console.log(product);
  const MHRA = "../images/icons/mhra.svg";
  const EMA = "../images/icons/ema.svg";
  const FDA = ".../images/icons/fdaa.svg";

  const [parentData, setParentData] = useState([]);
  const [visible, setVisible] = useState(false);

  const addProductToCart = () => {
    product.quantity = productQuantity;
    setParentData(product);
    setVisible(!visible);
  };

  const [productQuantity, setProductQuantity] = useState(1);

  const stylesDrawer = { marginTop: "50px" };

  const seo = {
    metaTitle: product.nombreComercial,
    metaDescription: product.descripcion,
    shareImage: product.imagen,
  };

  return (
    <>
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
            <div className={styles.btnscontainer}>
              <div className={styles.numberProduct}>
                <InputNumber
                  min={1}
                  max={1000}
                  defaultValue={1}
                  bordered={false}
                  style={{ width: 70 }}
                  onChange={(value) => setProductQuantity(value)}
                  value={productQuantity}
                />
              </div>
              <button
                className={styles.button}
                onClick={() => addProductToCart()}
              >
                Ordenar Medicamento
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sectionInfo}>
          <div className={styles.divider}></div>
          <span className={styles.textHealth}>
            Health Supply puede ayudarte importando o consiguiendo el producto y
            posteriormente contactando contigo para su posterior entrega.
          </span>
          <div className={styles.divider}></div>
        </div>
        <ProductTabsSection product={product} />
        <div className={styles.brands}>
          <StaticImage src={MHRA} alt="Bed" />
          <StaticImage src={EMA} alt="S" />
          <StaticImage src={FDA} alt="SA" />
        </div>
      </Layout>
      <Drawer
        drawerStyle={stylesDrawer}
        title="Lista"
        placement={"right"}
        closable={true}
        visible={visible}
        key={"right"}
        width={150}
        onClose={() => setVisible(!visible)}
      >
        <button className={styles.buttonList}>Ver todo</button>
        <ProductsSelected parentData={parentData} />
      </Drawer>
    </>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiProduct(slug: { eq: $slug }) {
      id
      slug
      nombreComercial
      especialidades {
        nombre
      }
      descripcion
      presentacion
      aprobadoPor
      laboratorio
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
