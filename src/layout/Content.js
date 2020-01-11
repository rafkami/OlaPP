import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SimpleReactLightbox from "simple-react-lightbox";
import Home from "../pages/Home";
import About from "../pages/About";
import Offer from "../pages/Offer";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <SimpleReactLightbox>
      <Route
        render={({ location }) => (
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/offer" exact component={Offer} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/blog/post:postNo" exact component={BlogPost} />
                <Route path="/contact" exact component={Contact} />
                <Route component={ErrorPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </SimpleReactLightbox>
  );
};

export default Page;
