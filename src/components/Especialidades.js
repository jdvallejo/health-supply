import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const Especialidades = () => {
  return (
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
              <div className="texto-tarjeta mt-md-3 mt-lg-5 ms-md-3 ms-lg-5">
                <h3 className="titulo-home text-light">
                  Medicamentos para todos
                </h3>
                <p className="texto-especialidades">
                  Cubrimos todas las especialidades
                </p>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-5">
        <Col md={12} lg={11} className="card-especialidades">
          <div className="bg-card shadow">
            <Row>
              <Col md={4} lg={5} className="my-auto">
                <h3 className="titulo-especialidad">Especialidades</h3>
                <p className="texto-especialidad">
                  A continuación, algunos de los medicamentos más solicitados. Recuerda que puedes contactarnos en caso de necesitar cualquier producto que no está en el listado.
                </p>
              </Col>
              <Col md={8} lg={7}>
                <Swiper
                  className="mySwiper"
                  navigation={true}
                  slidesPerView={1}
                  loop={Infinity}
                  autoplay={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide className="px-2 px-md-5 py-2">
                    <Container className="p-3">
                      <Row className="shadow rounded-3">
                        <Col md={4} lg={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="vw camiones"
                              src="../images/especialidades/oncologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
                          <h3 className="titulo-especialidad">Oncología</h3>
                          <p className="texto-especialidad">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de oncología como Opdivo (Nivolumab), Padcev (Enfortumab), Tibsovo (Ivosidenib), Carmustine (Carmustine), Trodelvi (Sacituzumab).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide className="px-2 px-md-5 py-2">
                    <Container className="p-3">
                      <Row className="shadow rounded-3">
                        <Col md={4} lg={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="vw camiones"
                              src="../images/especialidades/dermatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
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
                  <SwiperSlide className="px-2 px-md-5 py-2">
                    <Container className="p-3">
                      <Row className="shadow rounded-3">
                        <Col md={4} lg={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="vw camiones"
                              src="../images/especialidades/hepatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
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
                  {/* <SwiperSlide className="px-2 px-md-5 py-2">
                      <Container className="p-3">
                        <Row className="shadow rounded-3">
                          <Col md={4} lg={5} className="my-auto">
                            <figure className="p-3 mb-0">
                              <StaticImage
                                alt="vw camiones"
                                src="../images/especialidades/infecciologia.png"
                                className=""
                                style={{ height: "100%", width: "100%" }}
                                imgStyle={{ objectFit: "contain" }}
                              />
                            </figure>
                          </Col>
                          <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
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
                    </SwiperSlide> */}
                  <SwiperSlide className="px-2 px-md-5 py-2">
                    <Container className="p-3">
                      <Row className="shadow rounded-3">
                        <Col md={4} lg={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="vw camiones"
                              src="../images/especialidades/neurologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
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
                  <SwiperSlide className="px-2 px-md-5 py-2">
                    <Container className="p-3">
                      <Row className="shadow rounded-3">
                        <Col md={4} lg={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="vw camiones"
                              src="../images/especialidades/pulmonologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
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
                  <SwiperSlide className="px-2 px-md-5 py-2">
                    <Container className="p-3">
                      <Row className="shadow rounded-3">
                        <Col md={4} lg={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="vw camiones"
                              src="../images/especialidades/reumatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col md={8} lg={7} className="my-auto p-4 ps-md-0">
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
    </Container>
  );
};

export default Especialidades;
