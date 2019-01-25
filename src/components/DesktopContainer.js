import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Menu, Responsive } from "semantic-ui-react";
import logo_small from "../dist/images/logo-small.png";
import { getWidth } from "../utils";

export default withRouter(
  class DesktopContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        fixed: false,
        ruta: "/",
      };
    }

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.location.pathname !== this.props.location.pathname) {
        this.setState({
          ruta: this.props.location.pathname,
        });
      }
    }

    render() {
      const { children } = this.props;
      const { fixed, ruta } = this.state;
      return (
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
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
              <Menu.Item header as={Link} to={"/"} active={ruta === "/"}>
                Inicio
              </Menu.Item>
              <Menu.Item
                header
                as={Link}
                to="/quienes_somos"
                active={ruta === "/quienes_somos"}
              >
                Quienes Somos
              </Menu.Item>

              <Menu.Item
                header
                as={Link}
                to="/investigacion"
                active={ruta === "/investigacion"}
              >
                Investigación
              </Menu.Item>
              <Menu.Item
                header
                as={Link}
                to="/noticias"
                active={ruta === "/noticias"}
              >
                Noticias
              </Menu.Item>
              <Menu.Item
                header
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
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
);
