"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const cards = [
  { icon: "🧾", title: "La carta no convence", desc: "Un PDF o una pizarra no transmiten sabor. El cliente no sabe si el plato vale el precio hasta que lo recibe — y a veces ya es demasiado tarde." },
  { icon: "📷", title: "Fotos que no venden", desc: "Un plato delicioso fotografiado con celular parece mediocre. La primera impresion visual lo es todo — y la tuya se esta perdiendo.", featured: true },
  { icon: "👨‍🍳", title: "Tu comida es buena. Nadie lo sabe.", desc: "Pusiste esfuerzo en cada plato. Pero si el cliente no puede verlo antes de pedirlo, ese esfuerzo no llega a la mesa. Tu cocina trabaja duro. Tu carta no." },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (delay: number) => ({ initial: reduced ? {} : { opacity: 0, y: 30 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay } });

  return (
    <section ref={ref} className="bg-white dark:bg-dark-surface py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div {...anim(0)} className="max-w-3xl mb-14">
          <h2 className="heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary dark:text-text-on-dark mb-4">
            Tu menu actual <span className="accent-serif text-brand-red">no esta vendiendo.</span>
          </h2>
          <p className="font-body text-lg text-text-secondary dark:text-text-on-dark-secondary leading-relaxed">
            Y probablemente ni lo sabes. Cada plato sin buena foto, sin video, sin experiencia visual — es una venta que se fue a otro restaurante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {cards.map((card, i) => (
            <motion.div key={card.title} {...anim(0.1 + i * 0.1)}
              className={`rounded-2xl p-6 md:p-7 flex flex-col ${card.featured ? "bg-brand-red text-white shadow-lg shadow-brand-red/15" : "card-soft"}`}
            >
              <span className="text-3xl mb-4" aria-hidden="true">{card.icon}</span>
              <h3 className={`font-body font-bold text-lg mb-2 ${card.featured ? "text-white" : "text-text-primary dark:text-text-on-dark"}`}>{card.title}</h3>
              <p className={`font-body text-sm leading-relaxed ${card.featured ? "text-white/85" : "text-text-secondary dark:text-text-on-dark-secondary"}`}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...anim(0.4)} className="bg-text-primary dark:bg-white/5 dark:backdrop-blur-xl dark:border dark:border-border-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <span className="heading text-5xl md:text-7xl text-brand-red" style={{ fontVariationSettings: '"SOFT" 100' }}>+30%</span>
          <div>
            <p className="font-body text-text-on-dark text-lg leading-relaxed">
              Los restaurantes con menu visual de calidad aumentan su ticket promedio hasta un <strong className="text-accent-orange">30%</strong>.
            </p>
            <p className="font-body text-sm mt-2 handwritten-note" style={{ color: "rgba(255,255,255,0.5)" }}>
              imagina ese numero con modelos 3D que el cliente puede poner en su mesa ↗
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
