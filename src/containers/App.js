import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResponsiveContainer } from "../components";
import { Landing, News, AboutUs } from "./";
import { Container, Label, Icon } from "semantic-ui-react";
class Who extends Component {
  render() {
    return <div>xd</div>;
  }
}
class Inv extends Component {
  render() {
    return (
      <Container>
        <Label>
          <Icon name="mail" /> 23
        </Label>
      </Container>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ResponsiveContainer>
            <Route exact path="/" component={Landing} />
            <Route exact path="/quienes_somos" component={AboutUs} />
            <Route exact path="/investigacion" component={Inv} />
            <Route exact path="/noticias" component={News} />
            <Route exact path="/contacto" component={Who} />
          </ResponsiveContainer>
        </Switch>
      </BrowserRouter>
    );
  }
}
