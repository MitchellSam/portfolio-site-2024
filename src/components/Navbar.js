import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between p-4 bg-gray-900 text-white">
    <h1 className="text-2xl font-bold">
        <a href="#home">Mitchell Sam</a>
    </h1>
    <div className="flex space-x-4">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

export default Navbar;
