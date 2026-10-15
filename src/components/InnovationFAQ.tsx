import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: '¿Qué es ALTpro?', a: 'Es un dispensador de agua inteligente en desarrollo que integra purificación de tres etapas y monitoreo en tiempo real.' },
  { q: '¿Cómo funciona la resina experimental?', a: 'Utiliza una matriz de poliestireno-divinilbenceno funcionalizada para atrapar selectivamente metales pesados y subproductos de desinfección. Su rendimiento está sujeto a validación continua.' },
  { q: '¿Qué ocurre si el agua no es segura?', a: 'El sistema está diseñado para activar una válvula de cierre automático, bloqueando el suministro hasta que se restablezcan los parámetros seguros o se realice mantenimiento.' },
  { q: '¿En qué etapa de desarrollo se encuentra?', a: 'Actualmente, ALTpro es un prototipo funcional avanzado. Las tecnologías de detección y el cartucho de resina están en fase de validación empírica.' }
];

export const InnovationFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-altpro-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
        
        {/* Innovación */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ingeniería aplicada a un reto esencial.</h2>
          <p className="text-altpro-graySec mb-6">
            ALTpro integra diseño industrial, tratamiento de agua, instrumentación y automatización en un producto que redefine la seguridad hídrica.
          </p>
          <ul className="space-y-4">
            {['Investigación y desarrollo de materiales avanzados.', 'Integración de sensores compactos.', 'Automatización y seguridad preventiva (Fail-Safe).', 'Validación empírica de parámetros críticos.'].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-altpro-blue mt-2" />
                <span className="text-sm text-altpro-black font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-altpro-graySec/20 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-altpro-grayLight/30 hover:bg-altpro-grayLight/60 transition-colors"
              >
                <span className="font-semibold text-sm">{faq.q}</span>
                <ChevronDown size={18} className={`transform transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 text-sm text-altpro-graySec bg-altpro-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};