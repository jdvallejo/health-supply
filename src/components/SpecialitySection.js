import React from "react";
import * as styles from "./speciality-page.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const SpecialitySection = ({ speciality }) => {
  console.log(speciality);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.information}>
          <span className={styles.title}>Especialidad {speciality.nombre}</span>
          <div className={styles.segment}></div>
          <div>{speciality.descripcion.data.descripcion}</div>
        </div>
        <div className={styles.containerImg}>
          <figure className={styles.image}>
            <GatsbyImage
              image={getImage(speciality?.imagen?.localFile)}
              className={styles.image}
              alt={speciality.nombre}
            />
          </figure>
        </div>
      </div>
    </>
  );
};
