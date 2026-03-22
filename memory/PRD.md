# PRD: CONER Landing Page - Recupera tu AFORE

## Fecha de Creación
21 de Marzo, 2025

## Problema Original
Crear una landing page premium de alta conversión para CONER (Consultores Especializados en Retiros), una firma de consultoría financiera que ayuda a clientes en México a retirar dinero de sus fondos de retiro AFORE.

## Objetivo del Producto
Desarrollar una landing page elegante, corporativa y de conversión optimizada con:
- Diseño dark theme con acentos dorados (gold)
- Estética premium de firma financiera/legal
- Enfoque en conversión a WhatsApp leads
- Completamente responsive (mobile-first)
- Tono profesional, confiable y persuasivo para audiencia mexicana

## User Personas

### Persona Principal: "María - Profesional en Búsqueda de Liquidez"
- **Edad**: 30-55 años
- **Ubicación**: Oaxaca, zona costa, Mixteca, parte de Chiapas
- **Situación**: Desempleada o necesita liquidez urgente
- **Pain Points**: 
  - Ha intentado retirar su AFORE pero fue rechazada
  - No entiende los requisitos
  - Necesita el dinero pero está frustrada con el proceso
- **Necesidades**: Ayuda profesional, transparencia, rapidez

## Información de Marca

