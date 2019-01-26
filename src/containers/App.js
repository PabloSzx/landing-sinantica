import React from "react";
import posed, { PoseGroup } from "react-pose";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResponsiveContainer, ScrollToTop } from "../components";
import { Landing, News, AboutUs, ArticleExample, Investigation } from "./";

const RouteContainer = posed.div({
  enter: { filter: "blur(0px)", delay: 50, beforeChildren: true },
  exit: { filter: "blur(3px)" },
});

class App extends Route {
  render() {
    const {
      context: {
        router: {
          route: { location },
        },
      },
    } = this;
    return (
      <ResponsiveContainer>
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <ScrollToTop>
                <Route exact path="/" component={Landing} key="landing" />
                <Route
                  exact
                  path="/quienes_somos"
                  component={AboutUs}
                  key="aboutus"
                />
                <Route
                  exact
                  path="/noticias/:id"
                  component={ArticleExample}
                  key="article"
                />
                <Route exact path="/noticias" component={News} key="noticias" />

                <Route
                  exact
                  path="/investigacion"
                  component={Investigation}
                  key="investigacion"
                />
              </ScrollToTop>
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </ResponsiveContainer>
    );
  }
}

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
