'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sun, Zap } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import FloatingParticles from '@/components/ui/FloatingParticles';
import { scrollToSection } from '@/lib/utils';

const features = [
  { icon: Sun, text: 'Energía 100% Limpia' },
  { icon: Zap, text: 'Ahorro Garantizado' }
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-solar-50 via-white to-electric-50 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-solar-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-electric-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-energy-500 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Energía Solar para{' '}
                <span className="bg-gradient-to-r from-solar-500 to-electric-500 bg-clip-text text-transparent">
                  tu Hogar
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Reduce tu factura eléctrica hasta un <strong className="text-solar-500">95%</strong> con 
                instalaciones solares profesionales. Ahorro garantizado desde el primer día.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <feature.icon className="w-5 h-5 text-solar-500" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                size="xl"
                className="group shadow-2xl hover:shadow-glow"
                animate
              >
                Solicitar Presupuesto Gratuito
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('process')}
                variant="outline"
                size="xl"
                className="shadow-lg"
                animate
              >
                Ver Nuestro Proceso
              </Button>
            </motion.div>

          </motion.div>

          {/* Visual - Montaje de Imágenes */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Container Principal */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Imagen de Cargador de Coches - Fondo (Esquina Inferior Derecha) */}
              <motion.div
                className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, x: 20, y: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Image
                  src="/cargador coches.jpg"
                  alt="Cargador de coches eléctricos"
                  fill
                  className="object-cover"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent"></div>
              </motion.div>

              {/* Imagen de Placas Solares - Superpuesta (Esquina Superior Izquierda) */}
              <motion.div
                className="absolute top-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden z-10"
                initial={{ scale: 0.8, opacity: 0, x: -20, y: -20 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Image
                  src="/placas solares.jpeg"
                  alt="Placas solares instaladas"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
              </motion.div>

              {/* Elementos decorativos */}
              <motion.div
                className="absolute top-4 left-4 w-16 h-16 bg-solar-500/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sun className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 bg-electric-500/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>

              {/* Línea diagonal de conexión entre las imágenes */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-solar-500 to-electric-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </div>

            {/* Stats Cards */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-solar-500">95%</div>
                <div className="text-sm text-gray-600">Ahorro Máximo</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
