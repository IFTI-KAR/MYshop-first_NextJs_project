import React from "react";
import { FaShoppingBag } from "react-icons/fa"; // Better icon for products

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-24 px-6 text-center">
      {/* Product Icon */}
      <div className="flex justify-center mb-6">
        <FaShoppingBag size={80} className="animate-bounce text-white" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Discover & Manage Your Products
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-2xl mb-8">
        Browse amazing products or add new items to your inventory effortlessly
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="/products"
          className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Explore Products
        </a>
        <a
          href="/login"
          className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition"
        >
          Login
        </a>
      </div>
    </section>
  );
}
