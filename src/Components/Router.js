import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Home";
import Header from "./Header";
import Detail from "../Detail";
import Tv from "../Tv";

const Rotue = () => {
  return (
    <Router>
      <>
        <div className="uk-text-center" data-uk-grid>
          <Header />
          <div className="uk-width-1-1 uk-margin-small-top  uk-padding-large uk-padding-remove-top">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tv" exact component={Tv} />
              <Route path="/movie/:id" component={Detail} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </>
    </Router>
  );
};

export default Rotue;
