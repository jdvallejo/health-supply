import React from "react";
import { DetailsProduct } from "./Product-Tabs/DetailsProduct";
import * as styles from "./ProductTabsSection.module.css";
import { Divider, Tabs } from "antd";
import { DescripctionProduct } from "./Product-Tabs/DescriptionProduct";
import { DataProduct } from "./Product-Tabs/DataProduct";

import "antd/dist/antd.css";
import {useTranslation} from "gatsby-plugin-react-i18next";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const ProductTabsSection = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.tabs}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={t("productPage.tab1")} key="1">
          <DescripctionProduct />
        </TabPane>
        <TabPane tab={t("productPage.tab2")} key="2">
          <DetailsProduct product={product} />
        </TabPane>
        <TabPane tab={t("productPage.tab3")} key="3">
          <DataProduct />
        </TabPane>
      </Tabs>
    </div>
  );
};
