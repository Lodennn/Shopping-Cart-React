import React from "react";
import { ReactComponent as LogoLarge } from "../../../images/logo-addidas.svg";
import { ReactComponent as LogoSmall } from "../../../images/logo-category-small.svg";

class Logo extends React.Component {
  render() {
    return (
      <div>{this.props.type === "main" ? <LogoLarge /> : <LogoSmall />}</div>
    );
  }
}

export default Logo;
