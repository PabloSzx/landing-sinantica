import React, { Component } from "react";
import { Container, Label, Icon, Header, Card } from "semantic-ui-react";
import sample from "../dist/images/google.png";
import { relative } from "path";
export default class AboutUs extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          position: "relative",
          top: "0px",
          marginTop: 0
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            height: "30vh",
            width: "30vw",
            top: "800 px",
            left: "500 px"
          }}
        />

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

        {/*  <Card
          style={{
            zIndex: "-1",
            position: "relative",
            top: "10vw",
            left: "10vw",
            height: "50vh",
            width: "70vh",
            marginTop: 0
          }}
        >
          <Card.Content>
            <Card.Meta>QUIENES SOMOS</Card.Meta>
            <Card.Header
              className="title-font"
              style={{
                fontSize: "3.9em"
              }}
            >
              Jovenes bacanes que hacen cosas bacanes
            </Card.Header>
            <Card.Description
              style={{
                fontSize: "1.2em"
              }}
            >
              Aplicamos machine learnin y tecnicas avanzadas de no se que para
              blablablabla. Aplicamos machine learnin y tecnicas avanzadas de no
              se que para blablablabla.
            </Card.Description>
          </Card.Content>
        </Card>   */}
      </div>
    );
  }
}
