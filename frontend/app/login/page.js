"use client";

import { useState } from "react";
import axios from "axios";

export default function Login(){

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleLogin = async(e)=>{

  e.preventDefault();

  try{

   const res = await axios.post(
    "http://localhost:5000/api/auth/login",
    {email,password}
   );

   localStorage.setItem("token",res.data.token);

   alert("Login Successful");

  }catch{
   alert("Login Failed");
  }

 };

 return(

 <div className="flex items-center justify-center h-screen bg-gray-100">

  <form
   onSubmit={handleLogin}
   className="bg-white p-8 rounded-xl shadow-md w-80"
  >

   <h2 className="text-2xl font-bold mb-6 text-center">
    Login
   </h2>

   <input
    className="w-full border p-2 mb-4 rounded"
    placeholder="Email"
    onChange={(e)=>setEmail(e.target.value)}
   />

   <input
    type="password"
    className="w-full border p-2 mb-4 rounded"
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button
    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
   >
    Login
   </button>

  </form>

 </div>

 );
}