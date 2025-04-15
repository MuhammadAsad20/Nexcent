import React from 'react';
import Icon1 from '../assets/Images/icon1.png';

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={Icon1}
            alt="Logo Icon"
            
          />
          <span className="ml-3 text-3xl font-bold">Nexcent</span>
        </a>
        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto font-semibold text-md flex flex-wrap items-center text-base justify-center gap-x-6">
          <a className="hover:text-gray-900 cursor-pointer">Home</a>
          <a className="hover:text-gray-900 cursor-pointer">Service</a>
          <a className="hover:text-gray-900 cursor-pointer">Feature</a>
          <a className="hover:text-gray-900 cursor-pointer">Product</a>
          <a className="hover:text-gray-900 cursor-pointer">Testimonial</a>
          <a className="hover:text-gray-900 cursor-pointer">FAQ</a>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="inline-flex items-center font-semibold text-lg text-lime-600 bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base">
            Login
          </button>
          <button className="inline-flex items-center font-semibold text-lg bg-lime-600 text-white border-0 py-4 px-8 focus:outline-none hover:bg-lime-600 rounded text-base">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
