import axios from "axios";
import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Grid, Item, Divider, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Footer } from "../components";
import sample from "../dist/images/google.png";

const DIV = styled.div`
  top: -0.35em;
  position: relative;
  padding: 0.8em;
  background-color: white;
  height: 15em;
`;

const LINK = styled(Link)`
  color: black;
  font-size: 1.8em;
  &:hover {
    font-size: 1.85em;
    transition: font-size 0.4s;
  }
  @media (max-width: 1100px) {
    font-size: 0.5em;
    &:hover {
      font-size: 0.7em;
      transition: font-size 0.4s;
    }
  }
`;

export default class Investigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  async componentDidMount() {
    const news = await axios.get("/blog");

    this.setState({
      news: news.data
    });
  }

  render() {
    const { news } = this.state;
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
            {
              _.reduce(
                _.map(news, (value, key) => {
                  return (
                    <Grid.Column>
                      <img src={sample /* value.urlImage */} />
                      <DIV>
                        <Item>
                          <Item.Content>
                            <Item.Meta>
                              Hace 15 minutos
                              {/*Calcula tiempo desde ahora a value.timestamp */}
                            </Item.Meta>
                            <Item.Header
                              className="title-font"
                              as="h1"
                              style={{
                                display: "inline",
                                fontSize: "2em"
                              }}
                            >
                              <LINK
                                to={`/noticias/${key}`}
                                className="title-font"
                              >
                                {value.title}
                              </LINK>
                            </Item.Header>
                            <div
                              style={{
                                textAlign: "right",
                                position: "absolute",
                                bottom: "0.2em",
                                right: 0
                              }}
                            >
                              <Icon
                                name="facebook"
                                size="large"
                                onClick={() => {} /* Compartir */}
                              />
                              <Icon
                                name="twitter"
                                size="large"
                                onClick={() => {} /* Compartir */}
                              />
                            </div>
                          </Item.Content>
                        </Item>
                      </DIV>
                    </Grid.Column>
                  );
                }),
                (acum, value, key) => {
                  switch (key % 3) {
                    case 0:
                      acum.newsAcum = [];
                    case 1:
                      acum.newsAcum.push(value);
                      if (key + 1 === news.length) {
                        acum.acum.push(
                          <Fragment>
                            <Grid.Row>{acum.newsAcum}</Grid.Row>
                            <Divider />
                          </Fragment>
                        );
                      }

                      break;

                    case 2: {
                      acum.newsAcum.push(value);
                      acum.acum.push(
                        <Fragment>
                          <Grid.Row>{acum.newsAcum}</Grid.Row>
                          <Divider />
                        </Fragment>
                      );
                      break;
                    }
                    default:
                  }
                  return acum;
                },
                {
                  acum: [],
                  newsAcum: []
                }
              ).acum
            }
          </Grid>
        </Segment>

        <Footer />
      </Fragment>
    );
  }
}
