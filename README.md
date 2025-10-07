# Estudio de Belleza Elegante

Demo profesional de sitio web para estudio de belleza construido con **React + Vite** usando CSS puro (sin Tailwind).

## 🎨 Características

- ✅ Catálogo de servicios filtrable (categoría, tags, duración, precio, búsqueda)
- ✅ Detalle de servicio con extras y requisitos
- ✅ Galería con antes/después interactivo
- ✅ Testimonios de clientes
- ✅ Integración WhatsApp con mensajes prellenados
- ✅ SEO optimizado (metas, Open Graph, JSON-LD)
- ✅ Accesibilidad (ARIA, navegación por teclado)
- ✅ Responsive (móvil/tablet/desktop)
- ✅ Performance optimizado (lazy loading)

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📁 Estructura

```
src/
├── assets/images/     # Imágenes optimizadas WebP
├── components/        # Componentes reutilizables
├── data/             # Datos mock (servicios, testimonios, portfolio)
├── hooks/            # Custom hooks (useFilters)
├── pages/            # Páginas por ruta
├── styles/           # CSS modular (variables, reset, base, layout, components)
└── utils/            # Utilidades (formatters, whatsapp, seo)
```

## 🔧 Configuración WhatsApp

Edita `src/utils/whatsapp.js` línea 7:
```javascript
const WHATSAPP_NUMBER = '5215512345678'; // Tu número con código país
```

## 📱 Rutas

- `/` - Home
- `/servicios` - Catálogo filtrable
- `/servicios/:slug` - Detalle de servicio
- `/galeria` - Portafolio con lightbox
- `/contacto` - Información de contacto
- `/conocenos` - Sobre nosotros
- `/experiencia`, `/seguridad`, `/politicas`, `/filosofia`, `/faq`

## 🎯 SEO

Cada página tiene metas optimizadas. Home incluye JSON-LD BeautySalon para rich snippets.

---

Desarrollado con ❤️ usando React + Vite
