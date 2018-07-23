import React, { Component } from "react";
import {
  Segment,
  Divider,
  Search,
  Header,
  Table,
  List
} from "semantic-ui-react";
import _ from "lodash";
import { source } from "../dummyData.js";

class QuoteToken extends Component {
  state = {};

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => {
    this.props.handleQuoteTokenChange(e, result);
    this.setState({ value: result.title });
  };
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Segment>
        <Header as="h3">Quote Token</Header>
        <Search
          fluid
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          defaultValue={this.props.quoteToken}
        />
      </Segment>
    );
  }
}

export default QuoteToken;
