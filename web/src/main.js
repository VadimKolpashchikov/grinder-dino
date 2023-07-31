import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import "./styles/style.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import App from "./App.js";
import "./js/smoothScroll.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
