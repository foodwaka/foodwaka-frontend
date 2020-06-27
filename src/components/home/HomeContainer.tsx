import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import { Link } from "react-router-dom";
import "./home.scss";

const sectionNames = ["Popular picks in Lagos", "New on FoodWaka"];

const HomeContainer = () => {
  return (
    <>
      <Header />
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
          </div>{" "}
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
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeContainer;
