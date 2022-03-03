import * as React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;