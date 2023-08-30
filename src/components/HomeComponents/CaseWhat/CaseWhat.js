import React from 'react';
import './CaseWhat.css'
const CaseWhat = () => {
    return (
      <section className="cases-why dapps">
        <div className="wrapper">
          <div className="cases-why__textBlock">
            <h2 className="main__title jss170">What is Trush?</h2>
            <p className="main__text opacity-tan">
              Trush Network is a pioneering, Layer 1 blockchain platform designed for full compatibility with Ethereum Virtual Machine (EVM). Our mission is to tackle major hurdles like scalability, security, and decentralization that limit blockchain technology's mass adoption. Using our unique Trush Beacon Consensus, we provide high-speed, sustainable operations while promoting true decentralization. Trush encourages a community-driven governance model, promote seamless interoperability, and ensure secure, low-fee transactions. Trush Network, poised at the frontier of decentralized applications (DApps) and finance (DeFi), pledges unwavering commitment to user-centricity, performance, and global adoption.
            </p>
          </div>
          <div className="cases-why__column">
            <div className="cases-why__column-item">
              <p className="cases-why__column-item__value jss170">$0.00001</p>
              <p className="main__text">Transaction Fee:</p>
            </div>
            <div className="cases-why__column-item">
              <p className="cases-why__column-item__value jss170">1.8 second</p>
              <p className="main__text">Transaction Finality:</p>
            </div>
            <div className="cases-why__column-item">
              <p className="cases-why__column-item__value jss170">50 000+</p>
              <p className="main__text">Transactions per second</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CaseWhat;
