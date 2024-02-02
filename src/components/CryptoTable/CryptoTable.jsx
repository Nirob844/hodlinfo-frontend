// CryptoTable.js
import React, { useEffect, useState } from 'react';
import './CryptoTable.css'; // Import the styles

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);

    const calculateDifferenceAndSaving = (cryptoItem) => {
        const difference = cryptoItem.sell - cryptoItem.buy;
        const saving = difference !== 0 ? ((difference / cryptoItem.sell) * 100).toFixed(2) : 0;

        return {
            ...cryptoItem,
            difference,
            saving,
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/cryptos');
                const result = await response.json();

                if (result.success) {
                    const updatedData = result.data.map(calculateDifferenceAndSaving);

                    setCryptoData(updatedData);
                } else {
                    console.error('Failed to fetch data:', result.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <table className="crypto-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Platform</th>
                    <th>Last Trade Price</th>
                    <th>Buy / Sell Price</th>
                    <th>Difference</th>
                    <th>Saving</th>
                </tr>
            </thead>
            <tbody>
                {cryptoData.map((cryptoItem, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{cryptoItem.name}</td>
                        <td>₹ {cryptoItem.last}</td>
                        <td>₹ {`${cryptoItem.buy} / ₹ ${cryptoItem.sell}`}</td>
                        <td>{`${(cryptoItem.difference / cryptoItem.sell * 100).toFixed(2)}%`}</td> {/* Update this line */}
                        <td>{`${cryptoItem.saving}%`}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable;
