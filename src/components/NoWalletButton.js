import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export class NoWalletButton extends Component {
  render() {
    return (
      <Button
          variant="secondary"
          size="lg"
          className="mt-3"
          block="true"
        >No Wallet</Button>
    )
  }
}

export default NoWalletButton
