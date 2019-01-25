import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Segment, Header, Grid, Item, Divider, Icon } from "semantic-ui-react";
import sample from "../dist/images/google.png";
import { Footer } from "../components";

const DIV = styled.div`
  top: -0.35em;
  position: relative;
  padding: 0.8em;
  background-color: white;
  height: 15em;
`;

export default class Investigation extends Component {
  render() {
    return (
      <Fragment>
        <Segment style={{ paddingTop: "15vw" }} vertical>
          <Header
            className="title-font"
            textAlign="center"
            size="huge"
            style={{ fontSize: "5em" }}
          >
            NOTICIAS
          </Header>
        </Segment>
        <Segment
          style={{
            backgroundColor: "#f2f2f2",
            paddingLeft: "10vw",
            paddingRight: "10vw"
          }}
          vertical
        >
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <img src={sample} />
                <DIV>
                  <Item>
                    <Item.Content>
                      <Item.Meta>Hace 15 minutos</Item.Meta>
                      <Item.Header
                        className="title-font"
                        as="h1"
                        style={{ display: "inline", fontSize: "2vw" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Item.Header>
                      <div style={{ textAlign: "right" }}>
                        <Icon name="facebook" size="large" />
                        <Icon name="twitter" size="large" />
                      </div>
                    </Item.Content>
                  </Item>
                </DIV>
              </Grid.Column>
              <Grid.Column>
                <img src={sample} />
                <DIV>
                  <Item>
                    <Item.Content>
                      <Item.Meta>Hace 15 minutos</Item.Meta>
                      <Item.Header
                        className="title-font"
                        as="h1"
                        style={{ display: "inline", fontSize: "2vw" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Item.Header>
                      <div style={{ textAlign: "right" }}>
                        <Icon name="facebook" size="large" />
                        <Icon name="twitter" size="large" />
                      </div>
                    </Item.Content>
                  </Item>
                </DIV>
              </Grid.Column>
              <Grid.Column>
                <img src={sample} />
                <DIV>
                  <Item>
                    <Item.Content>
                      <Item.Meta>Hace 15 minutos</Item.Meta>
                      <Item.Header
                        className="title-font"
                        as="h1"
                        style={{ display: "inline", fontSize: "2vw" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Item.Header>
                      <div style={{ textAlign: "right" }}>
                        <Icon name="facebook" size="large" />
                        <Icon name="twitter" size="large" />
                      </div>
                    </Item.Content>
                  </Item>
                </DIV>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column>
                <img src={sample} />
                <DIV>
                  <Item>
                    <Item.Content>
                      <Item.Meta>Hace 15 minutos</Item.Meta>
                      <Item.Header
                        className="title-font"
                        as="h1"
                        style={{ display: "inline", fontSize: "2vw" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Item.Header>
                      <div style={{ textAlign: "right" }}>
                        <Icon name="facebook" size="large" />
                        <Icon name="twitter" size="large" />
                      </div>
                    </Item.Content>
                  </Item>
                </DIV>
              </Grid.Column>
              <Grid.Column>
                <img src={sample} />
                <DIV>
                  <Item>
                    <Item.Content>
                      <Item.Meta>Hace 15 minutos</Item.Meta>
                      <Item.Header
                        className="title-font"
                        as="h1"
                        style={{ display: "inline", fontSize: "2vw" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Item.Header>
                      <div style={{ textAlign: "right" }}>
                        <Icon name="facebook" size="large" />
                        <Icon name="twitter" size="large" />
                      </div>
                    </Item.Content>
                  </Item>
                </DIV>
              </Grid.Column>
              <Grid.Column>
                <img src={sample} />
                <DIV>
                  <Item>
                    <Item.Content>
                      <Item.Meta>Hace 15 minutos</Item.Meta>
                      <Item.Header
                        className="title-font"
                        as="h1"
                        style={{ display: "inline", fontSize: "2vw" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Item.Header>
                      <div style={{ textAlign: "right" }}>
                        <Icon name="facebook" size="large" />
                        <Icon name="twitter" size="large" />
                      </div>
                    </Item.Content>
                  </Item>
                </DIV>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Footer />
      </Fragment>
    );
  }
}
