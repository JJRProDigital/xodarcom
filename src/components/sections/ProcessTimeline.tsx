'use client';

import { motion } from 'framer-motion';
import { Search, Palette, FileText, Wrench, Play } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { processSteps } from '@/lib/data';

const stepIcons = {
  search: Search,
  design: Palette,
  document: FileText,
  tools: Wrench,
  play: Play
};

export default function ProcessTimeline() {
  return (
    <Section id="timeline" background="white" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestro Proceso en <span className="text-electric-500">5 Pasos</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Desde la evaluación inicial hasta la puesta en marcha, te acompañamos en cada paso
          </motion.p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-solar-500 via-electric-500 to-energy-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-5 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = stepIcons[step.icon as keyof typeof stepIcons];
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={step.id}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Step Card */}
                    <motion.div
                      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${
                        isEven ? 'mb-8' : 'mt-8'
                      }`}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-solar-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-solar-500 to-electric-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {step.description}
                        </p>
                        <div className="text-xs font-semibold text-solar-500 bg-solar-50 px-3 py-1 rounded-full inline-block">
                          {step.duration}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const IconComponent = stepIcons[step.icon as keyof typeof stepIcons];
              
              return (
                <motion.div
                  key={step.id}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-solar-500 to-electric-500" />
                  )}

                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-solar-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                    {step.id}
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-solar-500 to-electric-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className="text-sm font-semibold text-solar-500">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-solar-500 to-electric-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para Comenzar tu Proyecto Solar?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              El primer paso es completamente gratuito y sin compromiso
            </p>
            <motion.button
              className="bg-white text-solar-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-xl"
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
