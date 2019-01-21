import React, { Component } from "react";
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
import { HomepageHeading, SampleImage } from "./";
import { getWidth } from "../utils";
export default class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Menu
          fixed="top"
          pointing={!fixed}
          secondary={!fixed}
          size="large"
          style={{ backgroundColor: "white" }}
        >
          <Container>
            <Menu.Item>
              <SampleImage size="mini" />
            </Menu.Item>
            <Menu.Item header as="a" active>
              Inicio
            </Menu.Item>
            <Menu.Item header as="a">
              Quienes Somos
            </Menu.Item>
            <Menu.Item header as="a">
              Investigación
            </Menu.Item>
            <Menu.Item header as="a">
              Noticias
            </Menu.Item>
            <Menu.Item header as="a">
              Contacto
            </Menu.Item>
            <Menu.Item position="right" />
          </Container>
        </Menu>

        <Segment
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <HomepageHeading />
        </Segment>

        {children}
      </Responsive>
    );
  }
}
