"use client";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        SaaS Platform
      </h1>

      <div className="space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/register" className="hover:underline">Register</a>
        <a href="/login" className="hover:underline">Login</a>
        <a href="/plans" className="hover:underline">Plans</a>
      </div>

    </nav>
  );
}