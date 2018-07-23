import React, { Component } from "react";
import {
  Segment,
  Divider,
  Menu,
  Header,
  List,
  Container,
  Input,
  Button,
  Icon
} from "semantic-ui-react";
import OwedTokenList from "./OwedTokenList";
const data = {
  DGD: "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
  GNT: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
  MKR: "0xECF8F87f810EcF450940c9f60066b4a7a501d6A7",
  MLN: "0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1",
  REP: "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5",
  WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  ZRX: "0xe41d2489571d322189246dafa5ebde1f4699f498"
};
class TradeTicket extends Component {
  state = { asks: [], activeItem: 0 };
  componentDidMount() {
    const url = `https://api.radarrelay.com/0x/v0/orderbook?baseTokenAddress=${
      data.ZRX
    }&quoteTokenAddress=${data.WETH}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { asks } = data;
        this.setState({ asks: asks.slice(0, 10) });
      });
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.baseToken !== prevProps.baseToken ||
      this.props.quoteToken !== prevProps.quoteToken
    ) {
      const url = `https://api.radarrelay.com/0x/v0/orderbook?baseTokenAddress=${
        data[this.props.baseToken]
      }&quoteTokenAddress=${data[this.props.quoteToken]}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const { asks } = data;
          this.setState({ asks: asks.slice(0, 10) });
        });
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Segment>
        <Header as="h3">Trade Ticket</Header>
        <Segment basic>
          <Button.Group>
            <Button active>Sell Short</Button>
            <Button disabled>Leverage Long</Button>
          </Button.Group>
          <Divider hidden />
          <Container>
            <Header sub>Quantity</Header>

            <Input
              type="text"
              value={this.props.quantity}
              onChange={this.props.handleQuantityChange}
              action
            >
              <input />
              <Button onClick={this.props.incrementQuantity}>+</Button>
              <Button onClick={this.props.decrementQuantity}>-</Button>
            </Input>
            <Divider hidden />
            <OwedTokenList
              asks={this.state.asks}
              handleOwedTokenSelect={this.props.handleOwedTokenSelect}
              data={this.props.data}
            />
            <Header sub>Buy Held Token</Header>
            <Segment
              style={{ overflow: "auto", maxHeight: 135, padding: "0px" }}
            >
              <List selection divided relaxed>
                {this.state.asks.map((item, index) => {
                  const { makerTokenAmount, takerTokenAmount } = item;
                  const price = makerTokenAmount / takerTokenAmount;
                  const expiration = new Date(
                    item.expirationUnixTimestampSec * 1000
                  );

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
                        <List.Header>Price: {price}</List.Header>
                        <List.Description>
                          Fees: {item.makerFee}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
          </Container>
        </Segment>
      </Segment>
    );
  }
}

export default TradeTicket;
