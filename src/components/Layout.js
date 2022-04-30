import * as React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import {ApolloProvider} from "@apollo/client";
import client from "../gatsby-plugin-apollo/client";

const Layout = ({ children }) => {
  return (
      <>
          <ApolloProvider client={client}>
          <Menu />
          <main>
              {children}
          </main>
          <Footer />
      </ApolloProvider>
    </>
  );
};

export default Layout;
