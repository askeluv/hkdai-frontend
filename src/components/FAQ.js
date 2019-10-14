import React from 'react'

export default function FAQ() {
  return (
    <section className="faq">
      <h3 className="m-5">Frequently Asked Questions (FAQ)</h3>

      <h4>What is HKDai?</h4>
      <p>HKDai is a cryptocurrency which - similarly to the Hong Kong Dollar (HKD) - is pegged to the US Dollar (USD) at a rate of 7.8 HKD to 1 USD.</p>
      <p>While the HKD is pegged by the Hong Kong Monetary Authority (HKMA) intervening in markets at certain price points (buy at 7.75HKD; sell at 7.85HKD), HKDai is 100% collateralized by Dai - another cryptocurrency pegged to the US Dollar.</p>
      <p>This means that you can <em>always</em> redeem your HKDai for Dai at a rate of <em>exactly</em> 7.8 HKDai for 1 Dai. This is guaranteed via an open-source smart contract issued on the Ethereum blockchain.</p>

      <h4>Why HKDai?</h4>
      <p>HKDai gives the people of Hong Kong a familiar unit of account, with the benefits of the Ethereum blockchain.</p>
      <p>Specifically:
        <ul>
          <li>HKDai requires no bank account - only a wallet which supports Ethereum.</li>
          <li>HKDai can be sent to anyone, anywhere in the world, within seconds - and without intermediaries</li>
          <li>HKDai has a stable value, as it is pegged to Dai at a constant rate of exacly 7.8 : 1</li>
        </ul>
      </p>

      <h4>How does HKDai work?</h4>
      <p>HKDai is based on a very simple smart contract. The main two features of the contract are <em>deposit</em> and <em>withdraw</em>:
      <ol>
      <li>Deposit lets you deposit Dai into the smart contract. You receive exactly 7.8 HKDai for every Dai you deposit. These 7.8 HKDai are created at the time of your deposit.</li>
      <li>Withdraw is the opposite operation: it lets you withdraw Dai from the smart contract. You must return 7.8 HKDai for every Dai you want to withdraw. The HKDai you return are taken out of circulation.</li>
      </ol>
      </p>
      <p>In addition to these two features, the smart contract implements the ERC20 standard for tokens on the Ethereum blockchain. You can see the smart contract in this open source repository</p>
      
      <h4>How do you profit from HKDai?</h4>
      <p>HKDai is a not-for-profit, open source project. Its contributors are all volunteers.</p>

      <h4>Disclaimer</h4>
      <p>HKDai is an experimental project and has no affiliation with the Hong Kong Monetary Authority or the Hong Kong Dollar in any way. Usage of HKDai is entirely at your own risk.</p>
      
    </section>
  )
}
