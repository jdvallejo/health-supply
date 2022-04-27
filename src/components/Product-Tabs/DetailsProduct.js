import React from "react";
import * as styles from "./DetailsProduct.module.css";
import {useTranslation} from "gatsby-plugin-react-i18next";

export const DetailsProduct = ({ product }) => {
    const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.rowWhite}>
        <span className={styles.title}>{t("DetailTab.speciality")}</span>
        <span className={styles.value}>
          {product.especialidades
            .map((especialidad) => especialidad.nombre)
            .join(", ")}
        </span>
      </div>
      <div className={styles.rowGray}>
        <span className={styles.title}>{t("DetailTab.presentation")}</span>
        <span className={styles.value}>{product.presentacion}</span>
      </div>
      <div className={styles.rowWhite}>
        <span className={styles.title}>{t("DetailTab.laboratory")}</span>
        <span className={styles.value}>{product.laboratorio}</span>
      </div>
      <div className={styles.rowGray}>
        <span className={styles.title}>{t("DetailTab.approved")}</span>
        <span className={styles.value}>{product.aprobadoPor}</span>
      </div>
    </div>
  );
};
