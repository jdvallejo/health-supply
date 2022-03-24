import React from "react";
import ProductCard from "./Product-Card";
import * as style from "./ProductsGrid.module.css";

const ProductsGrid = ({ products }) => {
  return (
    <div className={style.containerProducts}>
      {products.map((product) => (
        <ProductCard product={product} key={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
