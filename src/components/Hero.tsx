import prototipoImg from '../assets/prototipo.jpg';

export const Hero = () => {
  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-altpro-white border-b border-altpro-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-0 border border-altpro-black">
        
        {/* Columna de Texto - Estilo Industrial */}
        <div className="p-6 sm:p-12 md:p-16 flex flex-col justify-center bg-altpro-white border-b lg:border-b-0 lg:border-r border-altpro-black">
          <div className="inline-block bg-altpro-black text-altpro-white text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase px-3 sm:px-4 py-2 mb-6 sm:mb-8 w-max">
            Tecnologia desarrollada en Mexico
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-altpro-black leading-none mb-6">
            El agua segura requiere innovación y tecnología.
          </h1>
          
          <p className="text-base sm:text-lg text-altpro-graySec mb-8 sm:mb-10 leading-relaxed">
            Sistemas de purificación avanzada que cuidan tu salud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0">
            <a href="#tecnologia" className="px-8 py-4 bg-altpro-blue text-altpro-white text-center font-bold uppercase tracking-wider hover:bg-altpro-navy transition-colors">
              Ver Tecnología
            </a>
            <a href="#contacto" className="px-8 py-4 bg-altpro-black text-altpro-white text-center font-bold uppercase tracking-wider hover:bg-altpro-graySec transition-colors">
              Cotizar Equipo
            </a>
          </div>
        </div>

        {/* Fotografía Real de tu Prototipo */}
        <div className="relative sm:min-h-[500px] bg-altpro-grayLight flex items-center justify-center overflow-hidden">
          <img 
            src={prototipoImg} 
            alt="Prototipo ALTpro - Sistema de Monitoreo Continuo Inteligente" 
            className="block w-full h-auto max-h-[75vh] object-contain sm:absolute sm:inset-0 sm:h-full sm:max-h-none sm:object-cover" 
          />
        </div>

      </div>
    </section>
  );
};