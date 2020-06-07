import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./components/Header";
import Home from "./components/Home";
import Sorting from "./components/Sorting";
function App({ location }) {
  return (
    <TransitionGroup>
      <Header />
      <CSSTransition
        key={location.key}
        timeout={{ enter: 500, exit: 500 }}
        classNames={"fade"}
      >
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/sorting/:kategori" component={Sorting} exact></Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(App);
