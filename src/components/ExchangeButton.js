import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';

export class ExchangeButton extends Component {
  render() {
    return (
      <Button
          variant="primary"
          size="lg"
          className="mt-3"
          block="true"
          onClick={this.props.executeExchange}
        >Exchange {this.props.isFromUsd ? "DAI" : "HKDai"} to {this.props.isFromUsd ? "HKDai" : "DAI"}
      </Button>
    )
  }
}

export default ExchangeButton
