import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto bg-gray-800 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="links flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8">
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#home">Home</a>
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#about">About</a>
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#menu">Menu</a>
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#products">Products</a>
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#review">Review</a>
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#contact">Contact</a>
            <a className="text-white hover:text-yellow-500 transition duration-300 rounded-xl" href="#blogs">Blogs</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
