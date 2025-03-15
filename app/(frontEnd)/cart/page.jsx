"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartCard from "@/components/CartCard";

export default function Cart() {
  const [selectedItems, setSelectedItems] = useState({});

  // Sample cart items with different prices
  const cartItems = [
    { id: "item1", name: "Pizza", price: 200 },
    { id: "item2", name: "Burger", price: 150 },
    { id: "item3", name: "Pasta", price: 120 },
  ];

  // 🔥 Function to receive data from CartCard
  const handleUpdateItem = (itemId, isSelected, quantity, totalPrice) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: isSelected ? { quantity, totalPrice } : undefined,
    }));
  };

  // 🔥 Calculate Total Cart Price
  const totalCartPrice = Object.values(selectedItems)
    .filter((item) => item) // Remove undefined values
    .reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="flex-grow py-2 px-2 md:px-10">
      <h1 className="text-2xl font-medium p-3">Cart</h1>
      <div className="md:w-11/12 md:mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        <div className="col-span-9 flex flex-col gap-y-2">
          {/* Restaurant Sections */}
          <div className="flex flex-col gap-y-3 bg-gray-100 py-3 rounded-md">
            <div className="flex items-center gap-x-1.5 border-b border-gray-300 pb-2 px-5">
              <Link href="/">Restaurant Name</Link>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <CartCard 
                key={item.id} 
                itemId={item.id} 
                price={item.price} 
                onUpdate={handleUpdateItem} 
              />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-span-3 border p-3 flex flex-col gap-y-5 rounded-sm">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          {/* Coupon */}
          <div className="flex gap-x-1.5">
            <input type="text" placeholder="Apply Coupon Code" className="flex-grow border outline-gray-300 px-2.5 py-1.5 rounded-md" />
            <Button text="Apply" />
          </div>

          {/* Price Breakdown */}
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center justify-between font-semibold text-gray-600">
              <span>Subtotal</span>
              <div className="flex items-center gap-x-1">
                <Image src="/images/bdt.png" alt="Bangladeshi Taka" width={13} height={13} />
                <span>{totalCartPrice}</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-semibold text-gray-600">
              <span>Discount</span>
              <div className="flex items-center gap-x-1">
                <Image src="/images/bdt.png" alt="Bangladeshi Taka" width={13} height={13} />
                <span>120</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-semibold text-gray-600">
              <span>Delivery Charge</span>
              <div className="flex items-center gap-x-1">
                <Image src="/images/bdt.png" alt="Bangladeshi Taka" width={13} height={13} />
                <span>170</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-semibold text-gray-600">
              <span>Total</span>
              <div className="flex items-center gap-x-1">
                <Image src="/images/bdt.png" alt="Bangladeshi Taka" width={13} height={13} />
                <span>{totalCartPrice + 170 - 120}</span> {/* 🔥 Grand total */}
              </div>
            </div>
          </div>

          <button className="px-4 py-2 rounded-md text-white font-semibold bg-amber-500 hover:bg-amber-400 transitions cursor-pointer">
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
