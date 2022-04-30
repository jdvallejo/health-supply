import React, { useState } from "react";
import {Link, graphql, navigate} from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as styles from "./product-post.module.css";
import { ProductTabsSection } from "../components/Product-Tabs-Section";
import { Drawer, InputNumber, message } from "antd";
import { ProductsSelected } from "../components/ProductsSelected";
import { useLocalStorage } from "../hooks/useLocaleStorage";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductPage = ({ data }) => {
  const { t } = useTranslation();
  const i18n = useI18next();
  const currentLanguage = i18n.language;
  const isBrowser = () => typeof window !== "undefined"

  const product = data.strapiProduct;
  if( product.locale !== undefined && product.locale !== currentLanguage){
    if(product.localizations.data[0]?.attributes){
      isBrowser() && navigate(`/product/${product.localizations.data[0].attributes.slug}`);
    }else{
      console.log("No se encuentra este producto traducido");
    }

  }



  const MHRA = "../images/icons/mhra.svg";
  const EMA = "../images/icons/ema.svg";
  const FDA = ".../images/icons/fdaa.svg";

  const [products, setProducts] = useLocalStorage("products", []);
  const [visible, setVisible] = useState(false);

  const addProductToCart = () => {
    product.quantity = productQuantity;
    const index = products.findIndex(
        (item) => item.slug === product.slug
    );
    const index2 = products.findIndex(
        (item) => item.localizations.data[0]?.attributes?.slug === product.slug
    );

    if (index === -1 && index2 === -1) {
      setProducts([...products, product]);
    } else {
      message.warning(t("notifications.alreadyAdded"));
    }
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
        <div className={styles.menu}></div>
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
              <span className={styles.title}>{t("productPage.laboratory")}:</span>
              <span>{product.aprobadoPor}</span>
            </div>
            <div className={styles.divider}></div>
            <div>
              <span className={styles.title}>{t("productPage.presentation")}:</span>
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
                {t("productPage.order")}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sectionInfo}>
          <div className={styles.divider}></div>
          <span className={styles.textHealth}>
           {t("productPage.description")}:
          </span>
          <div className={styles.divider}></div>
        </div>
        <ProductTabsSection product={product} />
        <Row className="pb-4">
          <Col md={12} className="nopadding px-0">
            <div className="logos-bar">
              <Row className="d-flex justify-content-center pb-3 pb-md-4">
                <Col xs={4} md={2} className="my-auto">
                  <figure className="logo-img">
                    <StaticImage
                        alt="mhra logo"
                        src="../images/mhra-logo.png"
                        style={{ height: "100%", width: "100%" }}
                        imgStyle={{ objectFit: "contain" }}
                    />
                  </figure>
                </Col>
                <Col md={1} className="d-none d-sm-block"></Col>
                <Col xs={4} md={2} className="my-auto">
                  <figure className="logo-img">
                    <StaticImage
                        alt="ema logo"
                        src="../images/ema-logo.png"
                        style={{ height: "100%", width: "100%" }}
                        imgStyle={{ objectFit: "contain" }}
                    />
                  </figure>
                </Col>
                <Col md={1} className="d-none d-sm-block"></Col>
                <Col xs={4} md={2} className="my-auto">
                  <figure className="logo-img">
                    <StaticImage
                        alt="fda logo"
                        src="../images/fda-logo.png"
                        style={{ height: "100%", width: "100%" }}
                        imgStyle={{ objectFit: "contain" }}
                    />
                  </figure>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Layout>
      <Drawer
        drawerStyle={stylesDrawer}
        title={t("productPage.drawerTitle")}
        placement={"right"}
        closable={true}
        visible={visible}
        key={"right"}
        width={150}
        onClose={() => setVisible(!visible)}
      >
        <Link to={`/shoppingcart`}>
          <button className={styles.buttonList}>{t("productPage.drawerButton")}</button>
        </Link>

        <ProductsSelected products={products} setProducts={setProducts} />
      </Drawer>
    </>
  );
};

export const pageQuery = graphql`
  query ($slug: String, $language: String!) {
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
      locale
      localizations {
        data {
          attributes {
            slug
            nombreComercial
            locale
            descripcion
          }
        }
      }
      imagen {
        localFile {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77)
          }
        }
      }
    }
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

export default ProductPage;
