import React, { Component } from "react";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";

const BoxButton = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 15vw;
`;

class ButtonTop extends Component {
  render() {
    return (
      <BoxButton>
        <Button size="large" icon labelPosition="left">
          <Icon name="arrow circle up" />
          SUBIR
        </Button>
      </BoxButton>
    );
  }
}

export default ButtonTop;
