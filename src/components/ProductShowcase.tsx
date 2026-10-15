import { Settings2, RefreshCw, Droplets } from 'lucide-react';

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-altpro-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-altpro-black mb-6">
            Diseñado para integrarse.<br />Desarrollado para evolucionar.
          </h2>
          <p className="text-altpro-graySec text-lg">
            Un diseño industrial compacto que prioriza la funcionalidad comercial, la visibilidad de los procesos y la facilidad de mantenimiento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen / Render del Producto */}
          <div className="relative aspect-square rounded-3xl bg-altpro-grayLight overflow-hidden border border-altpro-graySec/20 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-altpro-black/5 to-transparent" />
            <div className="w-full max-w-sm aspect-[3/4] bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col relative z-10">
              {/* Pantalla Superior */}
              <div className="h-2/5 bg-altpro-black rounded-t-2xl p-4 flex flex-col justify-between">
                <div className="w-full h-2 bg-altpro-white/10 rounded-full" />
                <div className="w-3/4 h-2 bg-altpro-white/10 rounded-full" />
                <div className="flex justify-between items-end mt-4">
                  <div className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center">
                    <div className="text-green-400 text-xs font-bold">OK</div>
                  </div>
                </div>
              </div>
              {/* Dispensador y Filtro */}
              <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-200 rounded-b-2xl flex flex-col items-center justify-end pb-6 px-6">
                <div className="w-10 h-16 bg-gray-300 rounded-b-lg mb-8 shadow-inner" />
                <div className="w-full h-12 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center px-4">
                  <div className="w-full h-6 bg-altpro-blue/10 rounded flex items-center px-2">
                    <div className="w-1/3 h-1 bg-altpro-blue rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Características Técnicas */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-altpro-grayLight flex items-center justify-center border border-altpro-graySec/20">
                <Settings2 className="text-altpro-navy" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-altpro-black mb-2">Interfaz Digital Incorporada</h3>
                <p className="text-altpro-graySec">Panel frontal diseñado para proveer información clara sobre la calidad del agua, eliminando la incertidumbre del usuario final en entornos de alto tráfico.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-altpro-grayLight flex items-center justify-center border border-altpro-graySec/20">
                <RefreshCw className="text-altpro-navy" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-altpro-black mb-2">Mantenimiento Simplificado</h3>
                <p className="text-altpro-graySec">Arquitectura que expone de forma segura los cartuchos de filtración, permitiendo inspecciones visuales rápidas y reemplazos modulares sin desmontar el chasis.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-altpro-grayLight flex items-center justify-center border border-altpro-graySec/20">
                <Droplets className="text-altpro-navy" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-altpro-black mb-2">Materiales de Grado Comercial</h3>
                <p className="text-altpro-graySec">Estructura higiénica basada en superficies lisas y acabados en acero inoxidable, minimizando el riesgo de contaminación cruzada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};