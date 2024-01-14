import ReactDOM from "react-dom/client";

import "antd/dist/reset.css";
import "./index.css";
import "./style.css";

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
