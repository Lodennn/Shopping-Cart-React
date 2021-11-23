import React, { Fragment } from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Product from "./components/SingleProduct/SingleProduct";
import SimilarProducts from "./components/SimilarProducts/SimilarProducts";
import Footer from "./components/Layouts/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Breadcrumb />
        <Product />
        <SimilarProducts />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
