import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <Container className="px-2">
      <Row>
        <Col md={12}>
          <div>
            <Container className="px-0">
              <Row>
                <Col md={12}>
                  <figure className="logo m-0">
                    <StaticImage
                      alt="vw camiones"
                      src="../images/assets/health-supply-logo-white.png"
                      style={{ height: "100%", width: "100%" }}
                      imgStyle={{ objectFit: "contain" }}
                    />
                  </figure>
                </Col>
              </Row>
              <Row>
                <Col md={4} className="border-footer d-flex align-items-center justify-content-center">
                  <div>
                    <h4 className="texto-footer mt-4">
                      890 SOUTHDIXIE HIGHWAY, CORAL GABLES, FL 33146 US
                    </h4>
                  </div>
                </Col>
                <Col md={4} className="border-footer d-flex align-items-center justify-content-center mt-3 mt-md-0">
                  <h4 className="texto-footer text-center">Teléfono: +1 395 8978998</h4>
                  {/* <div className="">
                    <h3 className="name-list-footer">Site</h3>
                    <ListGroup horizontal className="list-footer">
                      <ListGroup.Item className="ps-0">Home</ListGroup.Item>
                      <ListGroup.Item>Medicina</ListGroup.Item>
                      <ListGroup.Item>Nosotros</ListGroup.Item>
                      <ListGroup.Item>Contacto</ListGroup.Item>
                    </ListGroup>
                  </div> */}
                </Col>
                <Col
                  md={4}
                  className="border-footer d-flex align-items-center mt-3 mt-md-0"
                >
                  <h4 className="texto-footer text-md-center">
                    Mail: crm@healthsupply-online.com
                  </h4>
                  {/* <div className="">
                    <h3 className="name-list-footer">Social</h3>
                    <ListGroup horizontal className="list-footer">
                      <ListGroup.Item className="ps-0">Facebook</ListGroup.Item>
                      <ListGroup.Item>LinkedIn</ListGroup.Item>
                      <ListGroup.Item>Instragram</ListGroup.Item>
                    </ListGroup>
                  </div> */}
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center mt-3">
          <p className="copyright text-uppercase mb-1">Health Supply</p>
          <p className="copyright">All rights reserved. Copyright © 2021</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
