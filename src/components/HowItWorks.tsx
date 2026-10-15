import { ArrowRight, Droplets, Activity, ShieldCheck, Zap } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      title: "Ingreso",
      desc: "El agua ingresa al sistema pasando por la válvula de control principal.",
      icon: <Droplets size={24} className="text-altpro-graySec" />
    },
    {
      title: "Filtración",
      desc: "Atraviesa las tres etapas de retención física y química selectiva.",
      icon: <Zap size={24} className="text-altpro-blue" />
    },
    {
      title: "Evaluación",
      desc: "Los instrumentos miden y evalúan los parámetros de calidad en flujo continuo.",
      icon: <Activity size={24} className="text-altpro-tech" />
    },
    {
      title: "Suministro",
      desc: "El controlador habilita la dispensación o bloquea el paso ante anomalías.",
      icon: <ShieldCheck size={24} className="text-altpro-navy" />
    }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-altpro-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">Tecnología que trabaja en segundo plano.</h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-0 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-altpro-grayLight border border-altpro-graySec/20 flex items-center justify-center mb-0 sm:mb-6 shadow-sm group-hover:scale-105 transition-transform">
                {step.icon}
              </div>
              {/* En móvil el texto va al lado del ícono; desde sm el contenedor desaparece (contents) y todo queda como el original */}
              <div className="sm:contents">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-altpro-graySec">{step.desc}</p>
              </div>
              
              {/* Flecha conectora (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 translate-x-1/2 text-altpro-graySec/30">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};