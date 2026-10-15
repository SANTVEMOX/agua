import { Droplet } from 'lucide-react';

export const ContactFooter = () => {
  return (
    <>
      <section id="contacto" className="py-24 bg-altpro-navy text-altpro-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-altpro-blue/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">El siguiente paso en la evolución del agua.</h2>
            <p className="text-altpro-graySec text-lg mb-8">Conoce ALTpro y explora las posibilidades de una nueva generación de dispensadores inteligentes.</p>
            <div className="flex gap-4">
              <div className="w-16 h-1 bg-altpro-blue rounded-full" />
              <div className="w-4 h-1 bg-altpro-tech rounded-full" />
            </div>
          </div>

          <div className="bg-altpro-white p-8 rounded-3xl text-altpro-black shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Solicitar información</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-altpro-graySec mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-altpro-graySec/30 focus:outline-none focus:border-altpro-blue" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-altpro-graySec mb-1">Organización</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-altpro-graySec/30 focus:outline-none focus:border-altpro-blue" placeholder="Empresa / Institución" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-altpro-graySec mb-1">Correo electrónico</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-altpro-graySec/30 focus:outline-none focus:border-altpro-blue" placeholder="correo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-altpro-graySec mb-1">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-altpro-graySec/30 focus:outline-none focus:border-altpro-blue resize-none" placeholder="¿Cómo podemos colaborar?"></textarea>
              </div>
              <button className="w-full py-3 bg-altpro-black text-altpro-white rounded-lg font-medium hover:bg-altpro-blue transition-colors">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-altpro-black py-12 border-t border-altpro-white/10 text-altpro-white/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Droplet size={20} className="text-altpro-tech" />
            <span className="text-xl font-bold tracking-tight text-altpro-white">
              ALT<span className="font-light">pro</span>
            </span>
          </div>
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} ALTpro. Tecnología en desarrollo.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-altpro-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-altpro-white transition-colors">Aviso Legal</a>
          </div>
        </div>
      </footer>
    </>
  );
};