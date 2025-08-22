"use client";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("🛑 Please fill in all fields");
      return;
    }
    setError("");
    alert("Login submitted (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 flex items-center gap-2">
            🛑 {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-2xl font-semibold hover:bg-green-600 shadow-lg hover:shadow-xl transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border rounded-2xl hover:bg-gray-100 transition font-semibold">
            <FaGoogle /> Login with Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border rounded-2xl hover:bg-gray-100 transition font-semibold">
            <FaFacebookF /> Login with Facebook
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="inline-block text-green-500 font-semibold px-2 py-1 rounded hover:bg-green-100 hover:text-green-700 transition"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
