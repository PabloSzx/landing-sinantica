import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
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
      <div
        style={{
          height: "100vh",
          position: "relative",
          top: "0px",
          marginTop: 0
        }}
      >
        <Img
          src={sample}
          initialPose={initialPose}
          pose={pose}
          onPoseComplete={() =>
            this.setState({ initialPose: pose, pose: initialPose })
          }
          style={{
            zIndex: "-1",
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100vh",
            marginTop: 0
          }}
        />
        <Header
          as="h1"
          content="Sinantica"
          style={{
            position: "relative",
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: 0,
            paddingTop: "4em"
          }}
        />

        <Header
          as="h2"
          content="Somos Sinántica. Hacemos cosas sorprendentes."
          style={{
            position: "relative",
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "1.5em"
          }}
        />
      </div>
    );
  }
}

export default HomepageHeading;
