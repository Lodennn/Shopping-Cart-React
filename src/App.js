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
      cart: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    this.setState({ data: data, isLoading: false });
  }

  hideCartModal() {
    this.setState({ showCart: false });
  }
  showCartModal() {
    this.setState({ showCart: true });
  }

  getAddedProductToCart(product) {
    // this.setState({ addedProductToCart: product });
    console.log("CLICKED", product);
    if (this.isProductExistsInCart(product)) {
    } else {
      this.setState((prevState) => {
        return {
          cart: [product, ...prevState.cart],
        };
      });
    }
  }
  isProductExistsInCart(cartProduct) {
    const arrayItemIndex = this.state.cart.findIndex(
      (product) => product.id === cartProduct.id
    );
    return arrayItemIndex >= 0;
  }

  render() {
    return (
      <Fragment>
        {/** CART COMPONENT */}
        {this.state.showCart && (
          <Cart onHide={this.hideCartModal.bind(this)} cart={this.state.cart} />
        )}

        {/** NAVIGATION COMPONENT */}
        <Navigation onShowCartModal={this.showCartModal.bind(this)} />

        {/** ROUTING */}
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
              <SingleProductPage
                products={this.state.data}
                getAddedProductToCart={this.getAddedProductToCart.bind(this)}
              />
            ) : (
              <LoadingSpinner />
            )}
          </Route>
        </Switch>
        {/** ROUTING */}

        {/** FOOTER COMPONENT */}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
