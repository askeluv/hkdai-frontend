import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';

export class ApproveButton extends Component {
  render() {
    return (
      <Button
        variant="secondary"
        size="lg"
        className="mt-3"
        block="true"
        onClick={this.props.approveContract}
      >Approve</Button>
    )
  }
}

export default ApproveButton
