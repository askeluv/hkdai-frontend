import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';

export class NoWalletButton extends Component {
  render() {
    return (
      <Button
          variant="secondary"
          size="lg"
          className="mt-3"
          block="true"
        >No Wallet Found</Button>
    )
  }
}

export default NoWalletButton
