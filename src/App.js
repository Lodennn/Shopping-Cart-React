import { Fragment } from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Product from "./components/Product/Product";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Breadcrumb />
      <Product />
    </Fragment>
  );
}

export default App;
