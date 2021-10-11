import * as React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"

const IndexPage = () => {
  return (
    <main>
      <Container className="ht-100 d-flex align-items-center">
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <StaticImage
              alt="vw camiones"
              src="../images/construccion.png"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default IndexPage
