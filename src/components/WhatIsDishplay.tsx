"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: "📱", title: "Carta digital con QR",
    desc: "URL propia de tu restaurante, QR listo para imprimir y panel admin para gestionar tu carta.",
    detail: "Tu carta en la mesa en dias, no semanas.",
  },
  {
    icon: "📸", title: "Fotografia profesional",
    desc: "Sesion en tu local con equipo profesional. Fotos que transmiten sabor, calidad y valor real del plato.",
    detail: "El cliente sabe que va a comer antes de pedirlo.",
  },
  {
    icon: "🎬", title: "Video de cada plato",
    desc: "Videos cortos de 15-30 seg. Perfectos para la carta y reutilizables en redes sociales.",
    detail: "Contenido para Instagram y TikTok incluido.",
  },
  {
    icon: "🥽", title: "Modelo 3D + Realidad Aumentada",
    desc: "El cliente coloca el plato en 3D en su propia mesa antes de pedirlo. Via AR, desde cualquier celular, sin app.",
    detail: "La experiencia que ningun competidor tiene todavia.",
    featured: true,
  },
];

export default function WhatIsDishplay() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (d: number) => ({ initial: reduced ? {} : { opacity: 0, y: 25 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: d } });

  return (
    <section ref={ref} className="bg-dark-deep py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div {...anim(0)}>
            <span className="inline-block bg-accent-teal/15 text-accent-teal font-body font-semibold text-xs tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5">
              La solucion
            </span>
            <h2 className="heading text-[clamp(2rem,5vw,3.5rem)] text-text-on-dark mb-4">
              Una carta digital completa.{" "}
              <span className="accent-serif text-brand-red">Nosotros hacemos todo.</span>
            </h2>
            <p className="font-body text-lg text-text-on-dark-secondary leading-relaxed">
              DISHPLAY convierte tu carta en una experiencia digital inmersiva con un QR en tu mesa. Tus clientes la abren desde cualquier celular — sin descargar nada — y pueden ver fotos profesionales, videos y modelos 3D de cada plato. Nosotros vamos a tu local, producimos todo el contenido y lo dejamos funcionando. Tu solo pones los platos.
            </p>
          </motion.div>

          <motion.div {...anim(0.2)} className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <Image
              src="https://images.unsplash.com/photo-1761314036709-f6f68a3d7cf1?w=700&h=500&fit=crop&q=80"
              alt="Ceviche peruano con camote y choclo — presentacion profesional"
              width={700} height={500} className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Feature cards - 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title} {...anim(0.1 + i * 0.08)}
              className={`glass-dark rounded-[1.25rem] p-6 flex flex-col ${f.featured ? "ring-2 ring-brand-red/30 relative" : ""}`}
            >
              {f.featured && (
                <span className="absolute -top-3 right-4 handwritten text-sm bg-brand-red text-white px-3 py-1 rounded-full">
                  WOW Factor
                </span>
              )}
              <span className="text-2xl mb-3" aria-hidden="true">{f.icon}</span>
              <h3 className="font-body font-bold text-text-on-dark mb-1.5">{f.title}</h3>
              <p className="font-body text-sm text-text-on-dark-secondary leading-relaxed mb-3 flex-1">{f.desc}</p>
              <span className="text-xs font-body font-semibold text-accent-teal">→ {f.detail}</span>
            </motion.div>
          ))}
        </div>

        <motion.div {...anim(0.6)} className="mt-12 text-center">
          <a href="#contacto" className="inline-block border-2 border-brand-red text-brand-red font-body font-bold px-7 py-3.5 rounded-full hover:bg-brand-red hover:text-white transition-[background,color] active:scale-[0.98]">
            Quiero estar en la lista →
          </a>
          <p className="font-body text-sm text-text-on-dark-secondary mt-3">Sin compromiso. Te avisamos cuando estemos listos.</p>
        </motion.div>
      </div>
    </section>
  );
}
