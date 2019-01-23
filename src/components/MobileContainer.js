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
import { HomepageHeading } from "./";
import { getWidth } from "../utils";

export default class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{
            marginBottom: 0
          }}
        >
          <Menu.Item as="a" active>
            Inicio
          </Menu.Item>
          <Menu.Item as="a">Quienes Somos</Menu.Item>
          <Menu.Item as="a">Investigación</Menu.Item>
          <Menu.Item as="a">Noticias</Menu.Item>
          <Menu.Item as="a">Contacto</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign="center"
            vertical
            style={{
              margin: 0,
              padding: "0.1em"
            }}
          >
            <Container>
              <Menu pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}
