import React, { Component } from "react";
import posed from "react-pose";
import { Header } from "semantic-ui-react";
import sample from "../dist/images/google.png";

const Img = posed.img({
  nada: {
    filter: "blur(0px)",
    transition: {
      duration: 350,
    },
    transform: ({ difx, dify }) => `rotate3d(${difx}, ${dify}, 0, 10deg)`,
  },
  harto: {
    filter: "blur(3px)",
    transition: {
      duration: 500,
    },
    transform: ({ difx, dify }) => `rotate3d(${difx}, ${dify}, 0, 10deg)`,
  },
});
class HomepageHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPose: "nada",
      pose: "harto",
      difx: 0,
      dify: 0,
    };
    this.timeout = null;
  }

  render() {
    const { initialPose, pose, difx, dify } = this.state;

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
        onMouseMove={e => {
          // console.log("e", this.div.clientWidth);

          // console.log("e", this.div.clientHeight);
          // console.log("x: ", e.pageX, " y: ", e.pageY);
          clearTimeout(this.timeout);
          this.setState({
            initialPose: "nada",
            pose: "harto",
            difx: e.pageX / this.div.clientWidth,
            dify: e.pageY / this.div.clientHeight,
          });

          this.timeout = setTimeout(() => {
            this.setState({
              initialPose: "harto",
              pose: "nada",
            });
          }, 100);
        }}
        onMouseOut={e => {
          clearTimeout(this.timeout);
          this.setState({
            initialPose: "nada",
            pose: "harto",
          });
        }}
      >
        <Img
          src={sample}
          initialPose={initialPose}
          pose={pose}
          // onPoseComplete={() =>
          //   this.setState({ initialPose: pose, pose: initialPose })
          // }
          difx={difx}
          dify={dify}
          style={{
            zIndex: "-1",
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100vh",
            marginTop: 0,
          }}
        />
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
