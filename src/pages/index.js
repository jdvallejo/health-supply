import * as React from "react";
import Helmet from "react-helmet";
import Especialidades from "../components/Especialidades";
// import Testimonios from "../components/Testimonios";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
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
            <StaticImage
              alt="health supply"
              src="../images/health-supply-banner-xs.png"
              className="d-block d-sm-none"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
            <StaticImage
              alt="health supply"
              src="../images/health-supply-banner.png"
              className="d-none d-sm-block"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={11} md={11} className="step-nav">
            <Row>
              <Col>
                <h2 className="titulo-pasos mb-2 mb-md-3">
                  Tus medicamentos en pocos pasos
                </h2>
              </Col>
            </Row>

            <Row>
              <Col
                md={3}
                className="d-flex align-items-center justify-content-md-center mt-2"
              >
                <span className="number-step">1</span>
                <h2 className="name-step">Envía tu consulta</h2>
              </Col>
              <Col
                md={3}
                className="d-flex align-items-center justify-content-md-center mt-2"
              >
                <span className="number-step">2</span>
                <h2 className="name-step">Te enviamos la mejor opción</h2>
              </Col>
              <Col
                md={3}
                className="d-flex align-items-center justify-content-md-center mt-2"
              >
                <span className="number-step">3</span>
                <h2 className="name-step">Confirmas el Pedido</h2>
              </Col>
              <Col
                md={3}
                className="d-flex align-items-center justify-content-md-center mt-2"
              >
                <span className="number-step">4</span>
                <h2 className="name-step">Enviamos el Medicamento</h2>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="nopadding">
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

        <Row className="mt-4 mt-md-5 d-flex justify-content-center">
          <Col md={6} className="my-auto">
            <StaticImage
              alt="health supply mapa"
              src="../images/health-supply-mapa.png"
              className=""
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>
          <Col md={5} className="my-auto">
            <h2 className="titulo-home text-md-end mt-3 mt-md-0">
              HEALTHSUPLY EN EL MUNDO
            </h2>
            <p className="texto-home text-md-end mt-4">
              Health Supply, ofrece a pacientes el acceso a medicamentos no
              disponibles o difíciles de conseguir de forma rápida, segura y
              cumpliendo todas las normativas legales. Para lograr este
              objetivo, contamos con una amplia red de distribuidores y
              laboratorios asociados con presencia en 4 cuatro continentes y más
              de 18 países. Nuestra fortaleza es ofrecer todo tipo de
              medicamentos alineándonos a las necesidades específicas de cada
              paciente.
            </p>
          </Col>
        </Row>

        <Row className="mt-4 mt-md-5">
          <Col md={12}>
            <div className="bg-about">
              <Row className="d-flex justify-content-center" id="nosotros">
                <Col md={4} className="my-auto">
                  <h2 className="titulo-home text-start">QUIENES SOMOS</h2>
                  <p className="texto-home text-start mt-4">
                    Con más de 20 años de experiencia en el mercado farmacéutico
                    y especialmente en el área Oncológica, se evidenció que, en
                    países emergentes, no se podían realizar el 100% de los
                    tratamientos indicados a pacientes por falta de acceso a
                    medicamentos. En el 2007 HSP es fundada, con el objetivo de
                    ofrecer productos no disponibles en países emergentes a
                    pacientes de enfermedades graves.
                  </p>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className="my-auto">
                  <StaticImage
                    alt="health supply"
                    src="../images/video.jpg"
                    className=""
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Especialidades />
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
