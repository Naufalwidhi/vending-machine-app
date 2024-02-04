// PurchaseButton.js
import React from 'react';

const PurchaseButton = ({ food, onPurchase }) => {
    const handlePurchase = () => {
        // Call the onPurchase callback with the food price
        const purchaseSuccess = onPurchase(food.price);

        if (purchaseSuccess) {
            console.log(`Purchased ${food.name} for ${food.price} coins.`);
        } else {
            console.log(`Unable to purchase ${food.name}. Insufficient funds.`);
        }
    };

    return (
        <button className="bg-green-600 text-white font-semibold py-2 px-4 w-full rounded-full" onClick={handlePurchase} disabled={food.stock === 0}>
            ORDER
        </button>
    );
};

export default PurchaseButton;
