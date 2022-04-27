import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";

export const DescripctionProduct = () => {
    const { t } = useTranslation();
  return (
    <div>
      <p>
        <b>{t("DescriptionTab.capsulesTitle")}</b>
          {t("DescriptionTab.capsulesDescription")}
      </p>

      <p>
          <b>{t("DescriptionTab.tablet2Title")}</b>
          {t("DescriptionTab.tablet2Description")}
      </p>

      <p>
          <b>{t("DescriptionTab.pillTitle")}</b>
          {t("DescriptionTab.pillDescription")}
      </p>

      <p>
          <b>{t("DescriptionTab.tablet2Title")}</b>
          {t("DescriptionTab.tabletDescription")}
      </p>
    </div>
  );
};
