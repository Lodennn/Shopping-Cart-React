import React, { Fragment, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { fetchProductsData } from "./services/api";
import NotFoundPage from "./pages/PageNotFound";
import Snackbar from "./components/UI/Snackbar/Snackbar";

// LAZY LOADING CART COMPONENT
const Cart = React.lazy(() => import("./components/Cart/Cart"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      showCart: false,
      cart: [],
      snackbarStatus: false,
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

  /**
   * addProductToCart is a method which takes 2 inputs (product) and (quantity)
   * and set the state of cart to add new product to it
   * @param {object} product
   * @param {number} quantity
   * @author Khaled Nasser
   */
  addProductToCart(product, quantity) {
    if (!this.isProductExistsInCart(product)) {
      this.addNewProductToCart(product, quantity);
    } else {
      this.updateExistedProductInCart(product, quantity);
    }
    this.setState({ snackbarStatus: true });
    setTimeout(() => {
      this.setState({ snackbarStatus: false });
    }, 5000);
  }

  /**
   * isProductExistsInCart is a method which take a cart product and checks if its exists
   * in cart or not
   * and set the state of cart to add new product to it
   * @param {object} cartProduct
   * @returns boolean
   * @author Khaled Nasser
   */
  isProductExistsInCart(cartProduct) {
    const arrayItemIndex = this.state.cart.findIndex(
      (product) => product.id === cartProduct.id
    );
    return arrayItemIndex >= 0;
  }

  /**
   * addNewProductToCart is a method which takes 2 inputs (product) and (quantity)
   * and push new product to cart array as state array data
   * @param {object} product
   * @param {number} quantity
   * @author Khaled Nasser
   */
  addNewProductToCart(product, quantity) {
    const newCartProduct = { ...product, quantity: quantity };
    this.setState((prevState) => {
      return { cart: [newCartProduct, ...prevState.cart] };
    });
  }

  /**
   * updateExistedProductInCart is a method which takes 2 inputs (product) and (quantity)
   * and update specific object in cart array
   * @param {object} product
   * @param {number} quantity
   * @author Khaled Nasser
   */
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

  /**
   * removeProductFromCart is a method which takes 1 input (product)
   * and remove the product from the cart array
   * @param {object} product
   * @author Khaled Nasser
   */
  removeProductFromCart(product) {
    const updatedProductIndex = this.state.cart.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    const updatedCart = [...this.state.cart];

    if (this.isLastItemInCart(updatedCart[updatedProductIndex])) {
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

  /**
   * isLastItemInCart is a method which takes 1 input (product)
   * and check if this product is the last one of its type or not
   * @param {object} product
   * @returns boolean
   * @author Khaled Nasser
   */
  isLastItemInCart(product) {
    return product.quantity === 1;
  }

  render() {
    return (
      <Fragment>
        {/** Scroll To Top For Every URL Change */}
        <ScrollToTop />

        {this.state.snackbarStatus && (
          <Snackbar
            status={this.state.snackbarStatus}
            type="success"
            message="Product Added Successfully"
          />
        )}
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
