import React, { Component } from "react";

import posed from "react-pose";
import { Header } from "semantic-ui-react";
import video from "../dist/videos/video-1548441554.mp4";
//import sample from "../dist/images/google.png";
const Img = posed.img({
  nada: {
    filter: "blur(0px)",
    transition: {
      duration: 350,
    },
  },
  harto: {
    filter: "blur(3px)",
    transition: {
      duration: 1500,
    },
  },
});

const VIDEO = posed.video({
  nada: {
    filter: "blur(0px)",
    transition: {
      duration: 350,
    },
  },
  harto: {
    filter: "blur(3px)",
    transition: {
      duration: 1500,
    },
  },
});
class HomepageHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPose: "nada",
      pose: "harto",
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
          marginTop: 0,
        }}
        ref={e => {
          this.div = e;
        }}
        onMouseEnter={e => {
          this.setState({
            initialPose: "harto",
            pose: "nada",
          });
        }}
        onMouseMove={e => {
          this.setState({
            initialPose: "harto",
            pose: "nada",
          });
        }}
        onMouseOut={e => {
          this.setState({
            initialPose: "nada",
            pose: "harto",
          });
        }}
      >
        <VIDEO
          src={video}
          initialPose={initialPose}
          pose={pose}
          muted={true}
          autoPlay={true}
          loop={true}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: "-2",
            left: 0,
            top: 0,
            position: "absolute",
          }}
        />
        {/*
          <ReactPlayer
            url={video}
            muted
            loop
            playing
            className="react-player"
            width="100vw"
            height="150vh"
        />*/}
        {/*
          <Img
            src={sample}
            initialPose={initialPose}
            pose={pose}
            style={{
              zIndex: "-1",
              position: "absolute",
              top: "0px",
              left: "0px",
              height: "100vh",
              marginTop: 0,
            }}
          />*/}
        <Header
          className="title-font"
          as="h1"
          content="Sinantica"
          style={{
            position: "relative",
            fontSize: "8em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: 0,
            paddingTop: "2.5em",
          }}
        />
        <Header
          as="h2"
          content="Somos Sinántica. Hacemos cosas sorprendentes."
          style={{
            position: "relative",
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
      </div>
    );
  }
}

export default HomepageHeading;
