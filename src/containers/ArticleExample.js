import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Segment, Grid, Item, Divider, Icon, Button } from "semantic-ui-react";
import sample from "../dist/images/google.png";
import { Footer, ButtonTop } from "../components";

const Title = styled.h2`
  font-size: 1.2em;
  text-align: left;
  padding-left: 2vw;
  color: gray;
`;
const Header = styled.h1`
  font-size: 4em;
  text-align: left;
  padding-left: 2vw;
  position: relative;
  color: black;
`;
const P = styled.p`
  font-size: 1.3em;
  text-align: left;
  padding-left: 2vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: relative;
  color: black;
  max-width: 62vw;
`;
const Bar = styled.div`
  background-color: gray;
  margin-left: 2vw;
  max-width: 0.5vw;
`;

export default class ArticleExample extends Component {
  render() {
    return (
      <Fragment>
        <Segment style={{ paddingTop: "6vw", paddingLeft: "10vh" }} vertical>
          <Button size="large" icon labelPosition="left">
            <Icon name="arrow circle left" />
            VOLVER A NOTICIAS
          </Button>
        </Segment>
        <Segment
          style={{
            backgroundColor: "#f2f2f2",
            paddingLeft: "15vw",
            paddingRight: "15vw",
            paddingTop: "7vh"
          }}
          vertical
        >
          <Segment
            style={{
              backgroundColor: "white",
              paddingTop: "20vh"
            }}
            vertical
          >
            <Title>Hace 15 minutos</Title>
            <img
              src={sample}
              style={{ maxWidth: "62vw", paddingLeft: "1.5vw" }}
            />
            <Title>Por: Juanito Perez</Title>
            <Header className="title-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Header>
            <P>
              Nulla auctor turpis in augue maximus vulputate. Suspendisse lectus
              orci, porta vitae bibendum vitae, pretium id nulla. Pellentesque
              id molestie enim. Nunc id enim vitae ante blandit pretium quis a
              nunc. Phasellus rutrum elit vitae tortor vehicula sollicitudin.
              Sed dictum odio id nunc efficitur semper vitae sed mi. Maecenas ac
              est sit amet odio posuere pulvinar vel a erat. Maecenas blandit
              sem eu luctus lacinia. Morbi a ex at ante cursus ornare. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel
              lorem eu ex imperdiet interdum vitae porta justo. Cras volutpat
              vulputate ante eget posuere. Morbi est nisl, commodo nec iaculis
              vitae, vestibulum id diam. Sed et lacus fringilla, mollis ligula
              nec, scelerisque lectus.
            </P>
            <img
              src={sample}
              style={{ maxWidth: "62vw", paddingLeft: "1.5vw" }}
            />
            <P>
              Nulla auctor turpis in augue maximus vulputate. Suspendisse lectus
              orci, porta vitae bibendum vitae, pretium id nulla. Pellentesque
              id molestie enim. Nunc id enim vitae ante blandit pretium quis a
              nunc. Phasellus rutrum elit vitae tortor vehicula sollicitudin.
              Sed dictum odio id nunc efficitur semper vitae sed mi. Maecenas ac
              est sit amet odio posuere pulvinar vel a erat. Maecenas blandit
              sem eu luctus lacinia. Morbi a ex at ante cursus ornare. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Maecenas vel
              lorem eu ex imperdiet interdum vitae porta justo. Cras volutpat
              vulputate ante eget posuere. Morbi est nisl, commodo nec iaculis
              vitae, vestibulum id diam. Sed et lacus fringilla, mollis ligula
              nec, scelerisque lectus.
            </P>
            <Bar>
              <P
                style={{
                  width: "60vw",
                  marginLeft: "1.5vw",
                  fontStyle: "italic"
                }}
              >
                "Nulla auctor turpis in augue maximus vulputate. Suspendisse
                lectus orci, porta vitae bibendum vitae, pretium id nulla.
                Pellentesque id molestie enim. Nunc id enim vitae ante blandit
                pretium quis a nunc. Phasellus rutrum elit vitae tortor vehicula
                sollicitudin. Sed dictum odio id nunc efficitur semper vitae sed
                mi. "
              </P>
              <P
                style={{
                  width: "60vw",
                  marginLeft: "1.5vw",
                  fontStyle: "italic"
                }}
              >
                "Nulla auctor turpis in augue maximus vulputate. Suspendisse
                lectus orci, porta vitae bibendum vitae, pretium id nulla.
                Pellentesque id molestie enim. Nunc id enim vitae ante blandit
                pretium quis a nunc. Phasellus rutrum elit vitae tortor vehicula
                sollicitudin. Sed dictum odio id nunc efficitur semper vitae sed
                mi. "
              </P>
            </Bar>
            <P>
              Nulla auctor turpis in augue maximus vulputate. Suspendisse lectus
              orci, porta vitae bibendum vitae, pretium id nulla. Pellentesque
              id molestie enim. Nunc id enim vitae ante blandit pretium quis a
              nunc. Phasellus rutrum elit vitae tortor vehicula sollicitudin.
              Sed dictum odio id nunc efficitur semper vitae sed mi. Maecenas ac
              est sit amet odio posuere pulvinar vel a erat. Maecenas blandit
              sem eu luctus lacinia.
            </P>
          </Segment>
        </Segment>
        <ButtonTop />
        <Footer />
      </Fragment>
    );
  }
}
