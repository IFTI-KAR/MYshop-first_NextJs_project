"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
        <p className="text-gray-600 mb-6">Login using your Google account</p>

        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 border rounded-2xl hover:bg-gray-100 transition font-semibold text-gray-800"
        >
          <FaGoogle className="text-red-500" /> Login with Google
        </button>

        <p className="text-gray-500 text-sm mt-6">
          By logging in, you agree to our{" "}
          <span className="text-green-500 font-semibold">Terms of Service</span> and{" "}
          <span className="text-green-500 font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
