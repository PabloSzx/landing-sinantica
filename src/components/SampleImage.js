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

import sample from "../dist/images/sample.png";

export default class Sample extends Component {
  render() {
    return <Image size={this.props.size} src={sample} />;
  }
}
