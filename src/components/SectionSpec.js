import React from "react";
import * as styles from "./sectionSpec.module.css";
import { StaticImage } from "gatsby-plugin-image";

export const SectionSpec = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <span className={styles.title}>ESPECIALIDAD DERMATOLOGIA</span>
          <div>-</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </div>
        </div>
        <div className={styles.containerImg}>
          <figure>
            <StaticImage
              alt="health supply"
              src="../images/fotos/dermatologia.png"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </figure>
        </div>
      </div>
    </>
  );
};
