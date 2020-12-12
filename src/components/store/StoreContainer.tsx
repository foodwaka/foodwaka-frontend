import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import StoreBG from "./store-bg.png";

const sectionNames = ["Recomended", "Category 1", "Category 2"];

const useStyles = makeStyles({
  navLink: {
    color: "#4c4c4c",
  },

  jumbotronContainer: {
    position: "relative",
    zIndex: 2,
    background: "rgba(0,0,0,0.3)",
  },
});

const Store = () => {
  return (
    <>
      <Header />
      <StoreHeader />
      <main className="home-container container-fluid pt-3">
        {sectionNames.map((sectionName, index) => {
          return <HomeSections sectionName={sectionName} position={index} />;
        })}
      </main>
      <Footer />
    </>
  );
};

const HomeSections = ({
  sectionName,
  position,
}: {
  sectionName: string;
  position: Number;
}) => {
  return (
    <>
      <section className="home-products container ">
        <div className="d-flex justify-content-between pt-3 mb-3">
          <div className="">
            <h4>{sectionName}</h4>
          </div>{" "}
          <div className="row">
            {position === 0 && (
              <>
                {" "}
                {/* <div className="col-4">
                  <Link to="#">
                    <span className="">See more</span>
                  </Link>
                </div> */}
                <div className="col-8 d-none d-md-block">
                  <div className="row">
                    {" "}
                    <Link className="col-6" to="#">
                      <div className="btn btn-round">
                        <i className="fa fa-arrow-left"></i>
                      </div>
                    </Link>
                    <Link className="col-6" to="#">
                      <div className="btn btn-round">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="row">
          {[...Array(4)].map(() => {
            return (
              <div className="col-md-3 mb-5">
                <img
                  src="https://via.placeholder.com/360x240"
                  alt="productImage"
                  width="100%"
                />
                <div className="d-flex justify-content-between mt-3">
                  <h5>Item name</h5>{" "}
                </div>
                <div className="d-flex justify-content-between store-details">
                  <span>NGN 200</span>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const StoreHeader = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${StoreBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`text-white rgba-stylish-strong ${classes.jumbotronContainer}`}
        >
          <div className="d-flex justify-content-end mr-5 pt-5">
            <span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart(0)
            </span>
          </div>
          <div className="ml-5 py-5">
            <h2 className=" h2 my-4 py-2">Store Name</h2>
            <div className="mt-3">
              <span className="store-status">
                <i className="fa fa-circle"></i> Open
              </span>
              <span className="store-status ml-1">
                <i className="fa fa-circle"></i>8AM-6PM, Mon-Fri
              </span>
            </div>
            <div className="store-details">
              <span className="store-status">
                <i className="fa fa-circle"></i> NGN 200 Delivery fee{" "}
              </span>
              <span className="store-status ml-1">
                {" "}
                <i className="fa fa-circle"></i> 30 - 35 min Delivery time{" "}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="row mt-3">
                <div className="col-3 mx-3">
                  <a href="#" className="py-1 px-3 badge badge-light">
                    Tag 1
                  </a>
                </div>
                <div className="col-3 mx-3">
                  <a href="#" className="py-1 px-3 badge badge-light">
                    Tag 2
                  </a>
                </div>
              </div>

              <div className="row mr-5">
                <div className="col-12 d-flex justify-content-end">
                  View Location
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <span className="store-location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    Ikeja, Lagos
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
