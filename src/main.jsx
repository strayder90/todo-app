import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
