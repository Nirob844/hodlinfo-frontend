// CryptoStats.js
import React from 'react';
import './CryptoStats.css'; // Import the styles

const CryptoStats = () => {
    return (
        <div>
            <p className='state-head'>Best Price to Trade</p>
            <div className="crypto-stats-container">
                <div className="crypto-stat">
                    <p className="percentage">0.79 %</p>
                    <p className="time-interval">5 Mins</p>
                </div>
                <div className="crypto-stat">
                    <p className="percentage">1.16 %</p>
                    <p className="time-interval">1 Hour</p>
                </div>
                <div className="crypto-stat best-price">
                    <p className="price">₹ 38,83,307</p>
                </div>
                <div className="crypto-stat">
                    <p className="percentage">2.25 %</p>
                    <p className="time-interval">1 Day</p>
                </div>
                <div className="crypto-stat">
                    <p className="percentage">3.71 %</p>
                    <p className="time-interval">7 Days</p>
                </div>
            </div>
            <p className='state-head'>Average BTC/INR net price including commission</p>
        </div>
    );
};

export default CryptoStats;
