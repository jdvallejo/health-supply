import React, { useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Formulario = () => {
  const { t } = useTranslation();
  const [nombres, setNombres] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [interes, setInteres] = useState("");

  const cambioInteres = (e) => {
    setInteres(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setActiveSpinner(true);
    // let cid = cuid();
    const dataForm = new FormData();
    dataForm.append("nombres", nombres);
    dataForm.append("telefono", telefono);
    dataForm.append("email", email);
    dataForm.append("pais", pais);
    dataForm.append("interes", interes);
    dataForm.append("mensaje", mensaje);
    dataForm.append("estado", 1);
    const respuesta = await axios.post(
      "https://kernel.inkside.studio/api/mensajes",
      dataForm
    );
    if (respuesta.status === 200) {
      if (respuesta.data.status === "Ok") {
        setNombres("");
        setEmail("");
        setTelefono("");
        setPais("");
        setMensaje("");
        setInteres("");
        e.target.reset();
        // setActiveSpinner(false);
        // handleClose();
        Swal.fire({
          title: "¡Gracias por confiar en nosotros!",
          text: "Pronto nos pondremos en contacto con usted.",
          showCloseButton: true,
          icon: "success",
        });
      } else {
        // setActiveSpinner(false);
        Swal.fire({
          title: "Error al enviar la información",
          text: "Intente en unos minutos...",
          showCloseButton: true,
          icon: "error",
        });
      }
    } else {
      // setActiveSpinner(false);
      Swal.fire({
        title: "Error al enviar informacion",
        text: "Intente en unos minutos...",
        showCloseButton: true,
        icon: "error",
      });
    }
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <footer>
            <Row>
              <Col md={12} className="text-center" id="contacto">
                <h3 className="titulo-footer">{t("cotizador.titulo")}</h3>
                <h4 className="subtitulo-footer">
                  {t("cotizador.subtitulo")}
                  <p className="email-footer">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ps-1">crm@healthsupply-online.com</span>
                  </p>
                </h4>
              </Col>
            </Row>
            <Row className="mb-3 d-flex justify-content-center mt-4 mt-md-5">
              <Col md={8}>
                <Form
                  className="contacto-form"
                  id="contacto"
                  onSubmit={handleSubmit}
                >
                  <Row className="mb-3">
                    <Col md={6}>
                      <FloatingLabel label={t("cotizador.nombre")}>
                        <Form.Control
                          type="text"
                          placeholder={t("cotizador.nombre")}
                          required
                          onChange={(e) => setNombres(e.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel label={t("cotizador.email")}>
                        <Form.Control
                          type="email"
                          placeholder={t("cotizador.email")}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <FloatingLabel label={t("cotizador.telefono")}>
                        <Form.Control
                          type="text"
                          placeholder={t("cotizador.telefono")}
                          required
                          onChange={(e) => setTelefono(e.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel label={t("cotizador.pais")}>
                        <Form.Control
                          type="text"
                          placeholder={t("cotizador.pais")}
                          required
                          onChange={(e) => setPais(e.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col md={12}>
                      <FloatingLabel label={t("cotizador.mensaje")}>
                        <Form.Control
                          as="textarea"
                          placeholder={t("cotizador.mensaje")}
                          style={{ height: "100px" }}
                          required
                          onChange={(e) => setMensaje(e.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={12}>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label={t("cotizador.paciente")}
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            value="Paciente"
                            checked={interes === "Paciente" ? true : false}
                            onChange={cambioInteres}
                            required
                          />
                          <Form.Check
                            inline
                            label={t("cotizador.profesional")}
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            value="Profesional de la salud"
                            checked={
                              interes === "Profesional de la salud"
                                ? true
                                : false
                            }
                            onChange={cambioInteres}
                          />
                        </div>
                      ))}
                      {/* <p>El interés seleccionado es: {interes} </p> */}
                    </Col>
                  </Row>

                  <Row className="mt-4 mt-md-5 text-center">
                    <Col md={12} controlId="formGridPassword mx-auto">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-enviar px-4"
                      >
                        {t("cotizador.boton")}
                      </Button>
                    </Col>
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
