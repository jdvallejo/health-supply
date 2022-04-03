import React from "react";
import ProductCard from "./Product-Card";
import * as style from "./ProductsGrid.module.css";

const ProductsGrid = ({ products, search }) => {
  products = products.filter((product) => {
    if (product.nombreComercial.toLowerCase().includes(search.toLowerCase())) {
      return product;
    } else {
      return product.compuestoPrincipal
        .toLowerCase()
        .includes(search.toLowerCase());
    }
  });
  const productsList = products.sort(function (a, b) {
    return (
      (a.position === null) - (b.position === null) || +(a > b) || -(a < b)
    );
  });

  return (
    <div className={style.containerProducts}>
      {productsList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
