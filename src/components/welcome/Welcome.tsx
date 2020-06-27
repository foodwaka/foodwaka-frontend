import React, { useState, useEffect } from "react";
import useImportScript from "utils/useImportScript";
import { BASE_URL } from "constants/urls";
import Axios from "axios";
import LogoWhite from "logo_white.svg";
import foodLogo from "combination_logo.png";
import {
  requestReset,
  RequestState,
  requestSending,
  requestSuccess,
  requestError,
} from "actions/requestStates";

//alert
import { useAlert } from "react-alert";

const Welcome = () => {
  useImportScript("./assets/js/countDownTimer.js");

  //alert
  const alert = useAlert();

  const intialFormState: string = "";
  const [form, setForm] = useState(intialFormState);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.value);
  };

  const handleFormSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    form: string
  ) => {
    event.preventDefault();
    sendMail(form);
  };

  const [requestState, setRequestState] = useState<RequestState>(requestReset);
  const { sending, success, error, message } = requestState;

  useEffect(() => {
    success &&
      alert.show(`${message}`, {
        type: "success",
      });
    success && setForm(intialFormState);
    error &&
      alert.show(`${message}`, {
        type: "error",
      });
  }, [success, error, message, alert]);

  const sendMail = (form: string) => {
    const url: string = `${BASE_URL}/mail/sendWelcomeMail`;

    setRequestState(requestSending()); //request about to be sent

    Axios.post(url, {
      email: form,
    })
      .then(() => {
        setRequestState(requestSuccess("Email successfully submitted"));
        console.log("Mail sent");
      })
      .catch((error) => {
        setRequestState(requestError(error.message));
        console.log("Error", error.message);
      });
  };

  return (
    <>
      <main className="App">
        {/* <img src={foodLogo} width="200px" className="logo" /> */}
        <nav className="navbar navbar-expand-lg py-3 navbar-dark w-100">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img
                src={foodLogo}
                width="150px"
                className="d-none d-md-block logo"
              />
            </a>
          </div>
        </nav>

        <div className="d-md-none" style={{ fontSize: "40px" }}>
          <img height="40px" src={LogoWhite} alt="logo" /> FoodWaka
        </div>
        <div className="links-social">
          <a href="https://www.facebook.com/foodwaka">
            <i className="fa fa-facebook m-3" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/_foodwaka/">
            <i className="fa fa-instagram m-3" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/_foodwaka">
            <i className="fa fa-twitter m-3" aria-hidden="true"></i>
          </a>
        </div>

        <section className="">
          <div className="container ">
            <h1
              className="mb-2 mt-2"
              style={{ fontWeight: "bolder", fontSize: "60px" }}
            >
              Coming Soon
            </h1>

            <p className="">
              FoodWaka helps you buy food conveniently by connecting you with
              food vendors, retaurants and people who sell food-related items
              like fresh vegetable, meat, fruit, snacks, drinks and cooked food
              around you.
            </p>

            <h3>Let us notify you when FoodWaka is launching</h3>
          </div>
        </section>

        <div className="d-none d-md-block col-md-12 mb-2">
          <br />
          <div id="clockdiv">
            <div>
              <span className="days"></span>
              <div className="smalltext">Days</div>
            </div>
            <div>
              <span className="hours"></span>
              <div className="smalltext">Hours</div>
            </div>
            <div>
              <span className="minutes"></span>
              <div className="smalltext">Minutes</div>
            </div>
            <div>
              <span className="seconds"></span>
              <div className="smalltext">Seconds</div>
            </div>
          </div>
          <div></div>
        </div>

        <form className="container mt-2 mb-3">
          <div className="row">
            <div className=" mx-auto col-md-9">
              <input
                type="email"
                className="form-control "
                id="email"
                aria-describedby="emailHelp"
                placeholder="Your email address"
                name="email"
                value={form}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-lg-5 col-md-8 mx-auto mt-4">
              <button
                onClick={(event) => handleFormSubmit(event, form)}
                type="submit"
                className="btn btn-lg btn-block btn-custom-primary"
              >
                SUBMIT{" "}
                {sending && <i className="fa fa-circle-o-notch fa-spin"></i>}
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Welcome;
