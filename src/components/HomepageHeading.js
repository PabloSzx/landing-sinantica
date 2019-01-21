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
import sample from "../dist/images/google.png";
import posed from "react-pose";

const Img = posed.img({
  nada: {
    filter: "blur(0px)",
    transition: {
      duration: 2500
    }
  },
  harto: {
    filter: "blur(10px)",
    transition: {
      duration: 2500
    }
  }
});
class HomepageHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPose: "nada",
      pose: "harto"
    };
  }

  render() {
    const { initialPose, pose } = this.state;
    return (
      <Container text>
        <Header
          as="h1"
          content="Sinantica"
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em"
          }}
        />
        <Img
          src={sample}
          initialPose={initialPose}
          pose={pose}
          onPoseComplete={() =>
            this.setState({ initialPose: pose, pose: initialPose })
          }
        />
        <Header
          as="h2"
          content="Somos Sinántica. Hacemos cosas sorprendentes."
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "1.5em"
          }}
        />
      </Container>
    );
  }
}

export default HomepageHeading;
