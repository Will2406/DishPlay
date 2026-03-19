"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: "📱", title: "Carta digital con QR",
    desc: "URL propia, QR listo para imprimir y panel admin desde tu celular.",
    detail: "Lista en 5 dias.",
  },
  {
    icon: "📸", title: "Fotografia profesional",
    desc: "Sesion en tu local. Fotos que hacen que tu plato hable.",
    detail: "El cliente sabe que va a comer.",
  },
  {
    icon: "🎬", title: "Video de cada plato",
    desc: "Videos de 15-30s con textura, vapor y frescura. Para tu carta y redes.",
    detail: "Instagram y TikTok incluido.",
  },
  {
    icon: "🥽", title: "3D + Realidad Aumentada",
    desc: "El cliente coloca el plato en 3D en su mesa. Sin app.",
    detail: "La experiencia que nadie tiene.",
    featured: true,
  },
];

export default function WhatIsDishplay() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (d: number) => ({ initial: reduced ? {} : { opacity: 0, y: 25 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: d } });

  return (
    <section ref={ref} className="bg-cream py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div {...anim(0)}>
            <span className="inline-block bg-accent-teal/10 text-accent-teal font-body font-semibold text-xs tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5">
              La solucion
            </span>
            <h2 className="heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary mb-4">
              Tu pones los platos.{" "}
              <span className="accent-serif text-brand-red">Nosotros los hacemos irresistibles.</span>
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              DISHPLAY convierte tu carta en una experiencia visual. Tus clientes ven fotos,
              videos y modelos 3D desde cualquier celular.
            </p>
            <span className="handwritten-note inline-block mt-3 rotate-[-2deg]">nosotros nos encargamos de todo ↗</span>
          </motion.div>

          <motion.div {...anim(0.2)} className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1761314036709-f6f68a3d7cf1?w=700&h=500&fit=crop&q=80"
              alt="Ceviche peruano con camote y choclo — presentacion profesional"
              width={700} height={500} className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title} {...anim(0.1 + i * 0.08)}
              className={`card-soft p-6 flex flex-col ${f.featured ? "ring-2 ring-brand-red/20 relative" : ""}`}
            >
              {f.featured && (
                <span className="absolute -top-3 right-4 handwritten text-sm bg-brand-red text-white px-3 py-1 rounded-full">
                  WOW Factor
                </span>
              )}
              <span className="text-2xl mb-3" aria-hidden="true">{f.icon}</span>
              <h3 className="font-body font-bold text-text-primary mb-1.5">{f.title}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-3 flex-1">{f.desc}</p>
              <span className="text-xs font-body font-semibold text-accent-teal">→ {f.detail}</span>
            </motion.div>
          ))}
        </div>

        <motion.div {...anim(0.6)} className="mt-12 text-center">
          <a href="#contacto" className="inline-block bg-text-primary text-white font-body font-bold px-7 py-3.5 rounded-full hover:bg-brand-red transition-[background] active:scale-[0.98]">
            Ver demo gratis
          </a>
          <p className="font-body text-sm text-text-secondary mt-3">Sin compromiso. Te mostramos con platos reales.</p>
        </motion.div>
      </div>
    </section>
  );
}
