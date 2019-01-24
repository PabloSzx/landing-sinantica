import React, { Component, Fragment } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Grid,
  Icon,
  List,
  Segment
} from "semantic-ui-react";
import sample from "../dist/images/google.png";
import { Footer } from "../components";
const DIV = styled.div`
  position: relative;
  background-color: white;
  height: 30rem;
  width: 45rem;
  top: 10.5em;
  left: 10rem;
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
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h3" className="title-font" style={{ fontSize: "5em" }}>
              Quienes Somos
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <Button icon labelPosition="right" floated="right">
              Ver más
              <Icon name="right arrow" />
            </Button>
          </Container>
        </Segment>
        <Footer />
      </Fragment>
    );
  }
}
