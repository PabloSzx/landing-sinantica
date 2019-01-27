import React, { Component, Fragment } from "react";
import { Container, Segment } from "semantic-ui-react";
import styled from "styled-components";
import { Footer } from "../components";
import sample from "../dist/images/google.png";
import example from "../dist/images/sample.png";
const DIV = styled.div`
  position: relative;
  background-color: white;
  height: 30rem;
  width: 45rem;
  top: 10.5em;
  left: 10rem;
`;

const DIVBox = styled.div`
  position: absolute;
  background-color: white;
  textalign: center;
  height: 50vh;
  width: 50vw;
  top: 10vh;
  left: 25vw;
`;

const DIVImage = styled.div`
  position: absolute;
  maxheight: 50vh;
  width: 50vw;
  top: 10vh;
  left: 10vw;
`;
const Title = styled.h2`
  font-size: 1.5em;
  text-align: left;
  padding: 1em;
  position: relative;
  top: 0.5em;
  color: gray;
`;
const Header = styled.h1`
  font-size: 4em;
  text-align: left;
  padding: 0.37em;
  position: relative;
  top: -1em;
  color: black;
`;
const P = styled.p`
  font-size: 1.3em;
  text-align: left;
  padding: 1.4em;
  position: relative;
  top: -6em;
  color: black;
`;

export default class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <Segment textAlign="center" style={{ padding: "0.1em 0em" }} vertical>
          <div
            style={{
              height: "100vh",
              position: "relative",
              top: "0px",
              marginTop: 0
            }}
          >
            <DIV>
              <Title>QUIENES SOMOS</Title>
              <Header className="title-font">
                Jovenes bacanes que hacen cosas bacanes
              </Header>
              <P>
                Aplicamos machine learnin y tecnicas avanzadas de no se que para
                blablablabla, Aplicamos machine learnin y tecnicas avanzadas de
                no se que para blablablabla dsjlkjw saidwilkjanjkw.
              </P>
            </DIV>
            <img
              alt="about us cover"
              src={sample}
              style={{
                zIndex: "-1",
                position: "absolute",
                top: "0px",
                left: "0px",
                height: "100vh",
                marginTop: 0
              }}
            />
          </div>
        </Segment>

        {/* 2 Imagenes + texto*/}
        <Segment style={{ padding: "0em 0em" }} vertical>
          <img
            src={example}
            alt="background left"
            style={{
              zIndex: "-1",
              position: "relative",
              width: "48.9vw",
              marginTop: 0
            }}
          />
          <img
            src={example}
            alt="nackground right"
            style={{
              zIndex: "-1",
              position: "relative",
              float: "right",
              width: "48.9vw",
              marginTop: 0
            }}
          />

          <DIVBox>
            <Title>LOREM IPSUM DOLOR</Title>
            <P style={{ top: "0em " }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis placerat mollis. Ut ac eleifend ligula. Aenean eget
              cursus ex. Integer et lorem blandit, dignissim metus sed, suscipit
              quam. Nulla placerat velit quis vulputate commodo. Quisque gravida
              pellentesque ante ac tempus. Curabitur sodales vel purus eget
              porttitor. Cras lacus diam, tempus ut dolor sit amet, bibendum
              ornare arcu.
            </P>
          </DIVBox>
        </Segment>

        {/* Solo Texto*/}

        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis placerat mollis. Ut ac eleifend ligula. Aenean eget
              cursus ex. Integer et lorem blandit, dignissim metus sed, suscipit
              quam. Nulla placerat velit quis vulputate commodo. Quisque gravida
              pellentesque ante ac tempus. Curabitur sodales vel purus eget
              porttitor. Cras lacus diam, tempus ut dolor sit amet, bibendum
              ornare arcu. Cras nisl dui, imperdiet a venenatis eu, aliquet in
              erat. Ut accumsan suscipit dignissim. Ut non odio lorem.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc blandit libero vitae lorem elementum
              suscipit. Praesent porttitor nibh diam, iaculis aliquam metus
              bibendum eu.
            </p>
          </Container>
        </Segment>

        {/* Texto en imagen*/}
        <Segment style={{ padding: "0em 0em" }} vertical>
          <img
            src={example}
            alt="background"
            style={{
              zIndex: "-1",
              position: "relative",
              width: "100vw",
              objectFit: "cover",
              maxHeight: "50vh",
              marginTop: 0
            }}
          />
          <DIVImage>
            <Title style={{ color: "white" }}>LOREM IPSUM DOLOR</Title>
            <P style={{ top: "-2em ", left: "-0.3em", color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis placerat mollis. Ut ac eleifend ligula. Aenean eget
              cursus ex. Integer et lorem blandit, dignissim metus sed, suscipit
              quam. Nulla placerat velit quis vulputate commodo.
            </P>
          </DIVImage>
        </Segment>

        {/* 3 Imagenes + texto*/}
        <Segment style={{ padding: "0em 0em" }} vertical>
          <img
            src={example}
            alt="background left"
            style={{
              zIndex: "-1",
              position: "relative",
              objectFit: "cover",
              width: "32.9vw",
              float: "left",
              height: "70vh",
              marginTop: 0
            }}
          />
          <img
            src={example}
            alt="background center"
            style={{
              zIndex: "-1",
              position: "relative",
              objectFit: "cover",
              float: "right",
              width: "32.9vw",
              height: "70vh",
              marginTop: 0
            }}
          />
          <img
            src={example}
            alt="background right"
            style={{
              zIndex: "-1",

              objectFit: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "32.5vw",
              height: "70vh",
              marginTop: 0
            }}
          />

          <DIVBox>
            <Title>LOREM IPSUM DOLOR</Title>
            <P style={{ top: "0em " }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis placerat mollis. Ut ac eleifend ligula. Aenean eget
              cursus ex. Integer et lorem blandit, dignissim metus sed, suscipit
              quam. Nulla placerat velit quis vulputate commodo. Quisque gravida
              pellentesque ante ac tempus. Curabitur sodales vel purus eget
              porttitor. Cras lacus diam, tempus ut dolor sit amet, bibendum
              ornare arcu.
            </P>
          </DIVBox>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis placerat mollis. Ut ac eleifend ligula. Aenean eget
              cursus ex. Integer et lorem blandit, dignissim metus sed, suscipit
              quam. Nulla placerat velit quis vulputate commodo. Quisque gravida
              pellentesque ante ac tempus. Curabitur sodales vel purus eget
              porttitor. Cras lacus diam, tempus ut dolor sit amet, bibendum
              ornare arcu. Cras nisl dui, imperdiet a venenatis eu, aliquet in
              erat. Ut accumsan suscipit dignissim. Ut non odio lorem.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc blandit libero vitae lorem elementum
              suscipit. Praesent porttitor nibh diam, iaculis aliquam metus
              bibendum eu.
            </p>
          </Container>
        </Segment>
        <Footer />
      </Fragment>
    );
  }
}
