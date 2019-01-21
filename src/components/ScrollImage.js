import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import { SampleImage } from "./";
export default class ScrollImage extends Component {
  render() {
    return (
      <Grid centered style={{ height: "50vh" }}>
        <SampleImage size="large" style={{ width: "100vw" }} />
      </Grid>
    );
  }
}
