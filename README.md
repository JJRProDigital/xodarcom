# 🌞 Xodarcom Sol Inf SL - Landing Page

Una landing page moderna y profesional para instalaciones de paneles solares, desarrollada con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

### ✨ Diseño Moderno
- **Diseño Silicon Valley**: Interfaz moderna y profesional
- **Animaciones Fluidas**: Efectos con Framer Motion
- **Responsive Design**: Optimizado para todos los dispositivos
- **Colores de Marca**: Naranja solar, azul eléctrico, verde energía

### 🎯 Optimización de Conversión
- **CTA Prominente**: Botones de acción claros y visibles
- **Formulario Optimizado**: Captura de leads eficiente
- **Prueba Social**: Casos de éxito y testimonios
- **FAQ Interactivo**: Resolución de objeciones

### ⚡ Rendimiento
- **Next.js 14**: Framework moderno y rápido
- **TypeScript**: Código tipado y seguro
- **Tailwind CSS**: Estilos optimizados
- **Lazy Loading**: Carga diferida de componentes

## 🛠️ Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconografía
- **Headless UI** - Componentes accesibles

## 📱 Secciones

### 1. **Hero Section**
- Título impactante con gradientes
- CTA principal prominente
- Partículas flotantes animadas
- Estadísticas destacadas

### 2. **Proceso con Video**
- Video embed de YouTube
- Características del proceso
- Estadísticas de satisfacción

### 3. **Beneficios**
- 6 beneficios principales
- Iconografía moderna
- Animaciones de hover

### 4. **Tipos de Sistemas**
- 3 sistemas diferentes
- Cards interactivas
- CTAs individuales

### 5. **Timeline del Proceso**
- 5 pasos del proceso
- Timeline visual
- Responsive design

### 6. **Casos de Éxito**
- 3 proyectos reales
- Contadores animados
- Métricas de ahorro

### 7. **Formulario de Contacto**
- Validación en tiempo real
- Estados de carga
- Información de contacto

### 8. **FAQ**
- 8 preguntas frecuentes
- Accordion interactivo
- Búsqueda de preguntas

## 🎨 Sistema de Diseño

### Colores
- **Naranja Solar**: #FF6B35
- **Azul Eléctrico**: #004E89
- **Verde Energía**: #2A9D8F
- **Grises**: Escala completa

### Tipografías
- **Inter**: Texto general
- **Poppins**: Títulos y display

### Animaciones
- **Fade In**: Aparición suave
- **Slide Up**: Entrada desde abajo
- **Scale**: Efectos de escala
- **Hover**: Interacciones fluidas

## 📊 Métricas de Éxito

### KPIs Principales
- **Conversion Rate**: > 5%
- **Bounce Rate**: < 40%
- **Time on Page**: > 2 minutos
- **Mobile Performance**: > 90

### KPIs Secundarios
- **Form Completions**: > 80%
- **Scroll Depth**: > 70%
- **Video Engagement**: > 50%
- **FAQ Usage**: > 30%

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProcessVideo.tsx
│   │   ├── Benefits.tsx
│   │   ├── Systems.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── SuccessCases.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       ├── ScrollReveal.tsx
│       ├── AnimatedCounter.tsx
│       ├── FloatingParticles.tsx
│       ├── LoadingScreen.tsx
│       └── ScrollToTop.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## 🎯 Principio de Pareto

### 20% de Esfuerzo = 80% de Resultados
1. **Hero Section**: Impacto inmediato
2. **Formulario**: Conversión directa
3. **Beneficios**: Justificación de compra
4. **Casos de Éxito**: Prueba social
5. **FAQ**: Resolución de objeciones

## 🔧 Configuración

### Variables de Entorno
```env
NEXT_PUBLIC_COMPANY_NAME="Xodarcom Sol Inf SL"
NEXT_PUBLIC_COMPANY_EMAIL="info@xodarcom.com"
NEXT_PUBLIC_COMPANY_PHONE="650836635"
```

### Tailwind Config
- Colores personalizados
- Animaciones custom
- Sombras personalizadas
- Breakpoints optimizados

## 📈 Optimizaciones

### SEO
- Meta tags optimizados
- Structured data
- Open Graph
- Twitter Cards

### Performance
- Lazy loading
- Image optimization
- Code splitting
- Bundle optimization

### Accesibilidad
- Navegación por teclado
- Screen readers
- Alt text
- ARIA labels

## 🎨 Personalización

### Colores
Editar `tailwind.config.ts` para cambiar la paleta de colores.

### Contenido
Modificar `src/lib/data.ts` para actualizar el contenido.

### Animaciones
Ajustar duraciones en `src/components/ui/` para personalizar animaciones.

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Optimizaciones
- Mobile first approach
- Touch-friendly interfaces
- Gestos nativos
- Performance móvil

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=out
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: info@xodarcom.com
- **Teléfono**: 650 836 635
- **Web**: https://xodarcom.com

## 📄 Licencia

© 2024 Xodarcom Sol Inf SL. Todos los derechos reservados.

---

**Desarrollado con ❤️ para el futuro de la energía solar**