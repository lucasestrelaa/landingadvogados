import React from "react";

const Header = () => (
  <header className="fixed w-full bg-white shadow-md z-50">
    <nav className="container w-10/12 mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Advocacia</h1>
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li><a href="#about" className="hover:text-indigo-600">Sobre</a></li>
        <li><a href="#services" className="hover:text-indigo-600">Áreas</a></li>
        <li><a href="#team" className="hover:text-indigo-600">Time</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contato</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
