import React from "react";
import { ReactComponent as HeaderLogo } from "../../../images/logo-main-black.svg";
import { ReactComponent as FooterLogo } from "../../../images/logo-main-yellow.svg";

class MainLogo extends React.Component {
  render() {
    return (
      <div>
        {this.props.type === "main" ? (
          <HeaderLogo className="fix-logo-header logo-mob" />
        ) : (
          <FooterLogo className="fix-logo-footer logo-mob" />
        )}
      </div>
    );
  }
}

export default MainLogo;
