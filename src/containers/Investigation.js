import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Segment } from "semantic-ui-react";
import sample from "../dist/images/google.png";
import { Footer, ButtonTop } from "../components";
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

export default class Investigation extends Component {
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
              <Title>INVESTIGACION</Title>
              <Header className="title-font">
                Investigamos como rastrear autitos
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
        <ButtonTop />
        <Footer />
      </Fragment>
    );
  }
}
