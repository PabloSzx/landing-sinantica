import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResponsiveContainer, ScrollToTop } from "../components";
import { Landing, News, AboutUs, ArticleExample, Investigation } from "./";

const RouteContainer = posed.div({
  enter: { filter: "blur(0px)", delay: 50, beforeChildren: true },
  exit: { filter: "blur(10px)" },
});

class Who extends Component {
  render() {
    return <div>xd</div>;
  }
}

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
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Switch location={location}>
            <ResponsiveContainer>
              <ScrollToTop>
                <Route exact path="/" component={Landing} />
                <Route exact path="/quienes_somos" component={AboutUs} />
                <Route exact path="/noticias/:id" component={ArticleExample} />
                <Route exact path="/noticias" component={News} />
                <Route exact path="/contacto" component={Who} />
                <Route exact path="/investigacion" component={Investigation} />
              </ScrollToTop>
            </ResponsiveContainer>
          </Switch>
        </RouteContainer>
      </PoseGroup>
    );
  }
}

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
