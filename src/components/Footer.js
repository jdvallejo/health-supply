import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="bg-blue">
            <Container>
              <Row>
                <Col md={4} className="border-footer d-flex align-items-center">
                  <div>
                    <figure className="logo m-0">
                      <StaticImage
                        alt="vw camiones"
                        src="../images/assets/health-supply-logo-white.png"
                        style={{ height: "100%", width: "100%" }}
                        imgStyle={{ objectFit: "contain" }}
                      />
                    </figure>
                    <p className="texto-footer mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex eum ab eaque numquam. Sint fuga recusandae aliquid
                      illo.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="border-footer d-flex align-items-center">
                  <div className="">
                    <h3 className="name-list-footer">Site</h3>
                    <ListGroup horizontal className="list-footer">
                      <ListGroup.Item className="ps-0">Home</ListGroup.Item>
                      <ListGroup.Item>Medicina</ListGroup.Item>
                      <ListGroup.Item>Nosotros</ListGroup.Item>
                      <ListGroup.Item>Contacto</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
                <Col md={4} className="border-footer d-flex align-items-center">
                  <div className="">
                    <h3 className="name-list-footer">Social</h3>
                    <ListGroup horizontal className="list-footer">
                      <ListGroup.Item className="ps-0">Facebook</ListGroup.Item>
                      <ListGroup.Item>LinkedIn</ListGroup.Item>
                      <ListGroup.Item>Instragram</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
