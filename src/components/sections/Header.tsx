'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

const navigation = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Proceso', href: '#process' },
  { name: 'Beneficios', href: '#benefits' },
  { name: 'Sistemas', href: '#systems' },
  { name: 'Casos de Éxito', href: '#success' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 relative">
              <Image
                src={companyInfo.logo}
                alt={companyInfo.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-solar-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={() => handleNavClick('#contact')}
              size="md"
              className="shadow-lg hover:shadow-xl"
            >
              Solicitar Presupuesto
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 mt-4 pt-4"
            >
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-gray-700 hover:text-solar-500 transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4">
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    size="md"
                    className="w-full"
                  >
                    Solicitar Presupuesto
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
