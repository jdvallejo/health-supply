import React from "react";
import ProductCard from "./Product-Card";
import * as style from "./ProductsGrid.module.css";

const ProductsGrid = ({ products }) => {
  const productsList = products.sort(function (a, b) {
    return (
      (a.position === null) - (b.position === null) || +(a > b) || -(a < b)
    );
  });

  return (
    <div className={style.containerProducts}>
      {productsList.map((product) => (
        <ProductCard product={product} key={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
