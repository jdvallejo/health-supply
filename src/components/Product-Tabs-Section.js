import React from "react";
import { DetailsProduct } from "./Product-Tabs/DetailsProduct";
import * as styles from "./ProductTabsSection.module.css";
import { Divider, Tabs } from "antd";
import { DescripctionProduct } from "./Product-Tabs/DescriptionProduct";
import { DataProduct } from "./Product-Tabs/DataProduct";

import "antd/dist/antd.css";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const ProductTabsSection = () => {
  return (
    <div className={styles.tabs}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="DESCRIPCION" key="1">
          <DescripctionProduct />
        </TabPane>
        <TabPane tab="DETALLES - FICHA DE DATOS" key="2">
          <DetailsProduct />
        </TabPane>
        <TabPane tab="DATOS DE CONTACTO" key="3">
          <DataProduct />
        </TabPane>
      </Tabs>
    </div>
  );
};
