import React from "react";
import LogoPrimary from "logo_primary.svg";

import SignInLogo from "./SignInLogo.svg";

import "./header.css";

const HeaderContainer = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 navbar-dark  shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img
              src={LogoPrimary}
              width="45"
              alt=""
              className="d-inline-block align-middle mr-2"
            />

            <span className="font-weight-bold text-dark">FoodWaka</span>
          </a>

          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item active`}>
                <a href="#" className="nav-link">
                  <img src={SignInLogo} alt="signIn" />
                  Sign in <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  Become a seller
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Mobile app
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link`}>
                  Nutrition & diet tips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderContainer;
