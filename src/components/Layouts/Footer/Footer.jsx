import React from "react";
import MainLogo from "../../UI/Logo/MainLogo";
import classes from "./Footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={`${classes["footer__wrapper"]} container`}>
          <div className={classes["footer__text"]}>
            <MainLogo type="sub" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <br />
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
              <br />m nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
