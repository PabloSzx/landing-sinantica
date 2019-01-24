import React, { Component, Fragment } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Tab,
  Image,
  Dropdown
} from "semantic-ui-react";
import {
  DesktopContainer,
  MobileContainer,
  HomepageHeading,
  ResponsiveContainer,
  SampleImage,
  ScrollImage
} from "../components";

import fci from "../dist/images/logo-facultad.png";
import innoving from "../dist/images/logo-innoving.jpg";
import leufulab from "../dist/images/logo-leufulab.png";
import smu from "../dist/images/smu-logo.png";
import logo_big from "../dist/images/logo-big.png";

class HomepageLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <Fragment>
        <Segment textAlign="center" style={{ padding: "0.1em 0em" }} vertical>
          <HomepageHeading />
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h3" className="title-font" style={{ fontSize: "5em" }}>
              Quienes Somos
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <Button icon labelPosition="right" floated="right">
              Ver más
              <Icon name="right arrow" />
            </Button>
          </Container>
        </Segment>
        <Segment textAlign="center" vertical>
          <ScrollImage />
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h3" className="title-font" style={{ fontSize: "5em" }}>
              Que Hacemos
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <Button icon labelPosition="right" floated="right">
              Ver más
              <Icon name="right arrow" />
            </Button>
          </Container>
        </Segment>
        <Segment vertical>
          <Grid>
            <Grid.Row centered>
              <Header as="h2" className="title-font" textAlign="center">
                <Header.Content>TRABAJAMOS CON</Header.Content>
              </Header>
            </Grid.Row>
            <Grid.Row centered columns={8}>
              <Grid.Column>
                <Image src={smu} />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Header as="h2" className="title-font" textAlign="center">
                <Header.Content>CON EL PATROCINIO</Header.Content>
              </Header>
            </Grid.Row>

            <Grid.Row centered columns={8}>
              <Grid.Column>
                <Image src={fci} />
              </Grid.Column>
              <Grid.Column>
                <Image src={innoving} />
              </Grid.Column>
              <Grid.Column>
                <Image src={leufulab} />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={
                    "https://react.semantic-ui.com/images/wireframe/image.png"
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <img src={logo_big} />
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
      </Fragment>
    );
  }
}

export default HomepageLayout;
