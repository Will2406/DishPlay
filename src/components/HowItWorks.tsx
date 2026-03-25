"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const steps = [
  {
    n: "01", who: "Tu",
    title: "Nos escribes",
    desc: "WhatsApp o formulario. Coordinamos la visita a tu local.",
    time: "5 min",
  },
  {
    n: "02", who: "Dishplay",
    title: "Escaneamos cada plato",
    desc: "Vamos a tu restaurante y capturamos cada plato con fotogrametria para generar los modelos 3D.",
    time: "Media jornada",
    highlight: true,
  },
  {
    n: "03", who: "Dishplay",
    title: "Armamos tu carta en 3D",
    desc: "Procesamos los modelos, editamos fotos y video, y montamos tu carta digital con QR y AR.",
    time: "< 1 semana",
    highlight: true,
  },
  {
    n: "04", who: "Tu",
    title: "QR en la mesa. Listo.",
    desc: "Tus clientes escanean y ven cada plato en 3D sobre su propia mesa antes de pedir.",
    time: "🚀 Live",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (d: number) => ({ initial: reduced ? {} : { opacity: 0, y: 25 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: d } });

  return (
    <section ref={ref} id="como-funciona" className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div {...anim(0.1)} className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1687068281755-45ad7855e2e8?w=700&h=500&fit=crop&q=80"
                alt="Camara profesional junto a un plato de comida — proceso de captura"
                width={700} height={500} className="w-full h-auto object-cover"
              />
            </div>
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-3 md:-right-6 card-soft px-5 py-3 flex items-center gap-3"
            >
              <span className="heading text-2xl text-brand-red" style={{ fontVariationSettings: '"SOFT" 100' }}>5</span>
              <div>
                <p className="text-xs font-bold text-text-primary">dias habiles</p>
                <p className="text-[10px] text-text-secondary">y tu carta esta lista</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Steps */}
          <div className="order-1 lg:order-2">
            <motion.div {...anim(0)}>
              <span className="inline-block bg-accent-orange/10 text-accent-orange font-body font-semibold text-xs tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5">
                Proceso simple
              </span>
              <h2 className="heading text-[clamp(2rem,5vw,3rem)] text-text-primary mb-8">
                Tu nos abres las puertas.{" "}
                <span className="accent-serif text-brand-red">Nosotros nos encargamos del resto.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-3">
              {steps.map((s, i) => (
                <motion.div key={s.n} {...anim(0.15 + i * 0.1)}
                  className={`flex gap-4 p-4 rounded-xl ${s.highlight ? "bg-brand-red/5" : "bg-cream/80"}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-body font-bold ${
                    s.highlight ? "bg-brand-red text-white" : "bg-border-light text-text-secondary"
                  }`}>
                    {s.n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-body font-bold text-text-primary text-sm">{s.title}</h3>
                      <span className="text-[10px] font-body text-text-muted">· {s.time}</span>
                    </div>
                    <p className="font-body text-sm text-text-secondary">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...anim(0.6)} className="flex flex-wrap gap-x-5 gap-y-1 mt-6 text-xs font-body text-text-secondary">
              <span>✓ Sin conocimiento tecnico</span>
              <span>✓ Tu local no para</span>
              <span>✓ Soporte incluido</span>
            </motion.div>

            <motion.div {...anim(0.65)} className="mt-5">
              <a href="#contacto" className="inline-block bg-text-primary text-white font-body font-bold text-sm px-7 py-3.5 rounded-full hover:bg-brand-red transition-[background] active:scale-[0.98]">
                Quiero estar en la lista →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