### Identidad
- **Nombre**: CONER
- **Subtítulo**: Consultores Especializados en Retiros
- **Colores**: Negro (#000000) + Oro (#D4AF37)
- **Logo**: C con checkmark integrado (proporcionado por cliente)
- **WhatsApp**: +52 1 222 414 6832
- **Facebook**: https://www.facebook.com/conerconsultores
- **Cobertura**: Oaxaca, Zona Costa, Mixteca y parte de Chiapas

## Arquitectura Técnica

### Stack
- **Frontend**: React + Vite
- **Styling**: Custom CSS (Dark Theme Guidelines)
- **Animations**: Framer Motion
- **Components**: Shadcn UI (Accordion, Button, Card)
- **Routing**: React Router DOM

### Estructura de Archivos
```
/app/frontend/src/
├── pages/
│   └── Landing.jsx (Componente principal)
├── styles/
│   └── Landing.css (Estilos dark theme premium)
├── utils/
│   └── mockData.js (Datos mock para todas las secciones)
└── components/ui/ (Shadcn components)
```

## Funcionalidades Implementadas (21 de Marzo, 2025)

### ✅ Secciones Completadas

1. **Header/Navigation**
   - Logo CONER real integrado
   - Navegación fija con enlaces suaves (Servicios, Nosotros, Testimonios, FAQ)
   - CTA "Contactar" con ícono WhatsApp
   - Menú móvil hamburguesa responsivo
   - Backdrop blur effect

2. **Hero Section**
   - Headline persuasivo: "Recupera tu dinero de AFORE sin complicaciones"
   - Subheadline con propuesta de valor
   - Elemento de urgencia con ícono
   - Dos CTAs: "Iniciar trámite" (primario) y "Hablar por WhatsApp" (secundario)
   - Imagen profesional de consultoría
   - Layout split-screen (desktop) y stack (mobile)

3. **Problem Section**
   - 4 pain points clave presentados en grid
   - Iconos emojis para identificación rápida
   - Hover effects sutiles
   - Tono empático y de frustración

4. **Solution Section**
   - 4 pasos del proceso numerados
   - Borde izquierdo dorado para destacar
   - Animaciones de entrada desde la izquierda
   - Título en color oro

5. **Services Section**
   - 6 servicios en grid responsivo
   - Cards con hover effects
   - Iconos Lucide React en color brand
   - Servicios: Retiro por desempleo, matrimonio, asesoría AFORE, corrección de datos, consulta de saldo, maximización

6. **Trust Section**
   - Layout imagen + features
   - 4 features de confianza con iconos
   - Imagen profesional de equipo
   - Border dorado en imagen

7. **Results Section**
   - 4 métricas clave: +100 clientes, +$2.5M MXN, 15-30 días, 95% éxito
   - Números grandes en color oro
   - Grid responsivo
   - Iconos representativos

8. **Testimonials Section**
   - 5 testimonios reales de clientes mexicanos
   - Nombres y ubicaciones de Oaxaca/región
   - Avatares con iniciales en oro
   - Comillas decorativas
   - Grid 2 columnas en desktop

9. **FAQ Section (Accordion)**
   - 6 preguntas frecuentes sobre AFORE
   - Shadcn Accordion component
   - Respuestas detalladas y tranquilizadoras
   - Hover effects en preguntas

10. **CTA Section**
    - Call-to-action final destacado
    - Box con borde dorado
    - Urgencia: "Cupos limitados"
    - Nota de respuesta rápida
    - Botón XL primario

11. **Footer**
    - Logo y tagline
    - 3 columnas: Servicios, Empresa, Contacto
    - Enlaces a WhatsApp y Facebook
    - Copyright y ubicación
    - Color scheme consistente

12. **Floating WhatsApp Button**
    - Botón fijo en esquina inferior derecha
    - Color verde WhatsApp oficial (#25D366)
    - Animación de entrada
    - Hover scale effect
    - Z-index alto (999)

### 🎨 Características de Diseño

- **Tema Dark Premium**: Fondo negro puro con cards #121212
- **Acentos Dorados**: #D4AF37 usado estratégicamente en CTAs, bordes, iconos
- **Botones Sharp**: Border-radius: 0px (esquinas rectas) según guidelines
- **Tipografía**: Inter font, jerarquía clara con tamaños grandes
- **Animaciones**: Framer Motion para fade-in, slide-in, hover effects
- **Responsive**: Mobile-first con breakpoints 768px y 1024px
- **Spacing Premium**: Generoso padding y margins para sensación de lujo
- **Hover States**: Todos los elementos interactivos tienen feedback visual
- **Color Contrast**: Alto contraste para legibilidad en dark theme

### 🔗 Integraciones

- **WhatsApp**: Todos los CTAs abren WhatsApp con mensaje pre-rellenado
- **Facebook**: Link al perfil de CONER en footer
- **Imágenes**: Unsplash/Pexels (3 imágenes profesionales de consultoría)

## Mock Data Incluido

Todos los datos están en `/app/frontend/src/utils/mockData.js`:
- 4 problemas
- 4 pasos de solución
- 6 servicios
- 4 trust features
- 4 resultados/métricas
- 5 testimonios con nombres mexicanos
- 6 FAQs sobre AFORE

## Estado Actual

### ✅ Completado
- Frontend completo con todas las secciones
- Diseño responsive (mobile + tablet + desktop)
- Integración de WhatsApp y Facebook
- Logo real de CONER
- Imágenes profesionales
- Animaciones smooth
- Dark theme con gold accents
- Navegación funcional

### 🔄 Pendiente (Backlog P1)
- Backend API para capturar leads (formulario de contacto)
- Base de datos MongoDB para guardar consultas
- Email notifications cuando llega un lead
- Google Analytics integration
- Meta Pixel para tracking de conversión
- Optimización SEO (meta tags, structured data)
- Compresión y optimización de imágenes

### 💡 Mejoras Futuras (Backlog P2)
- A/B testing de headlines y CTAs
- Calculadora de retiro AFORE interactiva
- Video explicativo del proceso
- Chat widget en vivo
- Blog de contenido sobre AFORE
- Landing pages específicas por tipo de retiro
- Sistema de agendamiento de citas
- Portal de cliente para seguimiento de trámite

## Next Action Items

1. **Testing del frontend**: Verificar todos los links y animaciones
2. **Optimización de velocidad**: Lazy loading de imágenes, bundle optimization
3. **Backend Development** (cuando usuario confirme):
   - Endpoint POST /api/leads para capturar consultas
   - Modelo de Lead en MongoDB
   - Integración con email service (SendGrid/Resend)
   - Webhook a WhatsApp Business API (opcional)
4. **Deployment optimizations**
5. **User feedback y iteraciones**

## Métricas de Éxito

- Tasa de conversión: leads generados / visitantes únicos
- Tiempo en página > 2 minutos
- Scroll depth: usuarios que llegan al FAQ
- CTR del botón WhatsApp
- Tasa de rebote < 50%

## Notas Técnicas

- Usar REACT_APP_BACKEND_URL para API calls cuando se implemente backend
- WhatsApp número formateado sin espacios: +5212224146832
- Todas las rutas de API deben usar prefijo /api
- Hot reload habilitado en frontend
- Supervisor maneja los servicios
