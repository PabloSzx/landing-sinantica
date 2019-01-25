import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResponsiveContainer, ScrollToTop } from "../components";
import { Landing, News, AboutUs, Investigation, ArticleExample } from "./";

class Who extends Component {
  render() {
    return <div>xd</div>;
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ResponsiveContainer>
            <ScrollToTop>
              <Route exact path="/" component={Landing} />
              <Route exact path="/quienes_somos" component={AboutUs} />
              <Route exact path="/investigacion" component={ArticleExample} />
              <Route exact path="/noticias" component={News} />
              <Route exact path="/contacto" component={Who} />
            </ScrollToTop>
          </ResponsiveContainer>
        </Switch>
      </BrowserRouter>
    );
  }
}
