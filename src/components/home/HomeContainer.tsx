import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import "./home.scss";
import WelcomeBg from "welcome_bg.png";

const sectionNames = ["Popular picks in Lagos", "New on FoodWaka"];

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

const HomeContainer = () => {
  return (
    <>
      <Header />
      <HeaderJumbo />
      <main className="home-container container-fluid pt-3">
        {sectionNames.map((sectionName) => {
          return <HomeSections sectionName={sectionName} />;
        })}
      </main>
      <Footer />
    </>
  );
};

const HomeSections = ({ sectionName }: { sectionName: string }) => {
  return (
    <>
      <section className="home-products container pb-5">
        <div className="d-flex justify-content-between pt-3 mb-3">
          <div className="">
            <h4>{sectionName}</h4>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to="#">
                <span className="">See more</span>
              </Link>
            </div>

            <div className="col-8 d-none d-md-block">
              <Link to="#">
                <div className="btn btn-round">
                  <i className="fa fa-arrow-left"></i>
                </div>
              </Link>
              <Link to="#">
                <div className="btn btn-round">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {[...Array(3)].map(() => {
            return (
              <div className="col-md-4 mb-5">
                <img
                  src="https://via.placeholder.com/360x240"
                  alt="productImage"
                  width="100%"
                />
                <div className="d-flex justify-content-between mt-3">
                  <h5>Store name</h5>{" "}
                  <span className="store-rating">
                    <i className="fa fa-star"></i> 4.0
                  </span>{" "}
                  <span className="store-status">
                    <i className="fa fa-circle"></i> Open
                  </span>
                </div>
                <div className="d-flex justify-content-between store-details">
                  <span>NGN 200 Delivery fee</span>{" "}
                  <span>8AM-6PM, Mon-Fri</span>{" "}
                </div>
                <div className="d-flex justify-content-between store-details">
                  <span>30 - 35 min Delivery time </span>
                  <span className="store-location">
                    {" "}
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    Ikeja, Lagos
                  </span>{" "}
                </div>
                <div className="row mt-3">
                  <div className="col-3">
                    <a href="#" className="py-1 px-3 badge badge-light">
                      Tag 1
                    </a>
                  </div>
                  <div className="col-3">
                    <a href="#" className="py-1 px-3 badge badge-light">
                      Tag 2
                    </a>
                  </div>
                  <div className="col-3">
                    <a href="#" className="py-1 px-3 badge badge-light">
                      Tag 3
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
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
              <div className="input-group mb-3 col-md-8 col-12 mx-auto">
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

export default HomeContainer;
