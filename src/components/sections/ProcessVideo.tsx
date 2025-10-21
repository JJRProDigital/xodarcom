'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Users, Shield, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const processFeatures = [
  {
    icon: Clock,
    title: 'Instalación Rápida',
    description: '2-7 días según el sistema elegido'
  },
  {
    icon: Users,
    title: 'Equipo Certificado',
    description: 'Técnicos especializados y certificados'
  },
  {
    icon: Shield,
    title: 'Sin Daños',
    description: 'Garantía total en la instalación'
  },
  {
    icon: Zap,
    title: 'Activación Inmediata',
    description: 'Funcionando desde el primer día'
  }
];

export default function ProcessVideo() {
  return (
    <Section id="process" background="gray" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestro <span className="text-solar-500">Proceso</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descubre cómo transformamos tu hogar en una fuente de energía limpia y rentable
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-solar-100 to-electric-100 rounded-3xl shadow-2xl overflow-hidden">
              {/* Video Container */}
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/zAKd3PQDbBk?rel=0&modestbranding=1"
                  title="Proceso de Instalación Solar"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Play Button Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-solar-500 ml-1" />
                </motion.div>
              </motion.div>
            </div>

            {/* Video Stats */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-solar-500 mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfacción Garantizada</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-electric-500 mb-2">500+</div>
                <div className="text-sm text-gray-600">Instalaciones Completadas</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Instalación Profesional y Sin Complicaciones
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro equipo de técnicos certificados se encarga de todo el proceso, 
                desde la evaluación inicial hasta la puesta en marcha. Sin daños, 
                sin complicaciones, solo resultados.
              </p>
            </div>

            {/* Process Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {processFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-solar-500 to-electric-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-solar-500 to-electric-500 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-2">
                  ¿Listo para comenzar?
                </h4>
                <p className="text-solar-100 mb-4">
                  Solicita tu evaluación gratuita y descubre cuánto puedes ahorrar
                </p>
                <button className="bg-white text-solar-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Evaluación Gratuita
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
