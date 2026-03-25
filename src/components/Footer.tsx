"use client";

export default function Footer() {
  return (
    <footer className="bg-dark-deep pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-border-dark">
          <div>
            <a href="#" className="heading text-xl tracking-tight text-text-on-dark mb-3 inline-block">
              <span className="text-brand-red">Dish</span>play
            </a>
            <p className="font-body text-sm text-text-on-dark-secondary max-w-xs leading-relaxed">
              Carta digital inmersiva con fotografia profesional, video y 3D para tu restaurante.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs font-bold text-text-on-dark mb-3 uppercase tracking-wider">Producto</h4>
            <ul className="flex flex-col gap-2">
              {[{ l: "Como funciona", h: "#como-funciona" }, { l: "Planes", h: "#planes" }, { l: "Contacto", h: "#contacto" }].map((x) => (
                <li key={x.l}><a href={x.h} className="font-body text-sm text-text-on-dark-secondary hover:text-text-on-dark transition-colors">{x.l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs font-bold text-text-on-dark mb-3 uppercase tracking-wider">Contacto</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="mailto:hola@dishplay.pe" className="font-body text-sm text-text-on-dark-secondary hover:text-text-on-dark transition-colors">hola@dishplay.pe</a></li>
              <li><a href="https://wa.me/51998027578" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text-on-dark-secondary hover:text-text-on-dark transition-colors">WhatsApp</a></li>
              <li><span className="font-body text-sm text-text-on-dark-secondary">Lima, Peru</span></li>
            </ul>
          </div>
        </div>
        <p className="font-body text-xs text-text-on-dark-secondary/50 pt-6 text-center">
          © 2026 DISHPLAY. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
