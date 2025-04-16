"use client";
// import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky flex justify-between items-center gap-2 px-6 h-15 bg-black text-white border-b-4 border-white border-double text-sm ">
      <nav className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/auth/product">Product</Link>
        <Link href="/about">About</Link>
      </nav>
      <h1 className="font-bold text-2xl">Amazing Cart</h1>
      <div className="flex gap-4">
        {/* <Search /> */}
        <Link href="/auth/signup">Sign Up</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;
