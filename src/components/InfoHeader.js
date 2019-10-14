import React, { Component } from 'react'

export class InfoHeader extends Component {

  render() {
    return (
      <div style={{position:'absolute', background: '#ff0000', width: '100%', color: 'white'}}>
        <span role="img" aria-label="warning">⚠️</span>HKDai is in alpha. Make sure you use the Ropsten network.
      </div>
    )
  }
}

export default InfoHeader
