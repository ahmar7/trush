import React from 'react';
import './CasesWhy.css'
const CasesWhy = () => {
    return (
      <section className="cases-why dapps">
        <div className="wrapper">
          <div className="cases-why__textBlock">
            <h2 className="main__title jss170">Why Trush?</h2>
            <p className="main__text opacity-tan">
              Choose Trush for an exceptional blockchain experience, designed with the user in mind. As the cornerstone of high-performance, sustainable, and secure blockchain technology, Trush handles thousands of transactions per second at low costs, ensuring rapid results without compromising security. Our innovative Trush Beacon Consensus, a blend of Proof of Stake and Proof of History, provides an eco-friendly solution that does not sacrifice speed or reliability. With Trush, you are stepping into a future where blockchain technology is user-friendly, efficient, and fully inclusive.
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

export default CasesWhy;
