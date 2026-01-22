import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
  
    return (
         <div className="flex h-20 items-center px-6 shadow-lg">
      <Link className="w-1/4 text-red-500 font-bold text-3xl" href="">
        Shop Swift
      </Link>
      <div className="w-1/2 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/register">
        <button className="w-1/4 ">Register</button>
      </Link>
    </div>
    )
}

export default Navbar