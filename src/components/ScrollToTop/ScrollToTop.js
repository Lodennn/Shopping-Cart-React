import React from "react";
import { withRouter } from "react-router";

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unlisten: null,
    };
  }
  componentDidMount() {
    this.setState({
      unlisten: this.props.history.listen(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }),
    });
  }
  componentWillUnmount() {
    this.state.unlisten();
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
