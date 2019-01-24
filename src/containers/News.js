import axios from "axios";
import { reduce } from "lodash";
import React, { Component, Fragment } from "react";
import Markdown from "react-remarkable";
import { Divider, Header, Icon, Segment, Grid } from "semantic-ui-react";
import styled from "styled-components";
import { Footer } from "../components";

const MARKDOWN = styled.div`
  text-align: justify;
  width: 50%;
  @media (max-width: 1100px) {
    width: 80%;
  }
`;
export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    const news = await axios.get("/blog");
    console.log("news", news);
    this.setState({ news: news.data });
  }

  render() {
    const { news } = this.state;
    return (
      <Grid centered>
        <Segment basic />
        {reduce(
          news,
          (acum, value, key) => {
            const Row = (
              <Fragment key={key}>
                <Grid.Row>
                  <MARKDOWN>
                    <Markdown container={Fragment}>{value.markdown}</Markdown>
                  </MARKDOWN>
                </Grid.Row>
                <Grid.Row>
                  <Divider horizontal style={{ width: "100vw", height: "0%" }}>
                    <Header as="h4">
                      <Icon name="bar chart" />
                      {value._id}
                    </Header>
                  </Divider>
                </Grid.Row>
              </Fragment>
            );
            acum.push(Row);
            return acum;
          },
          []
        )}
        <Grid.Row>
          <Footer />
        </Grid.Row>
      </Grid>
    );
  }
}
