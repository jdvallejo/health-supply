import React, { useState } from "react";
import ProductCard from "./Product-Card";
import * as style from "./ProductsGrid.module.css";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const ProductsGrid = ({ products, search, filtre }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  if (filtre) {
    let filterlist = [];
    products.forEach((product) => {
      product.especialidades.forEach((especialidad) => {
        if (especialidad.nombre === filtre) {
          filterlist.push(product);
        }
      });
    });
    products = filterlist;
  }

  if (search) {
    products = products.filter((product) => {
      if (
        product.nombreComercial.toLowerCase().includes(search.toLowerCase())
      ) {
        return product;
      } else {
        return product.compuestoPrincipal
          .toLowerCase()
          .includes(search.toLowerCase());
      }
    });
  }
  const productsList = products.sort(function (a, b) {
    return (
      (a.position === null) - (b.position === null) || +(a > b) || -(a < b)
    );
  });

  const total = products.length;
  const exist = total === 0;

  return (
    <>
      <div className={style.containerProducts}>
        {productsList.slice(minValue, maxValue).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
        {exist && (
          <div className={style.productSearch}>
            No se encuentran resultados con tu busqueda. El medicamento no
            existe
          </div>
        )}
      </div>
      <div className={style.containerPagination}>
        <div className={style.paginationA}>
          <b>Total: </b>
          {maxValue} de {total}
        </div>
        {/* <div>
          Pagina
          <input
            type="number"
            min="0"
            max={Math.ceil(total / 6)}
            onChange={(value) => {
              if (value <= 1) {
                setMinValue(0);
                setMaxValue(6);
              } else {
                setMinValue(maxValue);
                setMaxValue(value * 6);
              }
            }}
          />
          De {Math.trunc(total / 6)}
          <button
            onClick={() => {
              setMinValue(maxValue);
              setMaxValue(value * 6);
            }}
          >
            Siguiente
          </button>
          <button>Anterior</button>
        </div> */}

        <Pagination
          className={style.pagination}
          defaultCurrent={0}
          defaultPageSize={6}
          total={products.length}
          onChange={(value) => {
            if (value <= 1) {
              setMinValue(0);
              setMaxValue(6);
            } else {
              setMinValue(maxValue);
              setMaxValue(value * 6);
            }
          }}
        />
      </div>
    </>
  );
};

export default ProductsGrid;
