import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container >
      <Row>
        <Col md={12}>
          <div className="bg-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde perferendis inventore aliquam voluptas,
            eius qui commodi explicabo natus facere asperiores in sapiente facilis. Sint fuga recusandae aliquid illo tempora!
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
