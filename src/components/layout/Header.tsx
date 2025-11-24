"use client";

import { useState, useEffect } from "react";
import NavLinks from "./header/NavLinks";
import Logo from "./header/Logo";
import SearchBox from "./header/SearchBox";
import ActionButtons from "./header/ActionButtons";
import HamburgerButton from "./header/HamburgerButton";
import MobileMenu from "./header/MobileMenu";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const cartCount = 2;

  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handleLoginClick = () => {
    alert("Buka halaman login");
  };

  useEffect(() => {
    const sections = ["home", "tentang", "menu", "testimoni", "kontak"];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 250;
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
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          <Logo onClick={() => {
            setActiveSection("Home");
            handleScroll("Home");
          }} />

          <NavLinks
            active={activeSection}
            onNavigate={handleScroll}
          />

          <SearchBox />

          <ActionButtons
            cartCount={cartCount}
            onLoginClick={handleLoginClick} />

          <HamburgerButton
            isOpen={open}
            onClick={() => setOpen(!open)}
          />

        </div>
      </header>

      <MobileMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        activeSection={activeSection}
        onNavigate={handleScroll}
        cartCount={cartCount}
        onLoginClick={handleLoginClick}
      />
    </>
  );
}
