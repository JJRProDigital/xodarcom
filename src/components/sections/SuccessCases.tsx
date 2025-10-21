'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Home, Building, Car } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { successCases } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

const caseIcons = {
  'chalet-mata': Home,
  'oficina-comercial': Building,
  'casa-castanetas': Car
};

const caseColors = {
  'chalet-mata': 'from-solar-500 to-solar-600',
  'oficina-comercial': 'from-electric-500 to-electric-600',
  'casa-castanetas': 'from-energy-500 to-energy-600'
};

export default function SuccessCases() {
  return (
    <Section id="success" background="gray" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Casos de <span className="text-energy-500">Éxito Reales</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Historias reales de familias y empresas que ya disfrutan de los beneficios de la energía solar
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {successCases.map((caseStudy, index) => {
            const IconComponent = caseIcons[caseStudy.id as keyof typeof caseIcons];
            const gradientClass = caseColors[caseStudy.id as keyof typeof caseColors];
            
            return (
              <motion.div
                key={caseStudy.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${gradientClass} p-8 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {caseStudy.location}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* System Info */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-1">Sistema instalado</div>
                      <div className="text-lg font-bold text-gray-900">
                        {caseStudy.system}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-solar-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-solar-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Reducción de cuenta</div>
                          <div className="font-semibold text-gray-900">
                            {caseStudy.reduction}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-energy-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-energy-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Ahorro anual</div>
                          <div className="font-semibold text-gray-900">
                            {caseStudy.annualSavings}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-600 italic">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-solar-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            );
          })}
        </div>


        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a las cientos de familias que ya disfrutan de energía solar limpia y económica
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-solar-500 to-electric-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Evaluación Gratuita
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
