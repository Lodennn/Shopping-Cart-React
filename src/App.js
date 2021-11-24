import React, { Fragment, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { fetchProductsData } from "./services/api";
import NotFoundPage from "./pages/PageNotFound";
// import Cart from "./components/Cart/Cart";

const Cart = React.lazy(() => import("./components/Cart/Cart"));

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
    const productsData = await fetchProductsData();
    this.setState({ data: productsData, isLoading: false });
  }

  hideCartModal() {
    this.setState({ showCart: false });
  }
  showCartModal() {
    this.setState({ showCart: true });
  }

  addProductToCart(product, quantity) {
    if (this.isProductExistsInCart(product)) {
      this.updateExistedProductInCart(product, quantity);
    } else {
      this.addNewProductToCart(product, quantity);
    }
  }

  isProductExistsInCart(cartProduct) {
    const arrayItemIndex = this.state.cart.findIndex(
      (product) => product.id === cartProduct.id
    );
    return arrayItemIndex >= 0;
  }

  updateExistedProductInCart(product, quantity) {
    const updatedProductIndex = this.state.cart.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    const updatedCart = [...this.state.cart];

    updatedCart[updatedProductIndex] = {
      ...product,
      quantity: updatedCart[updatedProductIndex].quantity + quantity,
    };

    this.setState({ cart: updatedCart });
  }

  addNewProductToCart(product, quantity) {
    const newCartProduct = { ...product, quantity: quantity };
    this.setState((prevState) => {
      return { cart: [newCartProduct, ...prevState.cart] };
    });
  }

  removeProductFromCart(product) {
    const updatedProductIndex = this.state.cart.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    const updatedCart = [...this.state.cart];

    if (this.checkIfLastItem(updatedCart[updatedProductIndex])) {
      this.setState((prevState) => {
        return {
          cart: prevState.cart.filter(
            (cartItem) => cartItem.id !== updatedCart[updatedProductIndex].id
          ),
        };
      });
    } else {
      updatedCart[updatedProductIndex] = {
        ...product,
        quantity: updatedCart[updatedProductIndex].quantity - 1,
      };
      this.setState({ cart: updatedCart });
    }
  }

  checkIfLastItem(product) {
    return product.quantity === 1;
  }

  render() {
    return (
      <Fragment>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          {/** CART COMPONENT */}
          {this.state.showCart && (
            <Cart
              onHide={this.hideCartModal.bind(this)}
              cart={this.state.cart}
              removeProductFromCart={this.removeProductFromCart.bind(this)}
            />
          )}

          {/** NAVIGATION COMPONENT */}
          <Navigation
            onShowCartModal={this.showCartModal.bind(this)}
            cartLength={this.state.cart.length}
          />

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
                  getAddedProductToCart={this.addProductToCart.bind(this)}
                />
              ) : (
                <LoadingSpinner />
              )}
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          {/** ROUTING */}

          {/** FOOTER COMPONENT */}
          <Footer />
        </Suspense>
      </Fragment>
    );
  }
}

export default App;
