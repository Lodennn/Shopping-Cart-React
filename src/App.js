import { Fragment } from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Product from "./components/SingleProduct/SingleProduct";
import SimilarProducts from "./components/SimilarProducts/SimilarProducts";
import Footer from "./components/Layouts/Footer/Footer";

function App() {
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

export default App;
