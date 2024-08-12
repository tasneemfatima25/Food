import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-yellow-400 w-full mx-auto container">
      <div className="mx-auto py-4 px-6 flex items-center justify-between">
        <Link className="text-yellow-400 text-2xl font-bold">
          FOOD TECH
        </Link> 
        <Link to="/" className="text-yellow-400 text-2xl font-bold">
        
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8 text-lg md:flex-grow md:justify-end">
          <Link to="/home" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
          <Link to="/review" className="hover:text-yellow-400">Review</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
        </nav>
        <button
          className="md:hidden text-2xl text-yellow-400"
          onClick={toggleNavbar}
        >
          ☰
        </button>
      </div>
      <nav
        className={`md:hidden flex flex-col items-center gap-4 py-4 bg-black text-lg ${isNavOpen ? 'block' : 'hidden'}`}
      >
        <Link to="/home" className="hover:text-yellow-400" onClick={toggleNavbar}>Home</Link>
        <Link to="/about" className="hover:text-yellow-400" onClick={toggleNavbar}>About</Link>
        <Link to="/menu" className="hover:text-yellow-400" onClick={toggleNavbar}>Menu</Link>
        <Link to="/products" className="hover:text-yellow-400" onClick={toggleNavbar}>Products</Link>
        <Link to="/review" className="hover:text-yellow-400" onClick={toggleNavbar}>Review</Link>
        <Link to="/contact" className="hover:text-yellow-400" onClick={toggleNavbar}>Contact</Link>
        <Link to="/blog" className="hover:text-yellow-400" onClick={toggleNavbar}>Blog</Link>
      </nav>
    </header>
  );
};

export default Navbar;
