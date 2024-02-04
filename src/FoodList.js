// FoodList.js
import React, { useState, useEffect } from 'react';

const FoodList = ({ onPurchase, foods }) => {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-4">Food List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map((food) => (
                    <div key={food.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img className="w-full h-40" src={food.image_url} alt={food.name} />
                        <h4 className="text-xl text-black font-medium mt-2">{food.name}</h4>
                        <p className="text-2xl text-green-600 font-bold">Rp. {food.price}</p>
                        <p className="text-gray-600 mb-2"> Stock {food.stock}</p>
                        <button className="bg-green-600 text-white font-semibold py-2 px-4 w-full rounded-full" onClick={() => onPurchase(food)} >
                            ORDER
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;
