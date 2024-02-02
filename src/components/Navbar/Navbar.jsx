import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [cryptoData, setCryptoData] = useState([]);
    const [selectedQuoteUnit, setSelectedQuoteUnit] = useState(null);
    const [selectedBaseUnit, setSelectedBaseUnit] = useState(null);

    const handleQuoteUnitChange = (event) => {
        setSelectedQuoteUnit(event.target.value);
    };

    const handleBaseUnitChange = (event) => {
        setSelectedBaseUnit(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/cryptos');
                const result = await response.json();
                console.log(result.data);
                if (result.success) {
                    setCryptoData(result?.data);
                } else {
                    console.error('Failed to fetch crypto data:', result.message);
                }
            } catch (error) {
                console.error('Error fetching crypto data:', error);
            }
        };

        fetchData();
    }, []);
    // const data = cryptoData.map(crypto => crypto.baseUnit)
    // console.log(data);
    return (
        <div className="navbar">
            <div className="logo">
                <h1>HODLINFO</h1>
            </div>
            <div className="buttons">
                <select value={selectedQuoteUnit} onChange={handleQuoteUnitChange} className="dropdown">
                    {cryptoData.map((crypto) => (
                        <option key={crypto.id} value={crypto.quoteUnit}>
                            {crypto.quoteUnit}
                        </option>
                    ))}
                </select>

                <select value={selectedBaseUnit} onChange={handleBaseUnitChange} className="dropdown">
                    {cryptoData.map((crypto) => (
                        <option key={crypto.id} value={crypto.baseUnit}>
                            {crypto.baseUnit}
                        </option>
                    ))}
                </select>
                <button>Buy</button>
            </div>
            <div className="right-section">
                <div className="circle">57</div>
                <button>Connect Telegram</button>
                <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default Navbar;