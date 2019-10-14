import React from 'react'

export default function FAQ() {
  return (
    <section className="faq">
      <h3 className="m-5">Frequently Asked Questions (FAQ)</h3>

      <h4>What is HKDai?</h4>
      <p>HKDai is a cryptocurrency which - similarly to the Hong Kong Dollar (HKD) - is pegged to the US Dollar (USD) at a rate of 7.8 HKD to 1 USD.</p>
      <p>While the HKD is pegged by the <a href="https://www.hkma.gov.hk/eng/" target="_blank" rel="noopener noreferrer">Hong Kong Monetary Authority (HKMA)</a> intervening in markets at certain price points (buy at 7.75HKD; sell at 7.85HKD),
      HKDai is 100% collateralized by <a href="https://makerdao.com/en/dai">Dai</a> - another cryptocurrency pegged to the US Dollar.</p>
      <p>This means that you can <em>always</em> redeem your HKDai for Dai at a rate of <em>exactly</em> 7.8 HKDai for 1 Dai. This is guaranteed via an open-source smart contract issued on the Ethereum blockchain.</p>

      <h4>Why HKDai?</h4>
      <p>HKDai gives the people of Hong Kong a familiar digital currency, with the benefits of the Ethereum blockchain.</p>
      <p>Specifically, HKDai:
        <ul>
          <li>requires no bank account - only a wallet which supports Ethereum.</li>
          <li>can be sent to anyone, anywhere in the world, within seconds</li>
          <li>has a stable value, as it is pegged to Dai at a constant rate of exactly 7.8 : 1</li>
          <li>cannot be blocked or intercepted by any intermediaries</li>
        </ul>
      </p>
      <p></p>

      <h4>How does HKDai work?</h4>
      <p>HKDai is based on a very simple smart contract. The main two features of the contract are <em>deposit</em> and <em>withdraw</em>:
      <ol>
      <li>Deposit lets you deposit Dai into the smart contract. You receive exactly 7.8 HKDai for every Dai you deposit. These 7.8 HKDai are created at the time of your deposit.</li>
      <li>Withdraw is the opposite operation: it lets you withdraw Dai from the smart contract. You must return 7.8 HKDai for every Dai you want to withdraw. The HKDai you return are taken out of circulation.</li>
      </ol>
      </p>
      <p>In addition to these two features, the smart contract implements the ERC20 standard for tokens on the Ethereum blockchain. You can see the smart contract in this open source repository</p>

      <h4>How can I get HKDai?</h4>
      <p>Firstly you need an Ethereum wallet, such as <a href="https://metamask.io/">Metamask</a>.</p>
      <p>Beyond receiving HKDai from other people, you can deposit Dai on this website and receive HKDai directly in your wallet, as described above.</p>
      <p>If you have Dai in your wallet (and some ETH to pay the fees), you should first approve HKDai to interact with your wallet. Then you simply enter the amount you would like to swap in the fields above, and click "Swap".</p>

      <h4>What's the current status and future of HKDai?</h4>
      <p>HKDai is currently in its very first iteration, which means it only supports the bare minimum: deposits/withdraws + basic ERC20 token functionality.</p>
      <p>A future version is planned to include interest-generation of the locked-up Dai (e.g. via Compound), which will be donated to a charitable cause supporting the people of Hong Kong.</p>

      <h4>Does it cost anything to use HKDai?</h4>
      <p>Although we charge no fee, there is a small fee paid to the Ethereum miners for processing your transaction. Normally this will not be more than $HK 1.00. You can check <a href="https://ethgasstation.info/">ETH Gas Station</a> to check the rates right now.</p>

      <h4>How do you profit from HKDai?</h4>
      <p>HKDai is a not-for-profit, open source project. Its contributors are all volunteers.</p>

      <h4>Are you planning to an ICO (initial coin offering)?</h4>
      <p>No.</p>

      <h4>How can I trust you - how do I know you're not scammers?</h4>
      <p>You don't have to trust us. You can verify all the code in our open source repositories (Github), and the smart contracts (e.g. via Etherscan).</p>

      <h4>Disclaimer</h4>
      <p>HKDai is an experimental project and has no affiliation with the Hong Kong Monetary Authority or the Hong Kong Dollar in any way. Usage of HKDai is entirely at your own risk.</p>
      
    </section>
  )
}
