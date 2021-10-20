import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const IndexPage = () => {
  return (
    <main>
      <Menu />
      <Container className="colors">
        <Row>
          <Col md={12} >
            <StaticImage
              alt="vw camiones"
              src="../images/health-supply-banner.png"
              className=""
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={11} className="step-nav">
            <Row>
              <Col md={3} className="d-flex align-items-center">
                <span className="number-step">1</span><h2 className="name-step">Te ofrecemos la mejor opción</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center">
                <span className="number-step">2</span><h2 className="name-step">Cotiza tu medicamento</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center">
                <span className="number-step">3</span><h2 className="name-step">Recibes la oferta</h2>
              </Col>
              <Col md={3} className="d-flex align-items-center">
                <span className="number-step">4</span><h2 className="name-step">Recibes tu medicamento</h2>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="logos-bar">
              <Row className="d-flex justify-content-center pb-3">
                <Col md={2} className="my-auto">
                  <figure className="logo-img">
                    <StaticImage
                      alt="vw camiones"
                      src="../images/mhra-logo.png"
                      style={{ height: "100%", width: "100%" }}
                      imgStyle={{ objectFit: "contain" }}
                    />
                  </figure>
                </Col>
                <Col md={1}></Col>
                <Col md={2} className="my-auto">
                  <figure className="logo-img">
                    <StaticImage
                      alt="vw camiones"
                      src="../images/ema-logo.png"
                      style={{ height: "100%", width: "100%" }}
                      imgStyle={{ objectFit: "contain" }}
                    />
                  </figure>
                </Col>
                <Col md={1}></Col>
                <Col md={2} className="my-auto">
                  <figure className="logo-img">
                    <StaticImage
                      alt="vw camiones"
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
              alt="vw camiones"
              src="../images/health-supply-mapa.png"
              className=""
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>
          <Col md={5} className="my-auto">
            <h2 className="titulo-home text-end">
              HEALTHSUPLY EN EL MUNDO
            </h2>
            <p className="texto-home text-end mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, possimus in non, rem corrupti atque aliquid esse necessitatibus, sunt nemo error numquam est quae quam. Odit illum omnis voluptate iste.
            </p>
            <p className="texto-home text-end">
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
                    HEALTHSUPLY EN EL MUNDO
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
            <div className="bg-red">
              <Row>
                <Col md={6}>
                  <h3 className="titulo-especialidad">
                    Especialidades
                  </h3>
                  <p className="texto-especialidad">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, fuga necessitatibus, aliquam dolore accusamus cupiditate esse magnam pariatur odit sit quidem
                  </p>
                </Col>
                <Col md={6}>
                  <Swiper
                    className="mySwiper"
                    navigation={true}
                    slidesPerView={1}
                    loop={Infinity}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide>
                      <Container>
                        <Row>
                          <Col md={6}>
                            <StaticImage
                              alt="vw camiones"
                              src="../images/dentista.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </Col>
                          <Col md={6}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur id saepe eum reprehenderit reiciendis atque, aliquam eaque dolorum, at consequatur eius earum. Omnis cumque et doloribus repudiandae, iste architecto minima.
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

        <Row>
          <Col md={12}>
            <footer>
              <Row>
                <Col md={12} className="text-center">
                  <h3 className="titulo-footer">
                    Tus pensamientos son importantes
                  </h3>
                  <h4 className="subtitulo-footer">
                    Ecríbenos tu opinión o dudas, y ayudanos a crecer.
                  </h4>
                </Col>
              </Row>
              <Row className="mb-3 d-flex justify-content-center mt-4 mt-md-5">
                <Col md={8}>
                  <Form className="contacto-form">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control type="text" placeholder="Nombre y Apellido" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="text" placeholder="Mensaje" />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="text" placeholder="Teléfono (opcional)" />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="text" placeholder="País de contacto" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        {/* <Form.Control type="email" placeholder="Email" /> */}
                      </Form.Group>
                    </Row>

                    <Row className="mt-4 mt-md-5 text-center">
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Button variant="primary" type="submit" className="btn-enviar px-4">
                          Enviar
                        </Button>
                      </Form.Group>

                    </Row>
                  </Form>

                </Col>

              </Row>
            </footer>
          </Col>
        </Row>
      </Container>

    </main>
  )
}

export default IndexPage
