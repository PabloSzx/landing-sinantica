import React, { Component } from "react";
import {
  Container,
  Header,
  Segment,
  Grid,
  List,
  Icon
} from "semantic-ui-react";
import logo_big from "../dist/images/logo_sinantica_bulge_blur.png";

class Footer extends Component {
  render() {
    return (
      <Segment vertical style={{ padding: "5em 0em" }} id="contacto">
        <Container>
          <Grid divided stackable centered>
            <Grid.Row>
              <Grid.Column width={4}>
                <img src={logo_big} alt="logo big" />
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as="h4" className="title-font" content="Contacto" />
                <List link>
                  <List.Item as="a">General Lagos 2086 Ed. 3000</List.Item>
                  <List.Item as="a">Tel: 800600310</List.Item>
                  <List.Item as="a">Mail: correo@sinactica.cl</List.Item>
                  <List.Item as="a">Valdivia, Chile</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header
                  as="h4"
                  className="title-font"
                  content="Redes Sociales"
                />
                <List link>
                  <List.Item as="a">
                    <Icon name="facebook" />
                    Facebook
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="instagram" />
                    Instagram
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="twitter" />
                    Twitter
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
