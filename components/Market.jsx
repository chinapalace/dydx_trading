import React, { Component } from "react";
import {
  List,
  Segment,
  Header,
  Divider,
  Container,
  Image
} from "semantic-ui-react";

class Market extends Component {
  state = {};
  componentDidMount() {
    const url = `https://api.radarrelay.com/v0/markets/${
      this.props.baseToken
    }-${this.props.quoteToken}/ticker`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ ...data });
      });
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.baseToken !== prevProps.baseToken ||
      this.props.quoteToken !== prevProps.quoteToken
    ) {
      const url = `https://api.radarrelay.com/v0/markets/${
        this.props.baseToken
      }-${this.props.quoteToken}/ticker`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({ ...data });
        });
    }
  }

  render() {
    return (
      <Segment>
        <Header as="h3">Market</Header>

        <Header style={{ textTransform: "uppercase" }} as="h5">
          <Segment
            tertiary
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <span>
              <Image
                src={`../static/images/token_icons/${this.props.baseToken}.png`}
                avatar
              />
              {this.props.baseToken}
            </span>

            <span>
              <Image
                src={`../static/images/token_icons/${
                  this.props.quoteToken
                }.png`}
                avatar
              />
              {`${this.props.quoteToken} `}
            </span>
          </Segment>
        </Header>
        <Segment basic>
          <List
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}
          >
            <List.Item>
              <List.Content
                floated="right"
                style={{
                  width: "80px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.state.price}
              </List.Content>
              <List.Header>Last Price</List.Header>
            </List.Item>
            <List.Item>
              <List.Content
                floated="right"
                style={{
                  width: "60px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.state.bid}
              </List.Content>
              <List.Header>Bid</List.Header>
            </List.Item>
            <List.Item>
              <List.Content
                floated="right"
                style={{
                  width: "60px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.state.ask}
              </List.Content>
              <List.Header>Ask</List.Header>
            </List.Item>
            <List.Item>
              <List.Content
                floated="right"
                style={{
                  width: "60px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.state.size}
              </List.Content>
              <List.Header>Size</List.Header>
            </List.Item>
            <List.Item>
              <List.Content
                floated="right"
                style={{
                  width: "60px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.state.volume}
              </List.Content>
              <List.Header>Volume</List.Header>
            </List.Item>
          </List>
        </Segment>
      </Segment>
    );
  }
}

export default Market;
