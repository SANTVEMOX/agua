const chain = [
  {
    id: '01',
    part: 'Sensores',
    text: 'Monitorean el agua de forma continua.',
  },
  {
    id: '02',
    part: 'Controlador',
    text: 'Compara cada lectura con los parámetros de pureza.',
  },
  {
    id: '03',
    part: 'Electroválvula',
    text: 'Cierra el paso ante cualquier anomalía y lo reabre cuando el agua vuelve a ser segura.',
  },
];

export const MonitoringSection = () => {
  return (
    <section id="seguridad" className="py-20 sm:py-32 bg-altpro-black text-altpro-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">

        {/* Mensaje */}
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Si el agua no es segura, <span className="text-altpro-graySec">no se dispensa.</span>
          </h2>
          <p className="text-lg text-altpro-graySec leading-relaxed max-w-md">
            Corte y restablecimiento automáticos, sin supervisión humana.
          </p>
        </div>

        {/* Cadena de protección */}
        <ol className="lg:col-span-6 p-3 rounded-[2rem] border border-altpro-white/10 bg-altpro-white/[0.03]">
          {chain.map((item, i) => {
            const isLast = i === chain.length - 1;
            return (
              <li
                key={item.id}
                className={`flex gap-4 sm:gap-6 items-baseline p-5 sm:p-6 md:p-8 ${
                  isLast ? 'rounded-3xl bg-altpro-blue' : 'border-b border-altpro-white/10'
                }`}
              >
                <span
                  className={`font-mono text-xs font-semibold tracking-[0.2em] ${
                    isLast ? 'text-altpro-white' : 'text-altpro-graySec'
                  }`}
                >
                  {item.id}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-2">{item.part}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isLast ? 'text-altpro-white' : 'text-altpro-graySec'
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
};