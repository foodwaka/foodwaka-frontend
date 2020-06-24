import React from "react";
import "./footer.css";
import PhoneImage from "./phone.svg";
import LogoPrimary from "logo_primary.svg";
import PlayStoreIcon from "./playstoreIcon.svg";

const Footer = () => {
  return (
    <>
      <FooterPrimary />
      <div className="container-fluid footer-secondary pt-5 px-5">
        <div className="row pt-5">
          <div className="col-md-3">
            <a href="#" className="navbar-brand">
              <img
                src={LogoPrimary}
                width="45"
                alt=""
                className="d-inline-block align-middle mr-2"
              />
              <span className="font-weight-bold ">FoodWaka</span>
            </a>
          </div>
          <div className="col-md-4">
            <ul>
              <li>About FoodWaka</li>
              <li>Sign in</li>
              <li>Become a seller</li>
              <li>Nutrition and diet tips</li>
            </ul>
          </div>
          <div className="col-md-5">
            <ul>
              <li>Get help</li>
              <li>View all cities</li>
              <li>Read FAQs</li>
            </ul>
          </div>
        </div>
        <div className="row py-5 mt-5">
          <div className="col-md-3">
            <a href="https://www.facebook.com/foodwaka">
              <i className="fa fa-facebook m-3" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/_foodwaka/">
              <i className="fa fa-instagram m-3" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/_foodwaka">
              <i className="fa fa-twitter m-3" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col-md-9">
            <ul className="footer-nav">
              <li>
                <a href="#">Private Policy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">2020 Davak Consult</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const FooterPrimary = () => {
  return (
    <>
      <div className="container-fluid footer-primary">
        <div className="row">
          <div className="col-md-6 col-sm-12 pt-5 mx-auto">
            <img src={PhoneImage} alt="download app" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h2 className="mt-5 pt-5">FoodWaka Mobile App</h2>
            <p>
              Download FoodWaka Mobile app from Google Play Store to purchase
              your favorite food conveniently from your smartphone.
            </p>
            <h5>
              <img src={PlayStoreIcon} alt="download app" /> Download Mobile App
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
