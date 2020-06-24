import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import foodLogo from "./FoodWaka Logo Side Light Font Asset  -inkscape 1.png";

import useImportScript from "./utils/useImportScript";
import axios from "axios";
import { BASE_URL } from "constants/urls";
import Routes from "components/routes/Routes";

const App = () => {
  return <Routes />;
};

export default App;
