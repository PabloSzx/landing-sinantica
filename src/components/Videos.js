import React, { Component } from "react";
import { Grid, Segment, Tab } from "semantic-ui-react";
import video1 from "../dist/videos/video1.webm";
import video2 from "../dist/videos/video2.webm";

export default class Videos extends Component {
  render() {
    return (
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
    );
  }
}
