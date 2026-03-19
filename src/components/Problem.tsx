"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section ref={ref} className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div {...anim(0)} className="max-w-2xl mb-14">
          <h2 className="heading text-[clamp(2rem,5vw,3.5rem)] text-text-primary mb-4">
            Tu menu actual <span className="accent-serif text-brand-red">no esta vendiendo.</span>
          </h2>
          <p className="font-body text-lg text-text-secondary leading-relaxed">
            Cada plato sin buena foto es una venta que se fue a otro restaurante.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <motion.div {...anim(0.1)} className="card-soft p-2 overflow-hidden">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1610970879786-70b2cc0e8a9c?w=600&h=450&fit=crop&q=80"
                alt="Foto amateur de hamburguesa — iluminacion pobre, angulo plano"
                fill className="object-cover brightness-90 contrast-90 saturate-75"
              />
              <div className="absolute top-3 left-3 bg-red-500/90 text-white text-xs font-body font-bold px-3 py-1 rounded-full">
                Asi se ve hoy
              </div>
              {/* Simulated phone flash overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
            </div>
            <div className="p-4">
              <h3 className="font-body font-bold text-text-primary mb-1">Foto con celular</h3>
              <p className="font-body text-sm text-text-secondary">Flash, mal angulo, sin estilismo. Tu plato no se ve como sabe.</p>
            </div>
          </motion.div>

          <motion.div {...anim(0.2)} className="card-soft p-2 overflow-hidden ring-2 ring-accent-teal/30">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1625860633266-8707a63d6671?w=600&h=450&fit=crop&q=80"
                alt="Plato gourmet con salsa sobre ceramica negra — fotografia profesional"
                fill className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-accent-teal/90 text-white text-xs font-body font-bold px-3 py-1 rounded-full">
                Asi se ve con Dishplay
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-body font-bold text-text-primary mb-1">Foto profesional</h3>
              <p className="font-body text-sm text-text-secondary">Iluminacion, composicion y estilismo. Tu plato vende antes de llegar a la mesa.</p>
            </div>
          </motion.div>
        </div>

        {/* Stat */}
        <motion.div {...anim(0.4)} className="bg-text-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <span className="heading text-5xl md:text-7xl text-brand-red" style={{ fontVariationSettings: '"SOFT" 100' }}>+30%</span>
          <div>
            <p className="font-body text-text-on-dark text-lg leading-relaxed">
              Un menu visual profesional puede aumentar el ticket promedio entre un <strong className="text-accent-orange">20% y 30%</strong>.
            </p>
            <p className="font-body text-text-on-dark-secondary text-sm mt-2 handwritten-note" style={{ color: "rgba(255,255,255,0.5)" }}>
              imagina eso con modelos 3D en la mesa ↗
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
