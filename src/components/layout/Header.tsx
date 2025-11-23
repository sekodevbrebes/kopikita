"use client";

import { useState, useEffect } from "react";
import { Coffee, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import NavLinks from "./header/NavLinks";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Smooth scroll on click
  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // ScrollSpy: detect active section on scroll
  useEffect(() => {
    const sections = ["home", "tentang", "menu", "testimoni", "kontak"];

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 250; // tambah offset agar akurat

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center mr-3">
            <Coffee className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-amber-800">KopiKu</span>
        </div>

        {/* Desktop Navigation */}
        <NavLinks active={activeSection} onNavigate={handleScroll} />

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 max-w-md mx-8">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Cari menu favoritmu..."
            className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">
            <User className="w-4 h-4" />
            <span className="text-sm">Masuk</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6 text-amber-800" /> : <Menu className="w-6 h-6 text-amber-800" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 border-r border-gray-200 transform
        transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex flex-col space-y-6 mt-14">
          {["Home", "Menu", "Tentang", "Testimoni", "Kontak"].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`relative w-full text-left text-lg font-medium py-2 transition-colors cursor-pointer
              ${activeSection === item ? "text-amber-700" : "text-gray-700 hover:text-amber-700"}`}
            >
              {item}
            </button>
          ))}

          <hr />

          <button className="relative p-2 w-fit hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          <button className="flex items-center justify-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">
            <User className="w-4 h-4" />
            <span className="text-sm">Masuk</span>
          </button>
        </div>
      </div>
    </header>
  );
}
