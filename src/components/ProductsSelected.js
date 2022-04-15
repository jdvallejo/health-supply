import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./ProductsSelected.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Divider } from "antd";

export const ProductsSelected = ({ parentData }) => {
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [products, setProducts] = useLocalStorage("products", []);

  const index = products.findIndex((item) => item.id === parentData.id); // find index of product in cart
  if (index === -1 && !deleteProduct) {
    // if product is not in cart, add it to cart and update cart count in header
    setProducts([...products, parentData]);
    console.log(products.length);
  }

  const removeProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    setDeleteProduct(true);
  };

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
              onClick={() => removeProduct(product.id)}
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

//function for remove product from cart
// const removeProduct = (id) => {
//   const newProducts = products.filter((product) => product.id !== id);
//   setProducts(newProducts);
// };
