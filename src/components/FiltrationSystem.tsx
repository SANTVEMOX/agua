export const FiltrationSystem = () => {
  return (
    <section id="tecnologia" className="py-16 sm:py-24 bg-altpro-grayLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-altpro-black mb-8 sm:mb-12 uppercase border-b-4 border-altpro-blue pb-4 inline-block">
          Tren de Filtración de 3 Etapas
        </h2>

        <div className="grid lg:grid-cols-3 gap-0 border border-altpro-black bg-altpro-white">
          
          {/* Etapa 1 */}
          <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-altpro-black hover:bg-altpro-grayLight/50 transition-colors">
            <div className="text-4xl font-black text-altpro-graySec mb-4">01</div>
            <h3 className="text-xl font-bold text-altpro-black mb-4 uppercase">Filtración Física</h3>
            <p className="text-altpro-graySec text-sm leading-relaxed mb-6">
              Primera barrera de contención. Bloquea sólidos suspendidos, sedimentos y partículas físicas mayores, protegiendo las etapas químicas posteriores.
            </p>
            <div className="bg-altpro-black text-altpro-white text-xs px-3 py-1 inline-block uppercase font-bold">Acción: Retención</div>
          </div>

          {/* Etapa 2 */}
          <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-altpro-black hover:bg-altpro-grayLight/50 transition-colors">
            <div className="text-4xl font-black text-altpro-blue mb-4">02</div>
            <h3 className="text-xl font-bold text-altpro-black mb-4 uppercase">Carbón Activado</h3>
            <p className="text-altpro-graySec text-sm leading-relaxed mb-6">
              Núcleo de adsorción. Elimina el cloro libre residual, mejora el olor y sabor del agua, y reduce compuestos orgánicos volátiles (COVs).
            </p>
            <div className="bg-altpro-blue text-altpro-white text-xs px-3 py-1 inline-block uppercase font-bold">Acción: Adsorción</div>
          </div>

          {/* Etapa 3 */}
          <div className="p-6 sm:p-10 hover:bg-altpro-grayLight/50 transition-colors">
            <div className="text-4xl font-black text-altpro-tech mb-4">03</div>
            <h3 className="text-xl font-bold text-altpro-black mb-4 uppercase">Resina PS-DVB</h3>
            <p className="text-altpro-graySec text-sm leading-relaxed mb-6">
              Medio macroporoso funcionalizado. Diseñado experimentalmente para atrapar de forma selectiva HAA, THM y metales pesados disueltos.
            </p>
            <div className="bg-altpro-tech text-altpro-white text-xs px-3 py-1 inline-block uppercase font-bold">Acción: Intercambio Selectivo</div>
          </div>

        </div>
      </div>
    </section>
  );
};