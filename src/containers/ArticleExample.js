import axios from "axios";
import _ from "lodash";
import React, { Component, Fragment } from "react";
import Markdown from "react-remarkable";
import { withRouter } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";
import { Footer } from "../components";
import sample from "../dist/images/google.png";
const StyledSegment = styled(Segment)`
  background-color: #f2f2f2 !important;
  padding-left: 15vw !important;
  padding-right: 15vw !important;
  padding-top: 7vh !important;
  @media (max-width: 1100px) {
    padding-left: 1vw !important;
    padding-right: 1vw !important;
  }
`;
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
const MARKDOWN = styled.div`
  text-align: justify;
  padding-left: 2vw;
  max-width: 95%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export default withRouter(
  class ArticleExample extends Component {
    constructor(props) {
      super(props);

      this.state = {
        //noticias/
        news: []
      };
    }

    async componentDidMount() {
      const news = await axios.get("/blog");
      console.log("news", news);
      this.setState({
        news: news.data
      });
    }

    render() {
      const article = _.get(
        this.state.news,
        _.parseInt(this.props.match.params.id),
        {
          title: "xd",
          timestamp: "xd",
          urlImage: "xd",
          author: "xd",
          markdown: ""
        }
      );
      const {
        title,
        /*timestamp = new Date(),*/
        urlImage = sample,
        author = "xd",
        markdown
      } = article;
      return (
        <Fragment>
          {/*<Segment style={{ paddingTop: "6vw", paddingLeft: "10vh" }} vertical>
          <Button size="large" icon labelPosition="left">
            <Icon name="arrow circle left" />
            VOLVER A NOTICIAS
          </Button>
    </Segment>*/}
          <StyledSegment vertical>
            <Segment
              style={{
                backgroundColor: "white",
                paddingTop: "5vh"
              }}
              vertical
            >
              <Title>
                Hace 15 minutos
                {/*Calcula tiempo desde ahora a value.timestamp */}
              </Title>
              <img
                alt="article"
                src={urlImage}
                style={{ maxWidth: "62vw", paddingLeft: "1.5vw" }}
              />
              <Title>Por: {author}</Title>
              <Header className="title-font">{title}</Header>
              <MARKDOWN>
                <Markdown container={Fragment}>{markdown}</Markdown>
              </MARKDOWN>
            </Segment>
          </StyledSegment>

          <Footer />
        </Fragment>
      );
    }
  }
);
