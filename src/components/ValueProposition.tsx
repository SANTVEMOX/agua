import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Biohazard, Droplets, TestTube2, Activity } from 'lucide-react';

// --- DATOS DE CONTAMINANTES ---
const contaminants = [
  {
    id: '01',
    title: 'THM',
    subtitle: 'Trihalometanos',
    description: 'Subproductos tóxicos generados por la cloración convencional del agua. Altamente perjudiciales a largo plazo.',
    icon: <Biohazard strokeWidth={1.2} size={32} />,
    color: 'text-altpro-blue',
    bg: 'hover:bg-altpro-blue/[0.03]',
    border: 'hover:border-altpro-blue/20'
  },
  {
    id: '02',
    title: 'HAA',
    subtitle: 'Ácidos Haloacéticos',
    description: 'Riesgos químicos derivados de la desinfección que los filtros de carbón tradicionales ignoran por completo.',
    icon: <TestTube2 strokeWidth={1.2} size={32} />,
    color: 'text-altpro-tech',
    bg: 'hover:bg-altpro-tech/[0.03]',
    border: 'hover:border-altpro-tech/20'
  },
  {
    id: '03',
    title: 'Metales Pesados',
    subtitle: 'Plomo & Arsénico',
    description: 'Atrapados selectivamente a través de nuestro cartucho de resina funcionalizada de nivel experimental.',
    icon: <Activity strokeWidth={1.2} size={32} />,
    color: 'text-altpro-navy',
    bg: 'hover:bg-altpro-navy/[0.03]',
    border: 'hover:border-altpro-navy/20'
  },
  {
    id: '04',
    title: 'Microplásticos',
    subtitle: 'Partículas Sintéticas',
    description: 'Bloqueados físicamente desde la primera barrera de ultrafiltración antes de llegar a tu vaso.',
    icon: <Droplets strokeWidth={1.2} size={32} />,
    color: 'text-altpro-graySec',
    bg: 'hover:bg-altpro-grayLight/50',
    border: 'hover:border-altpro-graySec/20'
  }
];

// --- VARIANTES DE ANIMACIÓN ---
const fadeUpContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

// --- COMPONENTE DE TARJETA ---
const ContaminantCard = ({ data }: { data: typeof contaminants[0] }) => (
  <motion.div 
    variants={fadeUpItem}
    className={`group relative p-10 border border-transparent ${data.border} ${data.bg} rounded-[2rem] transition-all duration-500 flex flex-col h-full bg-altpro-white`}
  >
    <div className="flex justify-between items-start mb-16">
      <div className={`transition-transform duration-500 group-hover:scale-110 ${data.color}`}>
        {data.icon}
      </div>
      <span className="font-mono text-xs text-altpro-graySec/40 font-semibold tracking-[0.2em]">
        {data.id}
      </span>
    </div>
    
    <div className="mt-auto">
      <h3 className="text-2xl font-medium text-altpro-black tracking-tight mb-2">
        {data.title}
      </h3>
      <h4 className="text-xs font-bold text-altpro-graySec mb-5 tracking-widest uppercase">
        {data.subtitle}
      </h4>
      <p className="text-altpro-graySec text-sm leading-relaxed">
        {data.description}
      </p>
    </div>
  </motion.div>
);

// --- COMPONENTE PRINCIPAL ---
export const ValueProposition = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-altpro-grayLight/30 overflow-hidden" ref={containerRef}>
      
      <motion.div 
        className="max-w-[1440px] mx-auto px-6 lg:px-12"
        variants={fadeUpContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        
        {/* Cabecera Minimalista */}
        <div className="max-w-4xl mb-24">
          <motion.div variants={fadeUpItem} className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-altpro-blue" />
            <span className="text-xs font-bold tracking-[0.2em] text-altpro-blue uppercase">
              Lo que eliminamos para tu seguridad
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeUpItem}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-altpro-black tracking-tight leading-[1.1]"
          >
            Los únicos a nivel nacional que nos preocupamos por lo que{' '}
            <span className="text-altpro-graySec">nadie se preocupa.</span>
          </motion.h2>
        </div>

        {/* Grid de Contaminantes SIN el banner negro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contaminants.map((contaminant) => (
            <ContaminantCard key={contaminant.id} data={contaminant} />
          ))}
        </div>

      </motion.div>
    </section>
  );
};