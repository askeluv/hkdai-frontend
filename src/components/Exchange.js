import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Web3 from 'web3';
import Balance from './Balance';
import ApproveButton from './ApproveButton';
import ExchangeButton from './ExchangeButton';
import LoadingButton from './LoadingButton';
import NoWalletButton from './NoWalletButton';
import arrow from '../arrow.svg';

const HKDAI_ABI = require('../contracts/HKDai.json').abi;
const HKDAI_CONTRACT_ADDRESS = '0xC1e2cf5dFe3D4A0c3cA0Beb9bC0e911A8A70dD59';

const DAI_ABI = require('../contracts/MockDai.json').abi;
const DAI_CONTRACT_ADDRESS = '0x16684b9362C1B8276526212B3905d8bBEB595dDb';

export class Exchange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hkdToUsdRate: 7.8,
      fromValue: 1.0,
      toValue: 7.8,
      isFromUsd: true,
      hasLoaded: false,
      isApproved: false,
      isConnected: false,
      isCorrectNetwork: false,
      isTransacting: false,
    }
  }

  async updateBalancesAndApproval() {
    const { account } = this.state;
    const hkdaiContract = new window.web3.eth.Contract(HKDAI_ABI, HKDAI_CONTRACT_ADDRESS);
    const daiContract = new window.web3.eth.Contract(DAI_ABI, DAI_CONTRACT_ADDRESS);
    console.log('updating balance ... ');
    await hkdaiContract.methods.balanceOf(account).call({from: account}, async (error, balance) => {
      console.log('updating HKD balance ... ');
      this.updateHkdBalance(balance);
      console.log('updated HKD balance! ');
      await daiContract.methods.balanceOf(account).call({from: account}, async (error, balance) => {
        console.log('updating DAI balance ... ');
        this.updateDaiBalance(balance);
        console.log('updated DAI balance! ');
        await daiContract.methods.allowance(account, HKDAI_CONTRACT_ADDRESS).call(async (error, daiAllowance) => {
          await hkdaiContract.methods.allowance(account, HKDAI_CONTRACT_ADDRESS).call((error, hkdaiAllowance) => {
            this.updateIsApproved(daiAllowance, hkdaiAllowance);
          });
        });
      });
    });
  }

  updateHkdBalance(balance) {
    console.log('updating HKD balance (inner)...')
    this.setState({
      hkdBalance: balance
    })
  }

  updateDaiBalance(balance) {
    console.log('updating DAI balance (inner)...')
    this.setState({
      daiBalance: balance
    })
  }

  updateIsApproved(daiAllowance, hkdaiAllowance) {
    console.log('updating allowance...')
    const isApproved = (daiAllowance > 0.0) && (hkdaiAllowance > 0.0);
    console.log(daiAllowance);
    console.log(hkdaiAllowance);
    console.log(isApproved);
    this.setState({isApproved, hasLoaded: true});
  }

  componentDidMount() {
    const wrapper = this;
    window.addEventListener('load', async function () {
      if (typeof web3 !== 'undefined') {
          window.web3 = new Web3(window.web3.currentProvider)
          try {
            await window.web3.currentProvider.enable();
            console.log('enabled!');
          } catch (error) {
              console.log('user denied');
          }
          window.web3.eth.net.getNetworkType().then(console.log);
          if (window.web3.currentProvider.isMetaMask === true) {
              window.web3.eth.getAccounts((error, accounts) => {
                  if (accounts.length === 0) {
                    console.log('No active account in Metamask')
                  }
                  else {
                      const account = accounts[0];
                      console.log('Metamask connected')
                      wrapper.setState({
                        account,
                        ...wrapper.state
                      }, () => {
                        wrapper.updateBalancesAndApproval();
                      })
                    }
                  }
                );
              }
            else {
            console.log('Non-metamask Web3 provider');
          }
      } else {
        console.log('No Web3 provider');
        wrapper.setState({
          hasLoaded: true
        })
      }
  })
};
  

  handleChangeFromInput(event) {
    const fromValue = event.target.value;
    const toValue = this.state.isFromUsd ? parseFloat(fromValue) * this.state.hkdToUsdRate : parseFloat(fromValue) / this.state.hkdToUsdRate;
    if(!isNaN(toValue)) {
      this.setState({ fromValue, toValue })
    } else {
      this.setState({
        fromValue: '',
        toValue: '',
      })
    }
  }

  handleChangeToInput(event) {
    const toValue = event.target.value;
    const fromValue = this.state.isFromUsd ? parseFloat(toValue) / this.state.hkdToUsdRate : parseFloat(toValue) * this.state.hkdToUsdRate;
    if(!isNaN(fromValue)) {
      this.setState({ fromValue, toValue })
    } else {
      this.setState({
        fromValue: '',
        toValue: '',
      })
    }
  }

  async approveContract(event) {
    const { account } = this.state;
    const approveAmount = window.web3.utils.toWei("1000");
    console.log(approveAmount);
    const daiContract = new window.web3.eth.Contract(DAI_ABI, DAI_CONTRACT_ADDRESS);
    await daiContract.methods.approve(HKDAI_CONTRACT_ADDRESS, approveAmount).send({from: account}, (error, res) => {
      if(error) {
        console.error('error');
        console.log(error);
      }
      console.log('executed')
      console.log(res);
    });
    const hkdaiContract = new window.web3.eth.Contract(HKDAI_ABI, HKDAI_CONTRACT_ADDRESS);
    await hkdaiContract.methods.approve(HKDAI_CONTRACT_ADDRESS, approveAmount).send({from: account}, (error, res) => {
      if(error) {
        console.error('error');
        console.log(error);
      }
      console.log('executed')
      console.log(res);
    });
    await this.updateBalancesAndApproval();
  }

  async executeExchange(event) {
    event.preventDefault();
    console.log('depositing', this.state.fromValue);
    const { account } = this.state;
    const hkdaiContract = new window.web3.eth.Contract(HKDAI_ABI, HKDAI_CONTRACT_ADDRESS);
    const valueInWei = window.web3.utils.toWei(this.state.fromValue.toString());
    this.setState({
      isTransacting: true,
    });
    if (this.state.isFromUsd) {
      console.log('value in wei', valueInWei);
      hkdaiContract.methods.deposit(valueInWei).send({from: account}, (error, res) => {
        if(error) {
          console.error('error');
          console.log(error);
        }
        console.log('executed')
        console.log(res);
      });
      await hkdaiContract.once('Mint', async (error, res) => {
        if(!error) {
          // do something with error
        }
        this.setState({
          isTransacting: false,
        });
        await this.updateBalancesAndApproval();
      });
    } else {
      console.log('value in wei', valueInWei);
      hkdaiContract.methods.withdraw(valueInWei).send({from: account}, (error, res) => {
        if(error) {
          console.error('error');
          console.log(error);
        }
        console.log('executed')
        console.log(res);
      });
      await hkdaiContract.once('Burn', async (error, res) => {
        if(!error) {
          // do something with error
        }
        this.setState({
          isTransacting: false,
        });
        await this.updateBalancesAndApproval();
      });
    }
  }

  toggleDirection(event) {
    this.setState({
      isFromUsd: !this.state.isFromUsd,
      fromValue: this.state.toValue,
      toValue: this.state.fromValue,
    })
  }

  render() {
    const { 
      daiBalance,
      hasLoaded,
      hkdBalance,
      isFromUsd,
      isConnected,
      isApproved,
      isCorrectNetwork,
      isTransacting,
      fromValue,
      toValue,
      account
    } = this.state;
    return (
      <div>
        <p className="lead-in" block>Deposit {isFromUsd ? "Dai to get HKDai" : "HKDai to get Dai"}</p>
        <InputGroup block="true">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            id="from-input"
            aria-label="fromValue"
            value={fromValue}
            onChange={this.handleChangeFromInput.bind(this)}
          />
          <InputGroup.Append>
            <InputGroup.Text>{isFromUsd ? "USD" : "HKD"}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
          <img
            onClick={this.toggleDirection.bind(this)}
            style={{cursor: 'pointer'}}
            src={arrow}
            alt="arrow"
            className="arrow m-3"
          />
        <InputGroup block="true">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
           id="to-input"
           aria-label="toValue"
           value={toValue}
           onChange={this.handleChangeToInput.bind(this)}
           />
          <InputGroup.Append>
            <InputGroup.Text>{isFromUsd ? "HKD" : "USD"}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        {(isTransacting || !hasLoaded) && <LoadingButton/>}
        {(!isTransacting && hasLoaded && !account) && <NoWalletButton/>}
        {!isTransacting && hasLoaded && isApproved && <ExchangeButton isFromUsd={isFromUsd} executeExchange={this.executeExchange.bind(this)} />}
        {!isTransacting && hasLoaded && account && !isApproved && <ApproveButton approveContract={this.approveContract.bind(this)} />}
        {account && <Balance hkd={hkdBalance} dai={daiBalance} />}
      </div>
    )
  }
}

export default Exchange
