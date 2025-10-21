'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { validateEmail, validatePhone } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  systemType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  systemType?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    systemType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const systemTypes = [
    'Sistema Básico (6-8 paneles)',
    'Sistema Estándar (10-14 paneles)',
    'Sistema Premium (16-24 paneles + baterías)',
    'No estoy seguro, necesito asesoría'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido';
    }

    if (!formData.systemType) {
      newErrors.systemType = 'Por favor selecciona un tipo de sistema';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section id="contact" background="solar" padding="xl">
        <Container>
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-solar-500 to-electric-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Solicitud Enviada con Éxito!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Gracias por tu interés en la energía solar. Nos pondremos en contacto contigo en las próximas 24 horas para programar tu evaluación gratuita.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                size="lg"
              >
                Enviar Otra Solicitud
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="contact" background="solar" padding="xl">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-solar-300">Solicita tu</span> <span className="text-electric-400">Presupuesto Gratuito</span>
            </h2>
            <p className="text-xl text-solar-300 max-w-3xl mx-auto">
              Sin compromiso. Evaluación técnica gratuita. Respuesta en 24 horas.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-solar-500'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <motion.p
                        className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-solar-500'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <motion.p
                        className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-solar-500'
                      }`}
                      placeholder="+34 600 000 000"
                    />
                    {errors.phone && (
                      <motion.p
                        className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* System Type */}
                  <div>
                    <label htmlFor="systemType" className="block text-sm font-semibold text-gray-900 mb-2">
                      Tipo de Sistema *
                    </label>
                    <select
                      id="systemType"
                      name="systemType"
                      value={formData.systemType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                        errors.systemType 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-solar-500'
                      }`}
                    >
                      <option value="">Selecciona un sistema</option>
                      {systemTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.systemType && (
                      <motion.p
                        className="text-red-500 text-sm mt-1 flex items-center space-x-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.systemType}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Mensaje (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-solar-500 transition-colors resize-none"
                      placeholder="Cuéntanos más sobre tu proyecto..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Solicitar Presupuesto Gratuito</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>

              {/* Info Side */}
              <div className="bg-gradient-to-br from-solar-500 to-electric-500 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  ¿Qué incluye tu evaluación gratuita?
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Análisis de tu techo</h4>
                      <p className="text-sm opacity-90">Evaluamos la orientación, inclinación y sombras</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cálculo de ahorro</h4>
                      <p className="text-sm opacity-90">Proyección exacta de tu ahorro mensual y anual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Propuesta personalizada</h4>
                      <p className="text-sm opacity-90">Diseño 3D y presupuesto detallado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sin compromiso</h4>
                      <p className="text-sm opacity-90">Evaluación 100% gratuita y sin obligación</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="font-bold mb-2">📞 Contacto Directo</h4>
                  <p className="text-sm opacity-90 mb-2">
                    También puedes contactarnos directamente:
                  </p>
                  <p className="text-sm">
                    📧 info@xodarcom.com<br />
                    📱 650 836 635
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
