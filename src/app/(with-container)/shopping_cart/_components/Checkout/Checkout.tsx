"use client";

import React from "react";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
const Checkout = () => {
  const [cart, setCart] = useLocalStorageState<any[]>("cart");

  const handleDecrease = (id: number) => {
    setCart(
      cart?.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const handleIncrease = (id: number) => {
    setCart(
      cart?.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + 1, 1) }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Product</th>
                <th className="p-2">Image</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Price</th>
                <th className="p-2">
                  Total -(
                  {cart
                    ?.reduce(
                      (total, singleCart) =>
                        total + singleCart?.quantity * singleCart?.price,
                      0
                    )
                    .toFixed(2)}
                  )
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((singleCart, i) => {
                return (
                  <tr key={i}>
                    <td>{singleCart?.name}</td>
                    <td>
                      <Image
                        className="w-16 h-16 object-cover" // You can adjust the width and height as needed
                        src={singleCart?.image}
                        alt="Product image"
                        width={64} // Set width (example: 64px)
                        height={64} // Set height (example: 64px)
                      />
                    </td>
                    <td>
                      <div className="flex items-center">
                        {/* Minus Button */}
                        <button
                          className="px-3 py-2 text-red-700 text-3xl "
                          onClick={() => handleDecrease(singleCart.id)}
                        >
                          -
                        </button>

                        {/* Display Quantity */}
                        <span className="mx-2">{singleCart?.quantity}</span>

                        {/* Plus Button */}
                        <button
                          className="px-3 py-2 text-green-700 text-3xl "
                          onClick={() => handleIncrease(singleCart.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{singleCart?.price}</td>
                    <td>
                      {(singleCart?.quantity * singleCart?.price).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
