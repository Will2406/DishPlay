"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, []);

  const links = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow] duration-500 ${
          scrolled || mobileOpen ? "bg-dark-deep/90 backdrop-blur-xl shadow-sm border-b border-border-dark" : "bg-transparent"
        }`}
        role="navigation" aria-label="Principal"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            <a href="#" className="heading text-xl tracking-tight" aria-label="DISHPLAY">
              <span className="text-brand-red">Dish</span>
              <span className="text-text-on-dark">play</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="font-body text-sm font-medium text-text-on-dark-secondary hover:text-text-on-dark transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contacto" onClick={(e) => handleNavClick(e, "#contacto")} className="bg-brand-red text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-red-dark transition-[background] active:scale-95">
                Unirme a la lista
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label={mobileOpen ? "Cerrar" : "Menu"}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-text-on-dark transition-transform duration-300 ${mobileOpen ? "translate-y-[4px] rotate-45" : ""}`} aria-hidden="true" />
              <span className={`block w-5 h-0.5 bg-text-on-dark transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} aria-hidden="true" />
              <span className={`block w-5 h-0.5 bg-text-on-dark transition-transform duration-300 ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 z-[55] bg-dark-deep"
          >
            <div className="px-5 py-8 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="font-body text-lg font-medium text-text-on-dark-secondary hover:text-text-on-dark py-2 border-b border-border-dark"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="bg-brand-red text-white font-body font-semibold text-center px-6 py-3.5 rounded-full mt-4 text-base"
              >
                Unirme a la lista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
