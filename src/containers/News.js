import { reduce } from "lodash";
import React, { Component, Fragment } from "react";
import Markdown from "react-remarkable";
import { Divider, Header, Icon, Segment } from "semantic-ui-react";
import lorem from "../dist/text/lorem.md";
export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    for (let i = 0; i < 10; i++)
      fetch(lorem)
        .then(response => response.text())
        .then(text => this.setState({ news: this.state.news.concat(text) }));
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
              <Fragment>
                <Markdown>{value}</Markdown>
                <Divider horizontal>
                  <Header as="h4">
                    <Icon name="bar chart" />
                    Specifications
                  </Header>
                </Divider>
              </Fragment>
            );
            acum.push(Row);
            return acum;
          },
          []
        )}
      </Fragment>
    );
  }
}
