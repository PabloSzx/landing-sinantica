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
import { Link } from "react-router-dom";
import { HomepageHeading, SampleImage } from "./";
import { getWidth } from "../utils";
import logo_small from "../dist/images/logo-small.png";

export default class DesktopContainer extends Component {
  state = {
    active: "inicio"
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed, active } = this.state;

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
              <img src={logo_small} size="mini" />
            </Menu.Item>
            <Menu.Item
              header
              as={Link}
              to="/"
              active={active === "inicio"}
              onClick={() => this.setState({ active: "inicio" })}
            >
              Inicio
            </Menu.Item>
            <Menu.Item
              header
              as={Link}
              to="/quienes_somos"
              active={active === "quienes_somos"}
              onClick={() => this.setState({ active: "quienes_somos" })}
            >
              Quienes Somos
            </Menu.Item>

            <Menu.Item
              header
              as={Link}
              to="/investigacion"
              active={active === "investigacion"}
              onClick={() => this.setState({ active: "investigacion" })}
            >
              Investigación
            </Menu.Item>
            <Menu.Item
              header
              as={Link}
              to="/noticias"
              active={active === "noticias"}
              onClick={() => this.setState({ active: "noticias" })}
            >
              Noticias
            </Menu.Item>
            <Menu.Item
              header
              as={Link}
              to="/contacto"
              active={active === "contacto"}
              onClick={() => this.setState({ active: "contacto" })}
            >
              Contacto
            </Menu.Item>
            <Menu.Item position="right" />
          </Container>
        </Menu>
        {children}
      </Responsive>
    );
  }
}
