import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export class LoadingButton extends Component {
  render() {
    return (
      <Button
          variant="secondary"
          size="lg"
          className="mt-3"
          block="true"
        ><Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      /> Loading ...</Button>
    )
  }
}

export default LoadingButton
