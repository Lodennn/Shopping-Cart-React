import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../../UI/Subscribe/Subscribe";
import MainLogo from "../../UI/Logo/MainLogo";
import classes from "./Footer.module.scss";
import { ReactComponent as Linkedicon } from "../../../images/icon-linkedin.svg";
import facebookIcon from "../../../images/FIX_IMAGES/facebook-img.png";
import twitterIcon from "../../../images/FIX_IMAGES/twitter-img.png";
import instagramIcon from "../../../images/FIX_IMAGES/instagram-img.png";
import SubFooter from "./SubFooter/SubFooter";

class Footer extends React.Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={`${classes["footer__wrapper"]} container`}>
          <div className={classes["footer__info"]}>
            <MainLogo type="sub" />
            <p className={`${classes["footer__info--text"]}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p className="mt-sm">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>
            <p className="mt-sm">
              m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis
            </p>
          </div>
          {/** FOOTER LINKS */}
          <div className={classes["footer__links"]}>
            {/** FOOTER SUBSCRIBE */}
            <Subscribe />
            <div className={classes["footer__links--wrapper"]}>
              {/** FOOTER SITEMAP */}
              <ul className={classes["footer__links-sitemap"]}>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">About Us</Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">Contact Us</Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">Track Order</Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">Terms &amps; Conditions</Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">Sell With Us</Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/">Shipping And Returns</Link>
                </li>
              </ul>
              {/** FOOTER SOCIALS */}
              <ul className={classes["footer__links-socials"]}>
                <li className={classes["footer__links-link"]}>
                  <Link to="/" className="flex-y-container">
                    <span className={classes["footer__links-socials--icon"]}>
                      <img
                        src={facebookIcon}
                        alt="facebook"
                        className="img-fluid"
                      />
                    </span>
                    <span className={classes["footer__links-socials--text"]}>
                      /YESHTERY
                    </span>
                  </Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/" className="flex-y-container">
                    <span className={classes["footer__links-socials--icon"]}>
                      <Linkedicon />
                    </span>
                    <span className={classes["footer__links-socials--text"]}>
                      /YESHTERY
                    </span>
                  </Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/" className="flex-y-container">
                    <span className={classes["footer__links-socials--icon"]}>
                      <img
                        src={instagramIcon}
                        alt="facebook"
                        className="img-fluid"
                      />
                    </span>
                    <span className={classes["footer__links-socials--text"]}>
                      /YESHTERY
                    </span>
                  </Link>
                </li>
                <li className={classes["footer__links-link"]}>
                  <Link to="/" className="flex-y-container">
                    <span className={classes["footer__links-socials--icon"]}>
                      <img
                        src={twitterIcon}
                        alt="facebook"
                        className="img-fluid"
                      />
                    </span>
                    <span className={classes["footer__links-socials--text"]}>
                      /YESHTERY
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="separator separator--dark mt-md" />
          <SubFooter />
        </div>
      </div>
    );
  }
}

export default Footer;
