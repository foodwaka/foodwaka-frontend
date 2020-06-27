import React from "react";
import AuthLayout from "components/shared/AuthLayout/AuthLayout";

const SetPassword = () => {
  return (
    <AuthLayout>
      <div className="d-flex justify-content-center title mb-5">
        <h4>Set a password for your account</h4>
      </div>
      <form className="row pb-3">
        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label">Set a Password </label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control"
              id="login-email"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label">Confirm password</label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="col-md-7 col-sm-10  mx-auto">
          <button type="submit" className="btn btn-primary-light ">
            CONTINUE
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SetPassword;
