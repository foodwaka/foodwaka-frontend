import React from "react";
import LogoPrimary from "logo_primary.svg";

import "./authLayout.css";

const AuthLayout = (props) => {
  return (
    <>
      <main className="container-fluid auth-container">
        <header className="my-5">
          <div className="d-flex justify-content-center mb-5">
            <img src={LogoPrimary} width="68px" alt="logo" />
            <h1 className="ml-3">FoodWaka</h1>
          </div>
          {props.children}
        </header>
      </main>
      <footer className="auth-footer d-flex justify-content-between py-3 px-5">
        <span>© 2020 Davak Consult</span>
        <span>Terms of use</span>
      </footer>
    </>
  );
};

export default AuthLayout;
