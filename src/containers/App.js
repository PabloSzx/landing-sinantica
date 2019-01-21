import React, { Component } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Landing } from "./";
import { ResponsiveContainer, DesktopContainer } from "../components";
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
          <DesktopContainer>
            <Route exact path="/" component={Landing} />
            <Route exact path="/quienes_somos" component={Who} />
            <Route exact path="/investigacion" component={Who} />
            <Route exact path="/noticias" component={Who} />
            <Route exact path="/contacto" component={Who} />
          </DesktopContainer>
        </Switch>
      </BrowserRouter>
    );
  }
}
