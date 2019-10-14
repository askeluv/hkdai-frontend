import React, { Component } from 'react'

export class Balance extends Component {

  hasLoaded() {
    return !(!this.props.hkd === undefined && !this.props.dai === undefined);
  }

  render() {
    if (this.hasLoaded()) {
      return (
        <div className="mt-4" style={{fontSize: '0.6em'}}>
          Your Balance<br />
          HKDai: ${this.props.hkd / 1e18} &nbsp;
          DAI: ${this.props.dai / 1e18}
        </div>
      )
    } else {
      return (
        <div>
          Loading ...
        </div>
      )
    }
  }
}

export default Balance
