"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

export default function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) => reduced ? {} : { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay } };

  return (
    <section id="main-content" className="relative overflow-hidden">
      <AnimatedGradientBackground
        Breathing
        startingGap={110}
        breathingRange={8}
        animationSpeed={0.015}
        topOffset={10}
        gradientColors={[
          "#0D0D0F",
          "#E6394640",
          "#F4A26130",
          "#0D948825",
          "#0D0D0F",
        ]}
        gradientStops={[25, 45, 60, 75, 100]}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <motion.div {...fade(0.1)}>
              <span className="inline-block bg-brand-red/10 text-brand-red font-body font-semibold text-xs tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-5">
                Nuevo en Peru
              </span>

              <h1 className="heading text-[clamp(2.5rem,6vw,4.5rem)] text-text-on-dark mb-5">
                Tu cliente escanea.{" "}
                <span className="accent-serif text-brand-red">Ve el plato en 3D.</span>{" "}
                Pide.
              </h1>

              <p className="font-body text-lg text-text-on-dark-secondary leading-relaxed max-w-lg">
                DISHPLAY convierte tu carta en una experiencia digital inmersiva: fotos profesionales, video y modelos 3D de cada plato — accesibles con un QR desde cualquier celular. Nosotros vamos a tu local, producimos todo, y tu carta queda lista en dias.
              </p>
            </motion.div>

            <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-3 mt-1">
              <a href="#contacto" className="bg-brand-red text-white font-body font-bold text-base px-7 py-3.5 rounded-full hover:bg-brand-red-dark transition-[background,box-shadow] hover:shadow-lg hover:shadow-brand-red/20 active:scale-[0.98] text-center">
                Quiero estar en la lista →
              </a>
              <a href="#como-funciona" className="font-body font-semibold text-base text-text-on-dark-secondary hover:text-text-on-dark transition-colors flex items-center justify-center gap-1.5 px-4 py-3.5">
                Ver como funciona →
              </a>
            </motion.div>

            <motion.div {...fade(0.5)} className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
              {["Sin app que descargar", "Lista en dias", "Nosotros hacemos todo"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-body text-text-on-dark-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div {...fade(0.3)} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <Image
                src="https://images.unsplash.com/photo-1548809685-e3831a2aaa5f?w=800&h=600&fit=crop&q=80"
                alt="Persona fotografiando un plato de comida con su celular"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-dark-deep/85 backdrop-blur-xl border border-border-dark rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-on-dark">Foto + Video + 3D</p>
                  <p className="text-xs text-text-on-dark-secondary">Todo incluido</p>
                </div>
              </div>
            </div>

            {/* Floating card - right */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -right-3 md:-right-6 top-8 bg-dark-deep/85 backdrop-blur-xl border border-border-dark rounded-[1.25rem] px-4 py-3 flex items-center gap-2.5"
            >
              <span className="text-2xl">🥽</span>
              <div>
                <p className="text-xs font-bold text-text-on-dark">Realidad Aumentada</p>
                <p className="text-[10px] text-text-on-dark-secondary">Sin app, desde el celular</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
