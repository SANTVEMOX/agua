import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProductShowcase } from './components/ProductShowcase';
import { FiltrationSystem } from './components/FiltrationSystem';
import { MonitoringSection } from './components/MonitoringSection';
import { HowItWorks } from './components/HowItWorks';
import { Applications } from './components/Applications';
import { InnovationFAQ } from './components/InnovationFAQ';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <main className="min-h-screen bg-altpro-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <ProductShowcase />
      <FiltrationSystem />
      <MonitoringSection />
      <HowItWorks />
      <Applications />
      <InnovationFAQ />
      <ContactFooter />
    </main>
  );
}
{/* Footer existente (mantén el tuyo) */}
      <ContactFooter />

      {/* NUEVO: Espacio para imagen horizontal gigante al final */}
      <section className="w-full bg-altpro-grayLight border-t border-altpro-black p-4">
        <div className="max-w-[1920px] mx-auto h-[300px] md:h-[500px] bg-altpro-graySec/20 border-2 border-dashed border-altpro-graySec flex items-center justify-center relative">
          <p className="text-altpro-black font-bold uppercase tracking-widest">
            [ Espacio para Fotografía Horizontal a Pantalla Completa ]
          </p>
          {/* Para usarla, cambia el div por: <img src="tu-imagen.jpg" className="w-full h-full object-cover" /> */}
        </div>
      </section>
export default App;