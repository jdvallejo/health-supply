import * as React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Helmet from "react-helmet";
// import Testimonios from "../components/Testimonios";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IndexPage = () => {
  /* const { t } = useTranslation(); */
  const i18n = useI18next();
  // const currentLanguage = i18n.language;

  return (
    <main>
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
        }}
      >
        <title>Health Supply</title>
        <meta
          name="keywords"
          content="medicinas, medicamentos, especialidades, oncologia, neurologia, cardiologia, reumatologia, hepatologia, ecuador"
        />
        <meta
          name="description"
          content="Health Supply, ofrece a pacientes el acceso a medicamentos no disponibles o difíciles de conseguir de forma rápida, segura y cumpliendo todas las normativas legales"
        />
      </Helmet>
      <Menu />
      <Container fluid className="colors">
        <Row>
          <Col md={12} className="px-0">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              dolorum commodi, ea quis a, maiores numquam optio beatae quam
              aperiam, assumenda nulla nobis similique dolorem. Explicabo earum
              tempora voluptatem odit.
            </p>
          </Col>
        </Row>
      </Container>

      {/* <Testimonios /> */}

      <Container fluid className="bg-blue">
        <Row>
          <Col md={12}>
            <Formulario />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
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
