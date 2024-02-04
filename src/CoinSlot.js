// CoinSlot.js
import React, { useState } from 'react';

const CoinSlot = ({ onInsertCoin, onPurchase, totalCoins }) => {
    const insertCoin = (value) => {
        onInsertCoin(value);
    };

    return (
        <div>
            <h3>Masukkan Uang Anda</h3>
            <p className='mb-2'>Total Coins: {totalCoins}</p>
            <div className='grid grid-cols-3 gap-4'>
                <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full" onClick={() => insertCoin(2000)}>Rp. 2000</button>
                <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full" onClick={() => insertCoin(5000)}>Rp. 5000</button>
                <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full" onClick={() => insertCoin(10000)}>Rp. 10000</button>
                <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full" onClick={() => insertCoin(20000)}>Rp. 20000</button>
                <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full" onClick={() => insertCoin(50000)}>Rp. 50000</button>
            </div>
        </div>
    );
};

export default CoinSlot;
