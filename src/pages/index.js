import * as React from "react";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const IndexPage = () => {
  return (
    <main>
      <Menu />
      <Container fluid className="colors">
        <Row>
          <Col md={12} className="px-0">
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
                <span className="number-step">1</span>
                <h2 className="name-step">Envía tu consulta</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center mt-2">
                <span className="number-step">2</span>
                <h2 className="name-step">Te enviamos la mejor opción</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center mt-2">
                <span className="number-step">3</span>
                <h2 className="name-step">Confirmas el Pedido</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center mt-2">
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
              Health Supply, reduce la brecha entre las necesidades de pacientes
              y la oferta de tratamientos, para esto contamos con una amplia red
              de distribuidores y laboratorios asociados con presencia en 4
              cuatro continentes y más de 18 países, por lo que nuestra
              fortaleza es ofrecer una todo tipo de medicamentos, especialmente
              aquellos de difíciles de encontrar en países emergentes.
            </p>
          </Col>
        </Row>

        <Row className="mt-4 mt-md-5">
          <Col md={12}>
            <div className="bg-about">
              <Row className="d-flex justify-content-center">
                <Col md={4} className="my-auto">
                  <h2 className="titulo-home text-start">QUIENES SOMOS</h2>
                  <p className="texto-home text-start mt-4">
                    Con más de 20 años de experiencia en el mercado farmacéutico
                    y especialmente en el área Oncológica, se evidenció que en
                    países emergentes, no se podían realizar el 100% de los
                    tratamientos indicados a pacientes por falta de acceso a
                    medicamentos. En el 2007 HSP es fundada, con el objetivo de
                    ofrecer productos no disponibles en países emergentes a
                    pacientes de enfermedades graves.
                  </p>
                  <p className="texto-home text-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet, odit suscipit aperiam alias fugit laudantium magnam
                    quo pariatur, cum itaque labore soluta veniam ipsum nam
                    officia eum unde quis dolorum.
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
      </Container>
      <Container>
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
                  <h3 className="titulo-home text-light">
                    Medicina para todos
                  </h3>
                  <p className="texto-especialidades">
                    Mira nuestro ámplio caltálogo <br /> de medicinas de primer
                    nivel.
                  </p>
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
                  <h3 className="titulo-especialidad">Especialidades</h3>
                  <p className="texto-especialidad">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    accusantium tenetur neque voluptatem.
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
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                            <h3 className="titulo-especialidad">Oncología</h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de oncología como Padcev, Margenza,
                              Stivarga y Enhertu.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                              Dermatología
                            </h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de dermatología como Vascepa,
                              Takhzyro y Cibinqo.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                            <h3 className="titulo-especialidad">Hepatología</h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de hepatología como Tavneos,
                              Palynziq, Waylivra.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                              Infecciología
                            </h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de infecciología como Pifeltro,
                              Tamiflu, Azithromycin y Veklury.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                            <h3 className="titulo-especialidad">Neurología</h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de neurología como edaravone, Amondys
                              45, Fycompa y Austedo.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                              Pulmonología
                            </h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de pulmonología como Tavneos,
                              Kaftrio, Yupelri y Trelegy Ellipta.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                    <SwiperSlide className="px-4 px-md-5 py-2">
                      <Container className="p-3 mb-3">
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
                              Reumatología
                            </h3>
                            <p className="texto-especialidad">
                              Te podemos proveer de todas las medicinas de la
                              especialidad de reumatología como Vascepa,
                              Cosentyx, Rinvoq y Jyseleca.
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
              <Col md={12} className="testimonios-tab">
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
                            <SwiperSlide className="px-2 px-md-5 py-2">
                              <Container className="p-3 mb-3">
                                <Row className="shadow rounded-3">
                                  <Col md={12} className="my-auto p-4 pmd-5">
                                    <h3 className="titulo-home-spec">
                                      Productos de primera
                                    </h3>
                                    <p className="texto-testimonio">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Auctor neque sed
                                      imperdiet nibh lectus feugiat nunc sem.
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
                            <SwiperSlide className="px-2 px-md-5 py-2">
                              <Container className="p-3 mb-3">
                                <Row className="shadow rounded-3">
                                  <Col md={12} className="my-auto p-4 pmd-5">
                                    <h3 className="titulo-home-spec">
                                      100% Recomendado
                                    </h3>
                                    <p className="texto-testimonio">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Auctor neque sed
                                      imperdiet nibh lectus feugiat nunc sem.
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
                          <h3 className="titulo-home-spec text-end">
                            Testimonios
                          </h3>
                          <p className="texto-testimonio text-end">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dicta officiis quasi eaque cupiditate totam
                            unde illo commodi earum iste pariatur, asperiores
                            explicabo quod facere esse facilis consectetur ullam
                            est architecto?
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab eventKey="instituciones" title="INSTITUCIONES">
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
                            <SwiperSlide className="px-4 px-md-5 py-2">
                              <Container className="p-3 mb-3">
                                <Row className="shadow rounded-3">
                                  <Col md={12} className="my-auto p-4 pmd-5">
                                    <h3 className="titulo-home-spec">
                                      Productos de primera
                                    </h3>
                                    <p className="texto-testimonio">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Auctor neque sed
                                      imperdiet nibh lectus feugiat nunc sem.
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
                            <SwiperSlide className="px-4 px-md-5 py-2">
                              <Container className="p-3 mb-3">
                                <Row className="shadow rounded-3">
                                  <Col md={12} className="my-auto p-4 pmd-5">
                                    <h3 className="titulo-home-spec">
                                      100% Recomendado
                                    </h3>
                                    <p className="texto-testimonio">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Auctor neque sed
                                      imperdiet nibh lectus feugiat nunc sem.
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
                          <h3 className="titulo-home-spec text-end">
                            Testimonios
                          </h3>
                          <p className="texto-testimonio text-end">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dicta officiis quasi eaque cupiditate totam
                            unde illo commodi earum iste pariatur, asperiores
                            explicabo quod facere esse facilis consectetur ullam
                            est architecto?
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
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

export default IndexPage;
