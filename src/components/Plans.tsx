"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const plans = [
  {
    name: "Esencial", sub: "Carta Digital",
    desc: "Para restaurantes que quieren dar el salto digital con calidad profesional.",
    imp: "S/.XXX", mo: "S/.XXX",
    features: ["Carta digital con QR propio", "Fotografia profesional", "Panel admin desde tu celular", "Soporte incluido", "Sin app para tus clientes"],
    cta: "Empezar con lo esencial →",
  },
  {
    name: "Inmersivo", sub: "Carta 3D",
    desc: "La experiencia que ningun competidor tiene todavia.",
    imp: "S/.XXX", mo: "S/.XXX",
    features: ["Todo lo del plan Esencial", "Video de cada plato", "Modelo 3D fotorrealista", "Realidad Aumentada en la mesa", "Nadie mas lo ofrece en Peru"],
    cta: "Quiero la experiencia completa →",
    featured: true, badge: "el mas elegido",
  },
];

export default function Plans() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (d: number) => ({ initial: reduced ? {} : { opacity: 0, y: 25 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: d } });

  return (
    <section ref={ref} id="planes" className="bg-dark-deep py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div {...anim(0)} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-dark text-brand-red font-body font-semibold text-xs tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5">
            Planes
          </span>
          <h2 className="heading text-[clamp(2rem,5vw,3.5rem)] text-text-on-dark mb-3">
            Dos planes. <span className="accent-serif text-brand-red">Un objetivo.</span>
          </h2>
          <p className="font-body text-lg text-text-on-dark-secondary">Sin contratos largos, sin letra pequeña.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <motion.div key={p.name} {...anim(0.15 + i * 0.1)}
              className={`relative rounded-2xl p-7 md:p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "bg-white text-text-primary ring-2 ring-brand-red shadow-xl"
                  : "glass-dark text-text-on-dark hover:bg-white/[0.08]"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 handwritten text-sm bg-brand-red text-white px-4 py-1.5 rounded-full shadow-lg">
                  ⭐ {p.badge}
                </span>
              )}

              <h3 className="heading text-2xl mb-0.5">{p.name}</h3>
              <p className={`font-body text-sm font-medium mb-3 ${p.featured ? "text-brand-red" : "text-accent-teal"}`}>{p.sub}</p>
              <p className={`font-body text-sm mb-5 ${p.featured ? "text-text-secondary" : "text-text-on-dark-secondary"}`}>{p.desc}</p>

              <div className={`rounded-xl p-4 mb-5 ${p.featured ? "bg-cream" : "bg-white/5"}`}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={p.featured ? "text-text-secondary" : "text-text-on-dark-secondary"}>Implementacion</span>
                  <span className={`font-bold ${p.featured ? "text-text-primary" : "text-text-on-dark"}`}>{p.imp} <span className="font-normal opacity-60 text-xs">unico</span></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={p.featured ? "text-text-secondary" : "text-text-on-dark-secondary"}>Plataforma</span>
                  <span className={`font-bold ${p.featured ? "text-text-primary" : "text-text-on-dark"}`}>{p.mo} <span className="font-normal opacity-60 text-xs">/mes</span></span>
                </div>
              </div>

              <ul className="flex flex-col gap-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.featured ? "text-brand-red" : "text-accent-teal"}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`font-body text-sm ${p.featured ? "text-text-primary" : "text-text-on-dark-secondary"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={`block text-center font-body font-bold text-sm py-3.5 rounded-full transition-[background,box-shadow] active:scale-[0.98] ${
                p.featured ? "bg-brand-red text-white hover:bg-brand-red-dark shadow-lg shadow-brand-red/20" : "glass-dark text-text-on-dark hover:bg-white/10"
              }`}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
