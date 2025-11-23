"use client";

import { useEffect, useState } from "react";

export default function NavLinks({ onNavigate }) {
  const links = ["Home", "Tentang", "Menu", "Testimoni", "Kontak"];
  const [activeSection, setActiveSection] = useState("Home");

  // Detect section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      const scrollPos = window.scrollY + 200; // toleransi agar akurat

      sections.forEach((section, index) => {
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(links[index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onNavigate) onNavigate(item);
  };

  return (
    <nav className="hidden md:flex space-x-8">
      {links.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className={`relative font-medium cursor-pointer transition-colors
            ${
              activeSection === item
                ? "text-amber-700"
                : "text-gray-600 hover:text-amber-700"
            }
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px]
            after:bg-gradient-to-r after:from-amber-800 after:via-amber-600 after:to-yellow-400
            after:transition-all after:duration-300
            ${
              activeSection === item
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            }
          `}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
