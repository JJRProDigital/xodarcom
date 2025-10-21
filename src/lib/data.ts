import { SolarSystem, ProcessStep, SuccessCase, FAQ, Benefit } from '@/types';

export const solarSystems: SolarSystem[] = [
  {
    id: 'basic',
    name: 'Sistema Residencial Básico',
    panels: '6-8 paneles',
    generation: '350-450 kWh/mes',
    ideal: 'casas pequeñas, consumo hasta 300 kWh/mes',
    installation: '2-3 días',
    savings: '60-70%',
    features: ['Instalación básica', 'Monitoreo simple'],
    cta: 'Solicitar Presupuesto'
  },
  {
    id: 'standard',
    name: 'Sistema Residencial Estándar',
    panels: '10-14 paneles',
    generation: '550-750 kWh/mes',
    ideal: 'casas medianas, consumo 300-600 kWh/mes',
    installation: '3-4 días',
    savings: '75-85%',
    features: ['Monitoreo app', 'Garantías extendidas', 'Soporte premium'],
    cta: 'Solicitar Presupuesto'
  },
  {
    id: 'premium',
    name: 'Sistema Premium con Respaldo',
    panels: '16-24 paneles + baterías',
    generation: '900-1300 kWh/mes',
    ideal: 'casas grandes, independencia energética total',
    installation: '5-7 días',
    savings: '90-95%',
    features: ['Respaldo nocturno', 'Autonomía 24/7', 'Monitoreo avanzado', 'Garantía extendida'],
    cta: 'Solicitar Presupuesto'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Evaluación Gratuita',
    description: 'Visita técnica, análisis de techo y consumo',
    duration: '1 día',
    icon: 'search'
  },
  {
    id: 2,
    title: 'Diseño Personalizado',
    description: 'Propuesta con simulación 3D y proyección de ahorro',
    duration: '2-3 días',
    icon: 'design'
  },
  {
    id: 3,
    title: 'Tramitación Legal',
    description: 'Permisos municipales y conexión distribuidora',
    duration: '15-20 días',
    icon: 'document'
  },
  {
    id: 4,
    title: 'Instalación Profesional',
    description: 'Equipo certificado SEC, sin daños',
    duration: '2-7 días',
    icon: 'tools'
  },
  {
    id: 5,
    title: 'Puesta en Marcha',
    description: 'Activación y app de monitoreo',
    duration: '1 día',
    icon: 'play'
  }
];

export const successCases: SuccessCase[] = [
  {
    id: 'chalet-mata',
    title: 'Chalet en Mata-Behid',
    system: 'Sistema 5.5 kWp',
    reduction: 'Antes no tenía luz, ahora sí',
    annualSavings: '+€1800',
    location: 'Mata-Behid',
    testimonial: 'Antes no teníamos luz en el chalet y ahora tenemos energía solar. El sistema de 5.5 kWp nos genera un ahorro de +€1800 mensuales.'
  },
  {
    id: 'oficina-comercial',
    title: 'Oficina Comercial',
    system: 'Sistema 6.6 kWp',
    reduction: 'Reducción de cuenta al casi 50%',
    annualSavings: '+€1500',
    location: 'Centro Comercial',
    testimonial: 'La instalación solar en nuestra oficina comercial ha sido un éxito total. Hemos reducido significativamente nuestros costos operativos y el beneficio tributario nos ha ayudado mucho.'
  },
  {
    id: 'casa-castanetas',
    title: 'Punto de carga eléctrico para coches',
    system: 'Punto de carga eléctrico para coches',
    reduction: 'Autonomía energética 100%',
    annualSavings: 'Sin dependencia de cortes ni alzas de tarifa',
    location: 'Piscina cubierta Torredelcampo',
    testimonial: 'El punto de carga eléctrico ha sido una revolución. Ahora tenemos autonomía energética completa y no dependemos de cortes de luz ni aumentos de tarifa.'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'cost',
    question: '¿Cuánto cuesta instalar paneles solares?',
    answer: 'Desde €4.200 según sistema. Ofrecemos financiamiento y beneficios tributarios. Solicita cotización personalizada gratuita.'
  },
  {
    id: 'savings',
    question: '¿Cuánto ahorro realmente?',
    answer: 'Entre 60% y 95% según consumo. Mayoría recupera inversión en 4-6 años.'
  },
  {
    id: 'cloudy',
    question: '¿Qué pasa en días nublados?',
    answer: 'Paneles generan energía incluso con nubes. De noche, con baterías usas energía almacenada, sin baterías consumes de la red.'
  },
  {
    id: 'batteries',
    question: '¿Necesito baterías?',
    answer: 'No obligatorias. Sistema net billing permite usar excedentes como "créditos". Baterías ideales para independencia total.'
  },
  {
    id: 'installation-time',
    question: '¿Cuánto dura instalación?',
    answer: '2-7 días según sistema.'
  },
  {
    id: 'warranty',
    question: '¿Qué garantías tienen?',
    answer: 'La que otorga el fabricante.'
  },
  {
    id: 'roof-suitable',
    question: '¿Mi techo es apto?',
    answer: 'Trabajamos con tejas, zinc, losa, fibrocemento. Evaluación técnica gratuita.'
  },
  {
    id: 'maintenance',
    question: '¿Requiere mantenimiento?',
    answer: 'Mínimo mantenimiento. Limpieza ocasional.'
  }
];

export const benefits: Benefit[] = [
  {
    id: 'savings',
    title: 'Ahorro en la Factura',
    description: 'Reduce tu factura eléctrica hasta un 95% con energía solar',
    icon: 'dollar-sign'
  },
  {
    id: 'environment',
    title: 'Cuidado del Medio Ambiente',
    description: 'Energía 100% limpia y renovable para un futuro sostenible',
    icon: 'leaf'
  },
  {
    id: 'independence',
    title: 'Independencia Energética',
    description: 'No dependas de cortes de luz ni aumentos de tarifas',
    icon: 'shield'
  },
  {
    id: 'investment',
    title: 'Excelente Inversión',
    description: 'Recupera tu inversión en 4-6 años con ahorros garantizados',
    icon: 'trending-up'
  },
  {
    id: 'maintenance',
    title: 'Bajo Mantenimiento',
    description: 'Sistemas diseñados para funcionar 25+ años con mínimo mantenimiento',
    icon: 'wrench'
  },
  {
    id: 'technology',
    title: 'Tecnología Avanzada',
    description: 'Monitoreo inteligente y control desde tu smartphone',
    icon: 'smartphone'
  }
];

export const companyInfo = {
  name: 'Xodarcom Sol Inf SL',
  email: 'info@xodarcom.com',
  phone: '650836635',
  logo: '/logo-xodarcom.png'
};
