import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference

ReactDOM.render(<App />, document.getElementById("root"));
