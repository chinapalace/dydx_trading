import React, { Component } from "react";
import { Segment, Divider, Header, Message, Button } from "semantic-ui-react";

class OrderSummary extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3">Order Summary</Header>

        <Message>
          <b>Sell Short</b>
          <span> {this.props.quantity} shares of </span>
          <b>{this.props.baseToken}</b>
          <span> against </span>
          <b>{this.props.quoteToken}</b>
          <span> for </span>
          <b>{this.props.interestRate}%</b>
          <span> interest.</span>
        </Message>
        <Message warning>Total Fees: {this.props.fees}</Message>
        <Message
          color="blue"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          Earnings paid in <b>{this.props.quoteToken}</b> to: <br />
          <span>{this.props.account}</span>
        </Message>
        <Button primary fluid onClick={this.props.handleMarginCall}>
          Preview Order
        </Button>
      </Segment>
    );
  }
}

export default OrderSummary;
