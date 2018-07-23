import React, { Component } from "react";
import {
  Segment,
  Divider,
  Menu,
  Header,
  List,
  Container,
  Input
} from "semantic-ui-react";

class OwedTokenList extends Component {
  state = { activeItem: 0 };
  handleItemClick = (e, { name }) => {
    this.props.handleOwedTokenSelect(e, name);
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Header sub>Borrow Owed Token</Header>
        <Segment style={{ overflow: "auto", maxHeight: 135, padding: "0px" }}>
          <List selection divided relaxed>
            {this.props.data.map((item, index) => {
              const { interestRate, takerTokenAmount } = item;
              const expiration = new Date(item.expirationTimestamp);

              return (
                <List.Item
                  key={index}
                  name={index}
                  active={activeItem === index}
                  onClick={this.handleItemClick}
                >
                  <List.Content floated="right">
                    {expiration.toLocaleDateString()}
                  </List.Content>
                  <List.Content>
                    <List.Header>Interest: {interestRate} %</List.Header>
                    <List.Description>Fees: {item.lenderFee}</List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Segment>
      </div>
    );
  }
}

export default OwedTokenList;
