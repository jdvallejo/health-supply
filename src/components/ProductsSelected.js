import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./ProductsSelected.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Divider } from "antd";

export const ProductsSelected = ({ products, setProducts }) => {
  return (
    <div className="products-selected">
      {products.length ? (
        products.map((product) => (
          <div key={product.id} className={styles.product}>
            <div className={styles.containerImg}>
              <GatsbyImage
                image={getImage(product?.imagen?.localFile)}
                className={styles.image}
              />
            </div>
            <button
              className={styles.buttonList}
              onClick={() => removeProduct(product.id, products, setProducts)}
            >
              <DeleteOutlined />
              Eliminar
            </button>
            <Divider />
          </div>
        ))
      ) : (
        <div> No existen productos</div>
      )}
    </div>
  );
};

const removeProduct = (id, products, setProducts) => {
  const newProducts = products.filter((product) => product.id !== id);
  setProducts(newProducts);
};
