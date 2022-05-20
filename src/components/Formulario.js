import React, { useState, useEffect } from "react";
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
import {gql, useLazyQuery, useMutation} from '@apollo/client';
const SAVE_CLIENT = gql`
  mutation Mutation($data: ClientInput!) {
    createClient(data: $data) {
      data {
        attributes {
          name
          email
          phone
          message
          country
          interest
        }
      }
    }
  }
`;
const GET_CLIENT = gql`
  query Clients($filters: ClientFiltersInput) {
    clients(filters: $filters) {
      data {
        id
      }
    }
  }
`;
const SAVE_ORDER = gql`
  mutation Mutation($data: OrderInput!) {
    createOrder(data: $data) {
      data {
        attributes {
          quantity
          client {
            data {
              id
            }
          }
          producto {
            data {
              id
            }
          }
        }
      }
    }
  }
`;


const Formulario = () => {
  const { t } = useTranslation();
  const [nombres, setNombres] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [interes, setInteres] = useState("");
  const [createClient] = useMutation(SAVE_CLIENT);
  const [getClient,result] =  useLazyQuery(GET_CLIENT);
  const [createOrder] = useMutation(SAVE_ORDER);
  const products = JSON.parse(typeof window !== 'undefined' && window.localStorage.getItem("products"));

  useEffect( () => {
    if (result.data) {
    saveOrder()
    }

  }, [result]);

  const cambioInteres = (e) => {
    setInteres(e.target.value);
  };

  const saveStrapi = async (e) => {
    e.preventDefault();
    if (products){
      await saveClient()
    }else{
      await Swal.fire({
        title: t("form.notificationTitle"),
        text: t("form.notificationText"),
        icon: "info",
        showCloseButton: true,
      });
    }



  }

  const saveClient = async () => {
    await createClient({
      variables: {
        data: {
          name: nombres,
          email: email,
          phone: telefono,
          country: pais,
          message: mensaje,
          interest: interes,
          codeMail: products,
        }
      }
    })

    await getClient({
      variables: {
        filters: {
          name: {
            eq: nombres,
          },
          email: {
            eq: email,
          },
          phone: {
            eq: telefono,
          },
          country: {
            eq: pais,
          },
          message: {
            eq: mensaje,
          },
          interest: {
            eq: interes,
          }
        }
      }
    });
  }
  const saveOrder = () => {
  products.forEach((product) => {
    createOrder({
      variables: {
        data: {
          quantity: product.quantity,
          client: result.data.clients.data[0].id,
          producto: product.strapi_id,
        }
      }
    })
  })
    console.log(result)
    msgFormStatus()

  }

   const msgFormStatus =  () => {
      if (result.error) {
        Swal.fire({
          title: t("form.errorTitle"),
          text: t("form.errorText"),
          showCloseButton: true,
          icon: "error",
        });
      } else {
        setNombres("");
        setEmail("");
        setTelefono("");
        setPais("");
        setMensaje("");
        setInteres("");
        // setActiveSpinner(false);
        // handleClose();
        Swal.fire({
          title: t("form.successTitle"),
          text: t("form.successText"),
          showCloseButton: true,
          icon: "success",
        });
      }
  }

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
                  onSubmit={saveStrapi}
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
                    <Col md={12} controlid="formGridPassword mx-auto">
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
