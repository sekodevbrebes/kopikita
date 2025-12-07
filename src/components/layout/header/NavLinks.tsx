"use client";

import { useEffect, useState } from "react";

export default function NavLinks(
  props: {
    active?: string;
    onNavigate?: (section: string) => void;
  }
) {
  const { active = "Home", onNavigate } = props;

  const links = ["Home", "Tentang", "Menu", "Testimoni", "Kontak"];
  const [activeSection, setActiveSection] = useState<string>(active);

  useEffect(() => {
    setActiveSection(active);
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      links.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.(item);
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
