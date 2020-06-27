import React from "react";
import AuthLayout from "components/shared/AuthLayout/AuthLayout";
import LogoPrimary from "logo_primary.svg";
import { Link } from "react-router-dom";

const VerifyPhone = () => {
  return (
    <AuthLayout>
      <div className="d-flex justify-content-center title mb-5">
        <h4>Verify your phone number</h4>
      </div>
      <form className="row pb-3">
        <div className="form-group col-md-7 col-sm-10  mx-auto">
          <label className="form-label"> Enter verification code</label>
          <div className="input-group mb-2 mr-sm-2">
            <input
              type="text"
              className="form-control"
              id="login-email"
              placeholder="Verification code"
            />
          </div>
        </div>
        <div className="form-group col-md-7 col-sm-10 mx-auto">
          <p className="info-dark">Didn’t receive a code?</p>
          <p>
            <Link to="#">Resend code after 3:29 mins</Link>
          </p>

          <p className="centered-texts">
            <Link to="#">Change Phone number</Link>
          </p>
        </div>
        <div className="col-md-7 col-sm-10  mx-auto">
          <button type="submit" className="btn btn-primary-light ">
            VERIFY PHONE NUMBER
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default VerifyPhone;
