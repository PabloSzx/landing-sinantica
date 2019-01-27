import React from "react";
import posed, { PoseGroup } from "react-pose";
import { Switch, Route, withRouter } from "react-router-dom";
import { ResponsiveContainer, ScrollToTop } from "../components";
import { Landing, News, AboutUs, ArticleExample, Investigation } from "./";

const RouteContainer = posed.div({
  enter: { filter: "blur(0px)", delay: 50, beforeChildren: true },
  exit: { filter: "blur(3px)" },
});

class App extends Route {
  render() {
    const { location } = this.props;
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

export default withRouter(App);
