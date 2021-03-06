import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "@layouts/App";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.querySelector("#app"));
