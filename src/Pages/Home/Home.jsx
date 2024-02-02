import React from 'react';
import CryptoStats from '../../components/CryptoStats/CryptoStats';
import CryptoTable from '../../components/CryptoTable/CryptoTable';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <CryptoStats />
            <CryptoTable />
            <Footer />
        </div>
    );
};

export default Home;