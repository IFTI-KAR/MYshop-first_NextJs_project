"use client"; // required for useSession and signOut

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Brand / Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-400">
        MyShop
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-300">
          Products
        </Link>
        <Link href="/dashboard" className="hover:text-blue-300">
          Dashboard
        </Link>
      </div>

      {/* Auth Buttons */}
      <div>
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
