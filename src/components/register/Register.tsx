import React from "react";
import AuthLayout from "components/shared/AuthLayout/AuthLayout";
import LogoPrimary from "logo_primary.svg";

const Register = () => {
  return (
    <AuthLayout>
      <div className="d-flex justify-content-center title mb-5">
        <h4>Let’s get your new account ready</h4>
      </div>
      <form className="row pb-3">
        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label"> Email address or phone number</label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control"
              id="login-email"
              placeholder="Type your email or phone number"
            />
          </div>
        </div>

        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label">Full name</label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="First Last"
            />
          </div>
        </div>
        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label">Phone number</label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="phone"
              className="form-control"
              id="phonenumber"
              placeholder="Type your phone number here"
            />
          </div>
        </div>
        <div className="col-md-7 col-sm-10  mx-auto">
          <button type="submit" className="btn btn-primary-light ">
            CONTINUE
          </button>

          <p className="pt-3 info-light">
            A verification code will be sent to your phone
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
