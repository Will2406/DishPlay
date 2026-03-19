"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow] duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border-light" : "bg-transparent"
      }`}
      role="navigation" aria-label="Principal"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <a href="#" className="heading text-xl tracking-tight" aria-label="DISHPLAY">
            <span className="text-brand-red">Dish</span>
            <span className="text-text-primary">play</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contacto" className="bg-brand-red text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-red-dark transition-[background] active:scale-95">
              Pedir demo
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5" aria-label={mobileOpen ? "Cerrar" : "Menu"} aria-expanded={mobileOpen}>
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : {}} className="block w-5 h-0.5 bg-text-primary" aria-hidden="true" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : {}} className="block w-5 h-0.5 bg-text-primary" aria-hidden="true" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : {}} className="block w-5 h-0.5 bg-text-primary" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border-light">
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="font-body text-base text-text-secondary hover:text-text-primary py-1">{l.label}</a>
              ))}
              <a href="#contacto" onClick={() => setMobileOpen(false)} className="bg-brand-red text-white font-body font-semibold text-center px-6 py-3 rounded-full mt-2">Pedir demo</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
