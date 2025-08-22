"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import { FaPlus, FaBoxOpen } from "react-icons/fa";

export default function Dashboard() {
  const { data: session, status } = useSession();

  // Redirect to Google login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google");
    }
  }, [status]);

  if (status === "loading") return <p className="text-center mt-12">Loading...</p>;
  if (!session) return null;

  return (
    <div className="max-w-5xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Dashboard
      </h1>

      <p className="text-center mb-8 text-gray-700">
        Welcome, <span className="font-semibold">{session.user.name}</span>!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Add New Product Card */}
        <Link
          href="/dashboard/add-product"
          className="flex flex-col items-center justify-center p-8 bg-blue-500 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-600 transition duration-300"
        >
          <FaPlus size={50} className="mb-4" />
          <h2 className="text-2xl font-semibold">Add New Product</h2>
          <p className="text-center mt-2 text-white/90">
            Add new products to your inventory with ease.
          </p>
        </Link>

        {/* View Products Card */}
        <Link
          href="/products"
          className="flex flex-col items-center justify-center p-8 bg-green-500 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:bg-green-600 transition duration-300"
        >
          <FaBoxOpen size={50} className="mb-4" />
          <h2 className="text-2xl font-semibold">View Products</h2>
          <p className="text-center mt-2 text-white/90">
            Browse all your products and manage them easily.
          </p>
        </Link>
      </div>
    </div>
  );
}
