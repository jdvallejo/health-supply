import React from "react";
import * as styles from "./DetailsProduct.module.css";

export const DetailsProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rowWhite}>
        <span className={styles.title}>Especialidad</span>
        <span className={styles.value}>Especialidad</span>
      </div>
      <div className={styles.rowGray}>
        <span className={styles.title}>Presentación Farmacéutica</span>
        <span className={styles.value}>Especialidad</span>
      </div>
      <div className={styles.rowWhite}>
        <span className={styles.title}>Laboratorio</span>
        <span className={styles.value}>Especialidad</span>
      </div>
      <div className={styles.rowGray}>
        <span className={styles.title}>Aprobado por </span>
        <span className={styles.value}>Especialidad</span>
      </div>
    </div>
  );
};
