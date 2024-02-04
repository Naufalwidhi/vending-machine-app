// FoodList.js
import React, { useState, useEffect } from 'react';
import PurchaseButton from './PurchaseButton';

const FoodList = ({ onPurchase }) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        // Fetch data from server
        fetch('http://localhost:3001/foods')
            .then((response) => response.json())
            .then((data) => setFoods(data));
    }, []);

    return (
        <div>
            <h3 className="text-3xl font-bold mb-4">Food List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map((food) => (
                    <div key={food.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img className="w-full h-40" src={food.image_url} alt={food.name} />
                        <h4 className="text-large text-black font-medium mb-2">{food.name}</h4>
                        <p className="text-xl text-green-600 font-bold mb-2">{food.price}</p>
                        <p className="text-gray-600 mb-2">{food.stock}</p>
                        <PurchaseButton food={food} onPurchase={onPurchase} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;
