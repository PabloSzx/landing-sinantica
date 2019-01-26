import React, { Component } from "react";
import posed from "react-pose";
import { Icon, Button } from "semantic-ui-react";
import styled from "styled-components";

const posedButton = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

const BoxButton = styled(posedButton)`
  position: fixed;
  bottom: 0;
  right: 0rem;
  width: 15vw;
  z-index: 5;
  @media (max-width: 800px) {
    position: absolute;
    right: 8em;
  }
`;
class ButtonTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this._ismounted = true;
    window.addEventListener("scroll", () => this.handleScroll());
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  handleScroll(event) {
    if (this._ismounted)
      if (this.state.visible && window.scrollY === 0) {
        this.setState({ visible: false });
      } else if (!this.state.visible && window.scrollY > 0) {
        this.setState({ visible: true });
      }
  }

  render() {
    const { visible } = this.state;
    return (
      <BoxButton pose={visible ? "visible" : "hidden"}>
        <Button
          size="large"
          icon
          labelPosition="left"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Icon name="arrow circle up" />
          SUBIR
        </Button>
      </BoxButton>
    );
  }
}

export default ButtonTop;
