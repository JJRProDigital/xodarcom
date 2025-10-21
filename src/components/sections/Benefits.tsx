'use client';

import { motion } from 'framer-motion';
import { DollarSign, Leaf, Shield, TrendingUp, Wrench, Smartphone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { benefits } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

const iconMap = {
  'dollar-sign': DollarSign,
  'leaf': Leaf,
  'shield': Shield,
  'trending-up': TrendingUp,
  'wrench': Wrench,
  'smartphone': Smartphone
};

export default function Benefits() {
  return (
    <Section id="benefits" background="white" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Beneficios de la <span className="text-energy-500">Energía Solar</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descubre por qué miles de familias ya han elegido la energía solar para su hogar
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={benefit.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-solar-50 to-electric-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-solar-500 to-electric-500 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-solar-500 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-solar-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-solar-500 via-electric-500 to-energy-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para Aprovechar estos Beneficios?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a las miles de familias que ya disfrutan de energía solar
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
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
