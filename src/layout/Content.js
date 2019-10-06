import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../pages/Home";
import About from "../pages/About";
import Offer from "../pages/Offer";
import SingleOffer from "../pages/SingleOffer";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={1000} classNames="fade">
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/offer" exact component={Offer} />
              <Route path="/offer/:shortName" exact component={SingleOffer} />
              <Route path="/contact" exact component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Page;
