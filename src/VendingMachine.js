// VendingMachine.js
import React, { useState } from 'react';
import FoodList from './FoodList';
import CoinSlot from './CoinSlot';
import insufficientFundsModal from './modal'
import Modal from './modal';

const VendingMachine = () => {
    const [totalCoins, setTotalCoins] = useState(0);
    const [insufficientFundsModal, setInsufficientFundsModal] = useState(false);

    const handleInsertCoin = (value) => {
        setTotalCoins(totalCoins + value);
    };

    const handlePurchase = (price) => {
        // Check if there's enough money for the purchase
        if (totalCoins >= price) {
            // Deduct the purchase price from totalCoins
            setTotalCoins(totalCoins - price);
            return true;
        } else {
            setInsufficientFundsModal(true);
            return false;
        }
    };
    const handleCloseModal = () => {
        setInsufficientFundsModal(false);
    };

    return (
        <div className='font-sans'>
            <h1 className='text-3xl	font-bold'>Vending Machine</h1>
            <div className="flex" >
                <div className="w-8/12 h-full p-4">
                    <FoodList onPurchase={handlePurchase} />
                </div>
                <div className="w-4/12 p-4">
                    <CoinSlot onInsertCoin={handleInsertCoin} totalCoins={totalCoins} />
                </div>

                <Modal isOpen={insufficientFundsModal} onClose={handleCloseModal} message="Insufficient funds. Please insert more coins." />
            </div>
        </div>
    );
};

export default VendingMachine;
