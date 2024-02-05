// VendingMachine.js
import React, { useState, useEffect } from 'react';
import FoodList from './FoodList';
import CoinSlot from './CoinSlot';
import Modal from './modal';


const VendingMachine = () => {
    const [totalCoins, setTotalCoins] = useState(0);
    const [insufficientFundsModal, setInsufficientFundsModal] = useState(false);
    const [emptyStockModal, setEmptyStockModal] = useState(false);
    const [successOrderModal, setSuccessOrderModal] = useState(false);
    const [purchasedProductName, setPurchasedProductName] = useState('');
    const [remainingAmount, setRemainingAmount] = useState(0);

    const handleInsertCoin = (value) => {
        setTotalCoins(totalCoins + value);
    };

    const handlePurchase = (food) => {
        // Check if there's enough money for the purchase
        if (totalCoins >= food.price) {
            // Check if the item is in stock
            if (food.stock > 0) {
                // Deduct the purchase price from totalCoins
                setTotalCoins(totalCoins - food.price);

                // Decrease the stock of the purchased item
                const updatedFoodList = foods.map(item =>
                    item.id === food.id ? { ...item, stock: item.stock - 1 } : item
                );

                setFoods(updatedFoodList);
                setPurchasedProductName(food.name);
                setRemainingAmount(remainingAmount);
                setSuccessOrderModal(true);

                return true;
            } else {
                // If item is out of stock, show emptyStockModal
                setEmptyStockModal(true);
                return false;
            }
        } else {
            // If not enough funds, show insufficientFundsModal
            setInsufficientFundsModal(true);
            return false;
        }
    };

    const handleCloseModal = () => {
        setInsufficientFundsModal(false);
        setEmptyStockModal(false);
        setSuccessOrderModal(false);
    };

    const [foods, setFoods] = useState([]);
    // Fetch data from server
    useEffect(() => {
        fetch('http://localhost:3001/foods')
            .then((response) => response.json())
            .then((data) => setFoods(data));
    }, []);

    return (
        <div className='font-sans'>
            <h1 className='text-3xl	font-bold'>Vending Machine</h1>
            <div className="flex" >
                <div className="w-8/12 h-full p-4">
                    <FoodList foods={foods} onPurchase={handlePurchase} />
                </div>
                <div className="w-4/12 p-4">
                    <CoinSlot onInsertCoin={handleInsertCoin} totalCoins={totalCoins} />
                </div>
                <Modal isOpen={insufficientFundsModal} onClose={handleCloseModal} message="Insufficient funds. Please insert more coins." />
                <Modal isOpen={emptyStockModal} onClose={handleCloseModal} message="Sorry, this item is out of stock." />
                <Modal
                    isOpen={successOrderModal}
                    onClose={handleCloseModal}
                    message={`Order successful! Enjoy your ${purchasedProductName}. Remaining amount: Rp. ${remainingAmount}`}
                    isSuccess
                />
            </div>
        </div>
    );
};

export default VendingMachine;
