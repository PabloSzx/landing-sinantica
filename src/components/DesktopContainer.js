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
        active: this.props.location.pathname.slice(1),
      };
    }

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
      const { children } = this.props;
      const { fixed, active } = this.state;

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
              <Menu.Item
                header
                as={Link}
                to="/"
                active={active === ""}
                onClick={() => this.setState({ active: "" })}
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
);
