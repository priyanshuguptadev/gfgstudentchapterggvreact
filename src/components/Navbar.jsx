// components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-700 text-white">
      <div>
        <img
          src="/assets/gfg-student-chapter-logo.png"
          alt="GFG Logo"
          className="w-16"
        />
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">HOME</a>
        <a href="#" className="hover:underline">EVENTS</a>
        <a href="#" className="hover:underline">CONTACT</a>
        <a href="#" className="hover:underline">KNOW MORE</a>
      </div>
    </nav>
  );
};

export default Navbar;
