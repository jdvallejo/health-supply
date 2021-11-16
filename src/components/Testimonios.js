import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Testimonios = () => {
  return (
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
                        autoplay={true}
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
                                  adipiscing elit. Auctor neque sed imperdiet
                                  nibh lectus feugiat nunc sem.
                                </p>
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
                                  adipiscing elit. Auctor neque sed imperdiet
                                  nibh lectus feugiat nunc sem.
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </SwiperSlide>
                      </Swiper>
                    </Col>
                    <Col md={5} className="my-auto">
                      <h3 className="titulo-home-spec text-end">Testimonios</h3>
                      <p className="texto-testimonio text-end">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta officiis quasi eaque cupiditate totam unde
                        illo commodi earum iste pariatur, asperiores explicabo
                        quod facere esse facilis consectetur ullam est
                        architecto?
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
                        autoplay={true}
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
                                  adipiscing elit. Auctor neque sed imperdiet
                                  nibh lectus feugiat nunc sem.
                                </p>
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
                                  adipiscing elit. Auctor neque sed imperdiet
                                  nibh lectus feugiat nunc sem.
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </SwiperSlide>
                      </Swiper>
                    </Col>
                    <Col md={5} className="my-auto">
                      <h3 className="titulo-home-spec text-end">Testimonios</h3>
                      <p className="texto-testimonio text-end">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta officiis quasi eaque cupiditate totam unde
                        illo commodi earum iste pariatur, asperiores explicabo
                        quod facere esse facilis consectetur ullam est
                        architecto?
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
  );
};

export default Testimonios;
