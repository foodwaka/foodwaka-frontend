import React from "react";
import AuthLayout from "components/shared/AuthLayout/AuthLayout";
import LogoPrimary from "logo_primary.svg";

import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout>
      <div className="d-flex justify-content-center title mb-5">
        <h4>Sign in to your existing account</h4>
      </div>
      <form className="row">
        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label"> Email address or phone number</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </div>
            <input type="text" className="form-control" id="login-email" placeholder="Type your email or phone number" />
          </div>
        </div>

        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label">Password</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
            </div>
            <input type="password" className="form-control" id="login-email" placeholder="Type your password" />
          </div>
        </div>
        <div className="col-md-7 col-sm-10  mx-auto">
          <button type="submit" className="btn btn-primary-light ">
            CONTINUE
          </button>
          <div className="mt-3">
            <Link to="#">Forgot Password?</Link>
          </div>
        </div>
      </form>

      <div className="d-flex justify-content-center mt-5">
        <div className="centered-texts">
          <p className="py-1">
            New User?<Link to="#"> Create Account</Link>
          </p>
          <p className="py-1">
            Want to become a seller?<Link to="#"> FoodWaka Seller</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
