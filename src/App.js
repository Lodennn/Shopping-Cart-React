import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import Cart from "./components/Cart/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      showCart: false,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    this.setState({ data: data, isLoading: false });
  }

  render() {
    return (
      <Fragment>
        {/** CART COMPONENT */}
        {this.state.showCart && <Cart onHide={this.hideCartModal.bind(this)} />}
        {/** CART COMPONENT */}
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {!this.state.isLoading ? (
              <Redirect to={`/products/${this.state.data[0].id}`} />
            ) : (
              <LoadingSpinner />
            )}
          </Route>
          <Route path="/products/:productId">
            {this.state.data.length > 0 ? (
              <SingleProductPage products={this.state.data} />
            ) : (
              <LoadingSpinner />
            )}
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
