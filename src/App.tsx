import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import foodLogo from "./FoodWaka Logo Side Light Font Asset  -inkscape 1.png";

import useImportScript from "./utils/useImportScript";
import axios from "axios";
import { BASE_URL } from "constants/urls";
import Routes from "components/routes/Routes";

//alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// optional configuration
const alertOptions = {
  // you can also just use 'bottom right'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 1000,
  },
};

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Routes />
    </AlertProvider>
  );
};

export default App;
