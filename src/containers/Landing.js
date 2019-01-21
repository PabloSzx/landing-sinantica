import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Tab,
  Image,
  Dropdown
} from "semantic-ui-react";
import {
  DesktopContainer,
  MobileContainer,
  HomepageHeading,
  ResponsiveContainer
} from "../components";
import video1 from "../dist/videos/video1.webm";
import video2 from "../dist/videos/video2.webm";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class HomepageLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <ResponsiveContainer>
        <Divider />
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row centered>
              <Grid.Column width={8}>
                <Tab
                  activeIndex={activeIndex}
                  menu={{ secondary: true, pointing: true }}
                  onTabChange={(event, data) => {
                    this.setState({
                      activeIndex: data.activeIndex
                    });
                  }}
                  panes={[
                    {
                      menuItem: "Video1",
                      render: () => (
                        <video
                          width={"100%"}
                          src={video1}
                          autoPlay
                          repeat
                          controls
                          onEnded={() =>
                            this.setState({
                              activeIndex: 1
                            })
                          }
                        />
                      )
                    },
                    {
                      menuItem: "Video2",
                      render: () => (
                        <video
                          width={"100%"}
                          src={video2}
                          autoPlay
                          repeat
                          controls
                          onEnded={() =>
                            this.setState({
                              activeIndex: 0
                            })
                          }
                        />
                      )
                    }
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Valdivia, Región de los Ríos Chile
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  That is what they all say about us
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              <a href="#case">Case Studies</a>
            </Divider>

            <Header as="h3" style={{ fontSize: "2em" }}>
              Did We Tell You About Our Bananas?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true. It took years
              of gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p>
            <Button as="a" size="large">
              I'm Still Quite Interested
            </Button>
          </Container>
        </Segment>

        <Segment vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header as="h4" content="About" />
                  <List link>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header as="h4" content="Services" />
                  <List link>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4">Footer Header</Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default HomepageLayout;