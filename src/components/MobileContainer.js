import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
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
        sidebarOpened: false,
        ruta: "/",
      };
    }

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.location.pathname !== this.props.location.pathname) {
        this.setState({
          ruta: this.props.location.pathname,
        });
      }
    }

    render() {
      const { children } = this.props;
      const { sidebarOpened, ruta } = this.state;

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
              as={NavLink}
              to={"/"}
              smooth
              active={ruta === "/"}
              onClick={() => this.setState({ sidebarOpened: false })}
            >
              Inicio
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/quienes_somos"
              active={ruta === "/quienes_somos"}
              onClick={() => this.setState({ sidebarOpened: false })}
            >
              Quienes Somos
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/investigacion"
              active={ruta === "/investigacion"}
              onClick={() => this.setState({ sidebarOpened: false })}
            >
              Investigación
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/noticias"
              active={ruta === "/noticias"}
              onClick={() => this.setState({ sidebarOpened: false })}
            >
              Noticias
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to={`${ruta}#contacto`}
              smooth
              onClick={() => this.setState({ sidebarOpened: false })}
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
