import { GraduationCap, Briefcase, Building2, Store } from 'lucide-react';

export const Applications = () => {
  const apps = [
    { title: 'Educación', desc: 'Universidades y centros de investigación.', icon: <GraduationCap size={28} /> },
    { title: 'Corporativo', desc: 'Oficinas e instalaciones empresariales.', icon: <Briefcase size={28} /> },
    { title: 'Institucional', desc: 'Hospitales y centros de atención.', icon: <Building2 size={28} /> },
    { title: 'Comercial', desc: 'Gimnasios, plazas y espacios de alto tráfico.', icon: <Store size={28} /> }
  ];

  return (
    <section className="py-16 sm:py-24 bg-altpro-grayLight/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Diseñado para espacios donde importa la calidad del agua.</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:block bg-altpro-white p-5 sm:p-8 rounded-2xl border border-altpro-graySec/10 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 shrink-0 bg-altpro-blue/10 text-altpro-blue rounded-xl flex items-center justify-center mb-0 sm:mb-6">
                {app.icon}
              </div>
              {/* En móvil el texto va al lado del ícono; desde sm es un bloque normal, como el original */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-sm text-altpro-graySec">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};