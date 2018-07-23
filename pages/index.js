import React, { Component } from "react";
import margin from "../margin";
import web3 from "../web3";
import { Card, Grid, Segment, Container } from "semantic-ui-react";
import Layout from "../components/Layout";
import TradeTicket from "../components/TradeTicket";
import BaseToken from "../components/BaseToken";
import QuoteToken from "../components/QuoteToken";
import Market from "../components/Market";
import OrderSummary from "../components/OrderSummary";
import data from "../dummyData";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const owner = await margin.methods.owner().call();

    return { owner };
  }

  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      ...this.props,
      baseToken: "ZRX",
      quoteToken: "WETH",
      owedTokenInterest: data.loanOffering[0].interestRate,
      fees: 0
    };
  }

  async componentDidMount() {
    const account = await web3.eth.getAccounts();

    this.setState({ account: account[0] });
  }

  handleQuantityChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };
  handleBaseTokenChange = (e, result) => {
    this.setState({
      baseToken: result.title
    });
  };
  handleQuoteTokenChange = (e, result) => {
    this.setState({
      quoteToken: result.title
    });
  };
  handleOwedTokenSelect = (e, i) => {
    this.setState({
      owedTokenInterest: data.loanOffering[i].interestRate
    });
  };
  incrementQuantity = (e, result) => {
    this.setState({
      quantity: this.state.quantity + 10
    });
  };
  decrementQuantity = () => {
    this.setState({
      quantity: this.state.quantity - 10
    });
  };
  handleMarginCall() {
    marginCall()
  }
  render() {
    return (
      <Layout>
        <div style={{ padding: "50px 70px" }}>
          <Grid columns={3} doubling stackable>
            <Grid.Column computer={4} mobile={4} tablet={4}>
              <BaseToken
                baseToken={this.state.baseToken}
                handleBaseTokenChange={this.handleBaseTokenChange}
              />
              <QuoteToken
                quoteToken={this.state.quoteToken}
                handleQuoteTokenChange={this.handleQuoteTokenChange}
              />
              <Market
                baseToken={this.state.baseToken}
                quoteToken={this.state.quoteToken}
              />
            </Grid.Column>
            <Grid.Column computer={8} mobile={8} tablet={8}>
              <TradeTicket
                baseToken={this.state.baseToken}
                quoteToken={this.state.quoteToken}
                data={data.loanOffering}
                quantity={this.state.quantity}
                handleQuantityChange={this.handleQuantityChange}
                handleOwedTokenSelect={this.handleOwedTokenSelect}
                incrementQuantity={this.incrementQuantity}
                decrementQuantity={this.decrementQuantity}
              />
            </Grid.Column>
            <Grid.Column computer={4} mobile={4} tablet={4}>
              <OrderSummary
                account={this.state.account}
                quantity={this.state.quantity}
                baseToken={this.state.baseToken}
                quoteToken={this.state.quoteToken}
                interestRate={this.state.owedTokenInterest}
                fees={this.state.fees}
                handleMarginCall={this.handleMarginCall}
              />
            </Grid.Column>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
