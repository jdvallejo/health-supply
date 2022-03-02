import * as React from "react";
/* import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
 */ import Helmet from "react-helmet";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "../../../components/Formulario";
// import { StaticImage } from "gatsby-plugin-image";
import Menu from "../../../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles.css";

const Dermatologia = () => {
  return (
    <main>
      <Helmet
      /*  htmlAttributes={{
          lang: i18n.language,
        }} */
      >
        <title>Dermatologia</title>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              porro quisquam illo sunt, molestias autem delectus amet, dolorem
              neque laboriosam, commodi maiores! Voluptas aliquid ab nemo
              reiciendis eum sequi pariatur.
            </p>
          </Col>
        </Row>
      </Container>

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

export default Dermatologia;
