import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Layouts/Navigation/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import SingleProductPage from "./pages/SingleProductPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    console.log("App.js - componentDidMount");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    this.setState({ data: data, isLoading: false });
  }

  render() {
    console.log("App.js - render");
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {!this.state.isLoading && (
              <Redirect to={`/products/${this.state.data[0].id}`} />
            )}
          </Route>
          <Route path="/products/:productId">
            <SingleProductPage products={this.state.data} />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
