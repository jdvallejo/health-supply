import React from "react";
import * as styles from "./DataProduct.module.css";
import { StaticImage } from "gatsby-plugin-image";
import {useTranslation} from "gatsby-plugin-react-i18next";

export const DataProduct = () => {
  const house = "../../images/icons/house.svg";
  const message = "../../images/icons/message.svg";
  const email = "../../images/icons/mail.svg";
    const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <StaticImage src={house} alt="Bed" />
        <span className={styles.title}>{t("ContactTab.office")}</span>
        <span className={styles.subtitle}>Avenida, Santo Ángel 81 bajo</span>
      </div>
      <div className={styles.box}>
        <StaticImage src={message} alt="Bed" />
        <span className={styles.title}>{t("ContactTab.telephone")}</span>
        <span className={styles.subtitle}>092847739399</span>
      </div>{" "}
      <div className={styles.box}>
        <StaticImage src={email} alt="Bed" />
        <span className={styles.title}>Email</span>
        <span className={styles.subtitle}>Example@gmail.com</span>
      </div>
    </div>
  );
};
