import * as React from "react";
import Formulario from "../components/Formulario";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <Container fluid className="bg-blue">
      <Row>
        <Col md={12}>
          <Formulario />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Container className="px-2">
            <Row>
              <Col md={12}>
                <div>
                  <Container className="px-0">
                    <Row className="mt-md-4">
                      <Col md={12}>
                        <figure className="logo m-0">
                          <StaticImage
                            alt="health supply"
                            src="../images/assets/health-supply-logo-white.png"
                            style={{ height: "100%", width: "100%" }}
                            imgStyle={{ objectFit: "contain" }}
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        md={4}
                        className="border-footer d-flex align-items-center justify-content-center"
                      >
                        <div>
                          <h4 className="texto-footer mt-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 890
                            SOUTHDIXIE HIGHWAY, CORAL GABLES, FL 33146 US
                          </h4>
                        </div>
                      </Col>
                      <Col
                        md={4}
                        className="border-footer d-flex align-items-center justify-content-center mt-3 mt-md-0"
                      >
                        <h4 className="texto-footer text-center">
                          <FontAwesomeIcon icon={faPhone} /> +1 395 8978998
                        </h4>
                      </Col>
                      <Col
                        md={4}
                        className="border-footer d-flex align-items-center justify-content-center mt-3 mt-md-0"
                      >
                        <h4 className="texto-footer text-md-center">
                          <FontAwesomeIcon icon={faEnvelope} />{" "}
                          crm@healthsupply-online.com
                        </h4>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center mt-3 mb-4 pb-1">
                <p className="copyright text-uppercase mb-1">Health Supply</p>
                <p className="copyright">
                  All rights reserved. Copyright © 2021
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
