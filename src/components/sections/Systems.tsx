'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Battery, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { solarSystems } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

const systemIcons = {
  basic: Zap,
  standard: Star,
  premium: Battery
};

const systemColors = {
  basic: 'from-solar-500 to-solar-600',
  standard: 'from-electric-500 to-electric-600',
  premium: 'from-energy-500 to-energy-600'
};

const systemBgColors = {
  basic: 'bg-solar-50',
  standard: 'bg-electric-50',
  premium: 'bg-energy-50'
};

export default function Systems() {
  return (
    <Section id="systems" background="gray" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Elige tu <span className="text-solar-500">Sistema Ideal</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cada proyecto es único. Solicita evaluación técnica gratuita para conocer la inversión exacta según tu consumo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solarSystems.map((system, index) => {
            const IconComponent = systemIcons[system.id as keyof typeof systemIcons];
            const gradientClass = systemColors[system.id as keyof typeof systemColors];
            const bgClass = systemBgColors[system.id as keyof typeof systemBgColors];
            const isPopular = system.id === 'standard';
            
            return (
              <motion.div
                key={system.id}
                className={`relative group ${isPopular ? 'lg:scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="bg-gradient-to-r from-solar-500 to-electric-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Más Popular
                    </div>
                  </motion.div>
                )}

                <div className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${isPopular ? 'ring-2 ring-solar-500' : ''}`}>
                  {/* Header */}
                  <div className={`${bgClass} p-8 text-center`}>
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {system.name}
                    </h3>
                    <p className="text-gray-600">
                      {system.panels}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Generation */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {system.generation}
                      </div>
                      <div className="text-sm text-gray-600">Generación mensual</div>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Ideal para:</h4>
                      <p className="text-gray-600 text-sm">{system.ideal}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {system.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                          >
                            <Check className="w-4 h-4 text-solar-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-gray-900">{system.installation}</div>
                        <div className="text-xs text-gray-600">Instalación</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-solar-500">{system.savings}</div>
                        <div className="text-xs text-gray-600">Ahorro</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="w-full"
                      size="lg"
                      variant={isPopular ? 'primary' : 'outline'}
                    >
                      {system.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No estás seguro cuál elegir?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestros expertos te ayudarán a elegir el sistema perfecto según tu consumo, 
              presupuesto y necesidades específicas.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="shadow-lg"
            >
              Consulta Gratuita con Experto
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
