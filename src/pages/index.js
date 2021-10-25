import * as React from "react"
import Formulario from "../components/Formulario"
import Footer from "../components/Footer"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const IndexPage = () => {
  return (
    <main>
      <Menu />
      <Container className="colors">
        <Row>
          <Col md={12} className="nopadding">
            <StaticImage
              alt="vw camiones"
              src="../images/health-supply-banner-xs.png"
              className="d-block d-sm-none"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
            <StaticImage
              alt="vw camiones"
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
              <Col md={3} className="d-flex align-items-center mt-2">
                <span className="number-step">1</span><h2 className="name-step">Te ofrecemos la mejor opción</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center mt-2">
                <span className="number-step">2</span><h2 className="name-step">Cotiza tu medicamento</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center mt-2">
                <span className="number-step">3</span><h2 className="name-step">Recibes la oferta</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center mt-2">
                <span className="number-step">4</span><h2 className="name-step">Recibes tu medicamento</h2>
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
            <h2 className="titulo-home text-md-end">
              HEALTHSUPLY EN EL MUNDO
            </h2>
            <p className="texto-home text-md-end mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, possimus in non, rem corrupti atque aliquid esse necessitatibus, sunt nemo error numquam est quae quam. Odit illum omnis voluptate iste.
            </p>
            <p className="texto-home text-md-end">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, odit suscipit aperiam alias fugit laudantium magnam quo pariatur, cum itaque labore soluta veniam ipsum nam officia eum unde quis dolorum.
            </p>
          </Col>
        </Row>

        <Row className="mt-4 mt-md-5">
          <Col md={12}>
            <div className="bg-about">
              <Row className="d-flex justify-content-center">
                <Col md={4} className="my-auto">
                  <h2 className="titulo-home text-start">
                    QUIENES SOMOS
                  </h2>
                  <p className="texto-home text-start mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, possimus in non, rem corrupti atque aliquid esse necessitatibus, sunt nemo error numquam est quae quam. Odit illum omnis voluptate iste.
                  </p>
                  <p className="texto-home text-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, odit suscipit aperiam alias fugit laudantium magnam quo pariatur, cum itaque labore soluta veniam ipsum nam officia eum unde quis dolorum.
                  </p>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className="my-auto">
                  <StaticImage
                    alt="vw camiones"
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

        <Row>
          <Col md={12}>
            <Card className="text-white rounded-0 border-0">
              <StaticImage
                alt="vw camiones"
                src="../images/especialidades.png"
                className=""
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "contain" }}
              />
              <Card.ImgOverlay>
                <div className="texto-tarjeta mt-md-5 ms-md-5">
                  <Card.Title>Medicina  a un click</Card.Title>
                  <Card.Text>
                    Mira  nuestro ámplio caltálogo <br /> de medicinas de primer nivel.
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={11} className="card-especialidades">
            <div className="bg-card shadow">
              <Row>
                <Col md={5} className="my-auto">
                  <h3 className="titulo-especialidad">
                    Especialidades
                  </h3>
                  <p className="texto-especialidad">
                    Te podemos proveer de todas las medicinas de la especialidad de "nombre de la especialidad" como medicamento 1, medicamento 2, medicamento 3, medicamento 4
                  </p>
                </Col>
                <Col md={7}>
                  <Swiper
                    className="mySwiper"
                    navigation={true}
                    slidesPerView={1}
                    loop={Infinity}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide className="px-5 py-2">
                      <Container className="p-3">
                        <Row className="shadow rounded-3">
                          <Col md={5} className="my-auto">
                            <figure className="p-4">
                              <StaticImage
                                alt="vw camiones"
                                src="../images/dentista.png"
                                className=""
                                style={{ height: "100%", width: "100%" }}
                                imgStyle={{ objectFit: "contain" }}
                              />
                            </figure>
                          </Col>
                          <Col md={7} className="my-auto">
                            <h3 className="titulo-especialidad">
                              Odontología
                            </h3>
                            <p className="texto-especialidad">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur id saepe eum reprehenderit reiciendis atque, aliquam eaque dolorum.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                  </Swiper>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center pt-3">
          <Col md={11} className="py-4 py-md-5">
            <Row>
              <Col md={12}>
                <Tabs defaultActiveKey="pacientes" className="mb-3">
                  <Tab eventKey="pacientes" title="PACIENTES">
                    <Container className="px-0">
                      <Row>
                        <Col md={7}>
                          <Swiper
                            className="mySwiper py-3"
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            loop={Infinity}
                            // autoplay={true}
                            scrollbar={{ draggable: true }}
                          >
                            <SwiperSlide className="px-5 py-2">
                              <Container className="p-3">
                                <Row className="shadow rounded-3">
                                  <Col md={12} className="my-auto p-4">
                                    <h3 className="titulo-slider-testi">
                                      Productos de primera
                                    </h3>
                                    <p className="texto-testimonio">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                                    </p>
                                    {/* <figure className="p-4">
                                      <StaticImage
                                        alt="vw camiones"
                                        src="../images/dentista.png"
                                        className="img-testimonio"
                                        style={{ height: "100%", width: "100%" }}
                                        imgStyle={{ objectFit: "contain" }}
                                      />
                                    </figure> */}
                                  </Col>
                                </Row>
                              </Container>
                            </SwiperSlide>
                          </Swiper>
                        </Col>
                        <Col md={5} className="my-auto">
                          <h3 className="titulo-testimonios">
                            Testimonios
                          </h3>
                          <p className="texto-testimonio">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta officiis quasi eaque cupiditate totam unde illo commodi earum iste pariatur,
                            asperiores explicabo quod facere esse facilis consectetur ullam est architecto?
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab eventKey="instituciones" title="INSTITUCIONES">
                    chamo
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Formulario />
      <Footer />
    </main>
  )
}

export default IndexPage
