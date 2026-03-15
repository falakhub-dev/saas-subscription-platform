"use client";

import { useState } from "react";
import axios from "axios";

export default function Register(){

 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const handleSubmit = async (e)=>{

  e.preventDefault();

  try{

   await axios.post(
    "http://localhost:5000/api/auth/register",
    {name,email,password}
   );

   alert("User Registered Successfully");

  }catch(error){
   alert("Registration Failed");
  }

 };

 return(

  <div className="flex items-center justify-center min-h-screen bg-gray-100">

   <form
    onSubmit={handleSubmit}
    className="bg-white p-8 rounded-xl shadow-lg w-96"
   >

    <h2 className="text-2xl font-bold text-center mb-6">
     Create Account
    </h2>

    <input
     className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
     placeholder="Name"
     onChange={(e)=>setName(e.target.value)}
    />

    <input
     className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
     placeholder="Email"
     onChange={(e)=>setEmail(e.target.value)}
    />

    <input
     type="password"
     className="w-full border border-gray-300 p-2 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
     placeholder="Password"
     onChange={(e)=>setPassword(e.target.value)}
    />

    <button
     className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
    >
     Register
    </button>

   </form>

  </div>

 );

}