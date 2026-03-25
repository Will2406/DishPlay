"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function Plans() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const anim = (d: number) => ({ initial: reduced ? {} : { opacity: 0, y: 25 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: d } });

  return (
    <section ref={ref} id="planes" className="bg-dark-deep py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div {...anim(0)}>
          <span className="inline-block glass-dark text-brand-red font-body font-semibold text-xs tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5">
            Acceso anticipado
          </span>
          <h2 className="heading text-[clamp(2rem,5vw,3.5rem)] text-text-on-dark mb-4">
            Estamos eligiendo los primeros{" "}
            <span className="accent-serif text-brand-red">restaurantes.</span>
          </h2>
          <p className="font-body text-lg text-text-on-dark-secondary leading-relaxed max-w-xl mx-auto mb-4">
            DISHPLAY esta en fase de lanzamiento. Buscamos restaurantes que quieran ser los primeros en ofrecer su carta en 3D y Realidad Aumentada en Peru.
          </p>
          <p className="font-body text-text-on-dark-secondary/60 mb-10">
            Los primeros en la lista tendran condiciones especiales de lanzamiento.
          </p>
        </motion.div>

        {/* What you get */}
        <motion.div {...anim(0.15)} className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "🎯", text: "Acceso antes que nadie" },
            { icon: "💰", text: "Precio especial de lanzamiento" },
            { icon: "🥽", text: "Carta 3D + AR incluida" },
          ].map((item) => (
            <div key={item.text} className="glass-dark rounded-xl p-5 flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-body text-sm font-medium text-text-on-dark">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...anim(0.25)}>
          <a href="#contacto" className="inline-block bg-brand-red text-white font-body font-bold px-8 py-4 rounded-full hover:bg-brand-red-dark transition-[background,box-shadow] hover:shadow-lg hover:shadow-brand-red/20 active:scale-[0.98] text-base">
            Quiero estar en la lista →
          </a>
          <p className="font-body text-sm text-text-on-dark-secondary/50 mt-4">Sin compromiso. Te contactamos cuando estemos listos.</p>
        </motion.div>
      </div>
    </section>
  );
}
