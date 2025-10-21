'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sun, Zap, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import FloatingParticles from '@/components/ui/FloatingParticles';
import { scrollToSection } from '@/lib/utils';

const features = [
  { icon: Sun, text: 'Energía 100% Limpia' },
  { icon: Zap, text: 'Ahorro Garantizado' },
  { icon: Shield, text: 'Garantía 25 Años' }
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

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-energy-500 rounded-full"></div>
                <span>Instalaciones certificadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-solar-500 rounded-full"></div>
                <span>Garantía extendida</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Visual Container */}
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-solar-100 to-electric-100 rounded-3xl shadow-2xl overflow-hidden">
              {/* Solar Panel Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl"
                  animate={{ 
                    rotateY: [0, 5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Solar Panel Grid */}
                  <div className="grid grid-cols-4 gap-2 p-4 h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-br from-blue-400 to-blue-600 rounded"
                        animate={{
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 bg-solar-500 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-8 left-8 w-12 h-12 bg-electric-500 rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Energy Flow Lines */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <svg className="w-full h-full">
                  <motion.path
                    d="M50,200 Q200,100 350,200"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#004E89" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
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

            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-500">25</div>
                <div className="text-sm text-gray-600">Años Garantía</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
