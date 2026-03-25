"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  { q: "¿Mis clientes necesitan descargar una app?", a: "No. La carta abre directo desde la camara del celular al escanear el QR. No hay nada que instalar ni registrar. Funciona en iOS y Android." },
  { q: "¿Tengo que llevar mis platos a algun lado?", a: "Para nada. Nosotros vamos a tu local con todo el equipo. Tu solo tienes los platos listos — nosotros hacemos el resto. Tu restaurante sigue operando con normalidad durante la visita." },
  { q: "¿En cuanto tiempo tengo mi carta lista?", a: "En menos de una semana desde que tomamos las fotos. El proceso toma entre 5 y 7 dias habiles desde la sesion. Te avisamos en cada paso." },
  { q: "¿Puedo actualizar mi carta yo mismo?", a: "Si. Tienes un panel admin donde puedes activar o desactivar platos, cambiar precios y editar descripciones desde tu celular. Para agregar platos nuevos con foto y video, coordinamos una nueva visita." },
  { q: "¿Atienden fuera de Lima?", a: "Por ahora operamos en Lima Metropolitana. Si tu local esta en otra ciudad, escribenos — estamos evaluando expandirnos y nos gustaria conocer tu caso." },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ nombre: "", restaurante: "", contacto: "" });
  const [sent, setSent] = useState(false);

  const anim = (d: number) => ({ initial: reduced ? {} : { opacity: 0, y: 25 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay: d } });

  return (
    <section ref={ref} id="contacto" className="bg-cream py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* CTA Headline */}
        <motion.div {...anim(0)} className="text-center mb-14">
          <h2 className="heading text-[clamp(2.5rem,6vw,4rem)] text-text-primary mb-3">
            Se de los <span className="accent-serif text-brand-red">primeros.</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-xl mx-auto">
            Dejanos tus datos y te contactamos cuando estemos listos para ir a tu restaurante.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAQ */}
          <div>
            <h3 className="font-body font-bold text-text-primary mb-4">Preguntas frecuentes</h3>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <motion.div key={i} {...anim(0.15 + i * 0.05)} className="card-soft overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left" aria-expanded={open === i}>
                    <span className="font-body text-sm font-semibold text-text-primary pr-3">{faq.q}</span>
                    <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 text-brand-red text-sm" aria-hidden="true">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <p className="px-4 pb-4 font-body text-sm text-text-secondary">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Waitlist Form */}
          <motion.form {...anim(0.2)} onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            className="card-soft p-6 md:p-8 h-fit sticky top-24" noValidate
          >
            <h3 className="heading text-xl text-text-primary mb-1">Unete a la lista de espera</h3>
            <p className="font-body text-sm text-text-secondary mb-5">Te avisamos cuando estemos listos para visitarte.</p>

            <div className="flex flex-col gap-3.5">
              {[
                { id: "nombre", label: "Nombre", ph: "Tu nombre", auto: "name" },
                { id: "restaurante", label: "Restaurante", ph: "Nombre de tu restaurante", auto: "organization" },
                { id: "contacto", label: "WhatsApp o email", ph: "999 999 999", auto: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block font-body text-xs font-medium text-text-primary mb-1 uppercase tracking-wider">{f.label}</label>
                  <input id={f.id} name={f.id} type="text" autoComplete={f.auto} placeholder={f.ph}
                    value={form[f.id as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border-light font-body text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/20 focus-visible:border-brand-red transition-[border,box-shadow]"
                    required
                  />
                </div>
              ))}

              <button type="submit" className="w-full bg-brand-red text-white font-body font-bold text-sm py-3.5 rounded-full hover:bg-brand-red-dark transition-[background,box-shadow] hover:shadow-lg hover:shadow-brand-red/20 active:scale-[0.98] mt-1">
                {sent ? "¡Listo! Te contactamos pronto ✓" : "Quiero estar en la lista →"}
              </button>
            </div>

            <p className="font-body text-[11px] text-text-muted text-center mt-3">Sin spam. Sin compromiso. Solo te escribimos cuando estemos listos.</p>
          </motion.form>
        </div>

        <motion.div {...anim(0.5)} className="mt-10 text-center">
          <a href="https://wa.me/51999999999?text=Hola%20quiero%20saber%20mas%20sobre%20DISHPLAY" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-green-600 hover:text-green-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            O escribenos directo por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
