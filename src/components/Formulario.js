import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  return (
    <Container>
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
                      <FloatingLabel label="Nombre y Apellido">
                        <Form.Control
                          type="text"
                          placeholder="Nombre y Apellido"
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel label="Mensaje">
                        <Form.Control type="text" placeholder="Mensaje" />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <FloatingLabel label="Email">
                        <Form.Control type="email" placeholder="Email" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel label="Teléfono (opcional)">
                        <Form.Control
                          type="text"
                          placeholder="Teléfono (opcional)"
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel label="País de contacto">
                        <Form.Control
                          type="text"
                          placeholder="País de contacto"
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      {/* <Form.Control type="email" placeholder="Email" /> */}
                    </Form.Group>
                  </Row>

                  <Row className="mt-4 mt-md-5 text-center">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-enviar px-4"
                      >
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
  );
};

export default Formulario;
