import React, { Component } from "react";
import { Image } from "semantic-ui-react";

import sample from "../dist/images/sample.png";

export default class Sample extends Component {
  render() {
    return (
      <Image size={this.props.size} src={sample} style={this.props.style} />
    );
  }
}
