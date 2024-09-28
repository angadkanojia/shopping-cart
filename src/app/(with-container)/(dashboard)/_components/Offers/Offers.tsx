"use client";

import React from "react";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";

import { Products, ProductType } from "@/common/data/product/product";

const Offers = () => {
  const [cart, setCart] = useLocalStorageState<any[]>("cart", {
    defaultValue: [],
  });

  const addToCart = (product: ProductType) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product exists in the cart, increase its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product doesn't exist, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    console.log(cart);
  };

  return (
    <section className="bg-[#F8ECD7] text-center font-bold text-2xl p-10">
      <h1 className="mb-5">OUR TOP OFFERS</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5">
        {Products.map((singleProduct) => {
          return (
            <div
              className="offerCart rounded-lg overflow-hidden"
              key={singleProduct?.id}
            >
              <div className="relative">
                <Image
                  className="object-cover object-top w-full max-h-[300px]"
                  src={singleProduct?.image}
                  alt="banner"
                  width={400}
                  height={400}
                />
              </div>
              <div className="py-2">
                <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {singleProduct?.name}
                </h5>
                <div className="flex justify-between items-center gap-5 text-base font-normal">
                  <p className="text-gray-700 dark:text-gray-400">
                    <span>₹</span>
                    {singleProduct?.price}
                  </p>
                  <button
                    onClick={() => addToCart(singleProduct)}
                    type="button"
                    className="inline-flex items-center"
                  >
                    Add To Cart
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
