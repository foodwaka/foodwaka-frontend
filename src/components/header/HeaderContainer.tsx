import React from "react";
import LogoPrimary from "logo_primary.svg";
import WelcomeBg from "welcome_bg.png";
import SignInLogo from "./SignInLogo.svg";

import { makeStyles } from "@material-ui/core/styles";
import "./header.css";

const useStyles = makeStyles({
  navLink: {
    color: "#4c4c4c",
  },

  jumbotronContainer: {
    position: "relative",
    zIndex: 2,
    background: "rgba(0,0,0,0.3)",
    padding: "2rem",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "3px",
  },
});

const HeaderContainer = () => {
  const classes = useStyles();
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
      <HeaderJumbo />
    </>
  );
};

const HeaderJumbo = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${WelcomeBg})`,
        }}
      >
        <div
          className={`text-white text-center rgba-stylish-strong py-5 px-4 ${classes.jumbotronContainer}`}
        >
          <div className="py-5">
            <h2 className="card-title h2 my-4 py-2">
              We bring the food you love to you
            </h2>
            <p className="mb-4 pb-2 px-md-5 mx-md-5">
              We’ll fetch the food you love from restaurants and stores nearby
            </p>

            <form className="row">
              <div className="input-group mb-3 col-8 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your delivery address"
                  aria-label="Search"
                  aria-describedby="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-custom-primary" type="button">
                    Find Food
                  </button>
                </div>
              </div>
            </form>
            <h5>OR</h5>
            <a className="btn peach-gradient">
              <i className="fa fa-map-marker" aria-hidden="true"></i> Use my
              current location
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContainer;
