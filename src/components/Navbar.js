import React from 'react';

const Navbar = () => (
  <div className="navbar bg-base-100 shadow-lg">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl" href="#home">Mitchell Sam</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
