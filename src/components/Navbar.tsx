import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Tecnología', href: '#tecnologia' },
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Seguridad', href: '#seguridad' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-altpro-white/90 backdrop-blur-md border-b border-altpro-grayLight shadow-sm py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logotipo completo en PNG: grande arriba, se reduce al hacer scroll */}
        <a href="#" className="flex items-center z-50">
          <img 
            src="/logo.png" 
            alt="ALTpro" 
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-altpro-graySec hover:text-altpro-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto"
            className="px-5 py-2.5 rounded-full bg-altpro-blue text-altpro-white text-sm font-medium hover:bg-altpro-navy transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]"
          >
            Solicitar información
          </a>
        </nav>

        <button 
          className="md:hidden z-50 text-altpro-black p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-altpro-white pt-24 px-6 md:hidden flex flex-col gap-6 h-screen"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-2xl font-semibold text-altpro-navy border-b border-altpro-grayLight pb-4"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              onClick={handleNavClick}
              className="mt-4 px-6 py-4 text-center rounded-xl bg-altpro-blue text-altpro-white text-lg font-medium shadow-lg active:scale-95 transition-transform"
            >
              Solicitar información
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};