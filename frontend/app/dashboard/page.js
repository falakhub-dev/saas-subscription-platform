"use client";

export default function Dashboard(){

 return(

  <div className="p-10 bg-gray-100 min-h-screen">

   <h1 className="text-3xl font-bold mb-8">
    Dashboard
   </h1>

   <div className="grid grid-cols-3 gap-6">

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold">Active Plan</h2>
      <p className="text-gray-500">Pro Plan</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold">Payments</h2>
      <p className="text-gray-500">View billing history</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold">Usage</h2>
      <p className="text-gray-500">API usage analytics</p>
    </div>

   </div>

  </div>

 );
}