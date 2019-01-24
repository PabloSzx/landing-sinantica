import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { getWidth } from "../utils";

export default withRouter(
  class MobileContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        active: this.props.location.pathname.slice(1),
        sidebarOpened: false,
      };
    }

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
      const { children } = this.props;
      const { sidebarOpened, active } = this.state;

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
              marginBottom: 0,
            }}
          >
            <Menu.Item
              as={Link}
              to="/"
              active={active === ""}
              onClick={() =>
                this.setState({ active: "", sidebarOpened: false })
              }
            >
              Inicio
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/quienes_somos"
              active={active === "quienes_somos"}
              onClick={() =>
                this.setState({ active: "quienes_somos", sidebarOpened: false })
              }
            >
              Quienes Somos
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/investigacion"
              active={active === "investigacion"}
              onClick={() =>
                this.setState({ active: "investigacion", sidebarOpened: false })
              }
            >
              Investigación
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/noticias"
              active={active === "noticias"}
              onClick={() =>
                this.setState({ active: "noticias", sidebarOpened: false })
              }
            >
              Noticias
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/contacto"
              active={active === "contacto"}
              onClick={() =>
                this.setState({ active: "contacto", sidebarOpened: false })
              }
            >
              Contacto
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              textAlign="center"
              vertical
              style={{
                margin: 0,
                padding: "0.1em",
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
);
