import axios from "axios";

import { reduce } from "lodash";
import React, { Component, Fragment } from "react";
import Markdown from "react-remarkable";
import { Divider, Header, Icon, Segment } from "semantic-ui-react";
import { Footer } from "../components";
export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
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
      <Fragment>
        <Segment basic />
        {reduce(
          news,
          (acum, value, key) => {
            const Row = (
              <Fragment key={key}>
                <Markdown>{value.markdown}</Markdown>
                <Divider horizontal>
                  <Header as="h4">
                    <Icon name="bar chart" />
                    {value._id}
                  </Header>
                </Divider>
              </Fragment>
            );
            acum.push(Row);
            return acum;
          },
          []
        )}
        <Footer />
      </Fragment>
    );
  }
}
