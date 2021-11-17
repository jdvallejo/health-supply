import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Especialidades = () => {
  return (
    <Container className="cont-especialidades" id="especialidades">
      <Row>
        <Col md={12}>
          <Card className="text-white rounded-0 border-0">
            <StaticImage
              alt="health supply"
              src="../images/especialidades-sm.png"
              className="d-block d-lg-none"
              style={{ height: "100%", width: "100%" }}
            // imgStyle={{ objectFit: "contain" }}
            />
            <StaticImage
              alt="health supply"
              src="../images/especialidades.png"
              className="d-none d-lg-block"
              style={{ height: "100%", width: "100%" }}
            // imgStyle={{ objectFit: "contain" }}
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
                  A continuación, algunos de los medicamentos más solicitados.
                  Recuerda que puedes contactarnos en caso de necesitar
                  cualquier producto que no está en el listado.
                </p>
              </Col>
              <Col md={8} lg={7}>
                <Swiper
                  className="mySwiper"
                  navigation={true}
                  slidesPerView={1}
                  // autoHeight={true}
                  // loop={Infinity}
                  autoplay={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/oncologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Oncología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de oncología como: Opdivo (Nivolumab),
                            Padcev (Enfortumab), Tibsovo (Ivosidenib),
                            Carmustine (Carmustine) y Trodelvi (Sacituzumab).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/neurologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Neurología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de neurología como: Neupro
                            (rotigotine), Wakix (pitolisant), Aduhelm
                            (aducanumab-avwa) y Ponvory (ponesimod).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/dermatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Dermatología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de dermatología como: Cibinqo
                            (abrocitinib), Tremfya (guselkumab), Olumiant
                            (baricitinib) y Skilarence (dimethyl fumarate).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/patologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Patología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de patología como: Livmarli
                            (maralixibat), Bylvay (odevixibat) y Ocaliva
                            (obeticholic acid).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/infectologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Infectología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de infectología como: Rukobia
                            (fostemsavir), Cabenuva (cabotegravir +
                            rilpivirine), Veklury (remdesivir) y Truvada
                            (emtricitabine / tenofovir disoproxil).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/neumologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Neumología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de neumología como: Yupelri
                            (revefenacin), Kaftrio
                            (elexacaftor/tezacaftor/ivacaftor), Symkevi
                            (tezacaftor/ivacaftor) y Symdeko (tezacaftor /
                            ivacaftor).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/reumatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Reumatología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de reumatología como: Kevzara
                            (Sarilumab), Rinvoq (upadacitinib), Jyseleca
                            (filgotinib) y Tremfya (guselkumab).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/hematologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Hematología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de hematología como: Tavneos
                            (avacopan), Ultomiris (ravulizumab), Adakveo
                            (crizanlizumab) y Ondexxya (andexanet alfa).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            {/* <StaticImage
                              alt="health supply"
                              src="../images/especialidades/ginecologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            /> */}
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Ginecología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de ginecología como: Relumina y
                            Orilissa (elagolix).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/endocrinologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            Endocrinología
                          </h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de endocrinología como: Imcivree
                            (setmelanotide), Voxzogo (vosoritide), Zegalogue
                            (dasiglucagon) y Roszet (rosuvastatin and
                            ezetimibe).
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/cardiologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">Cardiología</h3>
                          <p className="texto-especialidad-card">
                            Te podemos proveer de todas las medicinas de la
                            especialidad de cardiología como: Repatha
                            (evolocumab), Verquvo (vericiguat), Nexletol
                            (bempedoic acid) y Vascepa (icosapent ethyl).
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
