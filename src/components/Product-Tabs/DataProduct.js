import React from "react";
import * as styles from "./DataProduct.module.css";
import { StaticImage } from "gatsby-plugin-image";

export const DataProduct = () => {
  const house = "../../images/icons/house.svg";
  const message = "../../images/icons/message.svg";
  const email = "../../images/icons/mail.svg";
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <StaticImage src={house} alt="Bed" />
        <span className={styles.title}>Nuestras oficinas</span>
        <span className={styles.subtitle}>Avenida, Santo Ángel 81 bajo</span>
      </div>
      <div className={styles.box}>
        <StaticImage src={message} alt="Bed" />
        <span className={styles.title}>Datos Telefonos</span>
        <span className={styles.subtitle}>Teléfonos: 92847739399</span>
      </div>{" "}
      <div className={styles.box}>
        <StaticImage src={email} alt="Bed" />
        <span className={styles.title}>Email</span>
        <span className={styles.subtitle}>Example@gmail.com</span>
      </div>
    </div>
  );
};
