# Estudio de Belleza Elegante

Documentación para el equipo de desarrollo del demo "Estudio de Belleza Elegante". El proyecto implementa un sitio marketing single-page con rutas seccionadas para un estudio de belleza premium.

## Tabla de contenidos
- [Visión general](#visión-general)
- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Arranque rápido](#arranque-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Guía de desarrollo](#guía-de-desarrollo)
  - [Estilos y sistema de diseño](#estilos-y-sistema-de-diseño)
  - [Enrutamiento](#enrutamiento)
  - [Datos y contenido](#datos-y-contenido)
  - [Componentes reutilizables](#componentes-reutilizables)
  - [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)
- [Configuraciones específicas](#configuraciones-específicas)
  - [WhatsApp](#whatsapp)
  - [Assets e imágenes](#assets-e-imágenes)
- [Flujo de trabajo y contribuciones](#flujo-de-trabajo-y-contribuciones)
- [Checklist antes de abrir PR](#checklist-antes-de-abrir-pr)
- [Recursos útiles](#recursos-útiles)

## Visión general
El sitio está construido con React + Vite y utiliza un diseño modular para cubrir once secciones clave (Inicio, Servicios, Experiencia, Seguridad, Políticas, Filosofía, Conócenos, Galería, Preguntas frecuentes y Contacto). La intención es entregar una landing totalmente navegable, con énfasis en la experiencia del cliente, protocolos de seguridad y branding elegante.

## Stack tecnológico
| Tecnología | Uso principal |
|------------|---------------|
| React 18 + Vite 5 | Motor de la aplicación y empaquetador |
| TypeScript | Tipado estático en componentes y utilidades |
| React Router DOM 6 | Manejo de rutas y navegación |
| Tailwind CSS + capas personalizadas | Sistema de estilos basado en utilidades + tokens HSL |
| Radix UI / shadcn | Base para componentes accesibles y modales |
| TanStack Query | Manejo de estados asincrónicos (cuando se requiera) |

## Requisitos previos
- Node.js **>= 18.0.0** (se recomienda la última LTS)
- npm **>= 9** (se instala con Node)
- Editor con soporte para TypeScript y ESLint (VS Code recomendado con las extensiones ESLint y Tailwind CSS IntelliSense)

## Arranque rápido
```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción (salida en dist/)
npm run build

# Servidor local para revisar el build
npm run preview

# Linter (ESLint) sobre todo el proyecto
npm run lint
```

## Scripts disponibles
| Script | Descripción |
|--------|-------------|
| `npm run dev` | Levanta el servidor de Vite con recarga en caliente |
| `npm run build` | Genera el paquete optimizado para producción |
| `npm run build:dev` | Build en modo development (útil para depuración de bundle) |
| `npm run preview` | Sirve el contenido de `dist/` para QA local |
| `npm run lint` | Ejecuta ESLint con la configuración del repositorio |

## Estructura de carpetas
```
src/
├── assets/             # Imágenes, iconografía e ilustraciones (usar WebP/AVIF)
├── components/         # Componentes UI compartidos (cards, modales, navegación)
├── data/               # Data mocks (servicios, amenidades, FAQs, etc.)
├── hooks/              # Hooks personalizados para filtros y UI state
├── lib/                # Integraciones y helpers de terceros
├── pages/              # Vistas por ruta (una carpeta por sección)
├── styles/             # Estilos globales, tokens y helpers CSS adicionales
├── utils/              # Utilidades (formatters, helpers, whatsapp, seo)
├── router.jsx          # Definición central de rutas
└── main.tsx            # Punto de entrada React
```

> Nota: cualquier asset nuevo debe agregarse en `src/assets/` y referenciarse mediante imports relativos para aprovechar el tree-shaking de Vite.

## Guía de desarrollo
### Estilos y sistema de diseño
- Tailwind define las utilidades base; los tokens de color, tipografía, radios y sombras viven en `src/index.css` dentro de `@layer base`.
- Utiliza HSL para definir nuevos colores (`--color-name: 0 0% 0%`). Evita introducir valores hex directos.
- Para variantes de componentes complejos (botones, tarjetas) usa `class-variance-authority` cuando necesites múltiples estados.
- Las animaciones deben durar entre 150–250ms para seguir la guía del brief. Usa `transition` utilities de Tailwind.
- Mantén la tipografía principal "Playfair Display" para títulos y "Inter" para cuerpo. Están registradas en la hoja global; evita sobrescribir salvo que el diseño lo requiera.

### Enrutamiento
- Las rutas están declaradas en `src/router.jsx`. Cada página exporta un componente por defecto que representa una sección del sitio.
- Cuando agregues nuevas secciones asegúrate de:
  1. Crear la página en `src/pages/NombreSeccion`.
  2. Registrar la ruta en el router.
  3. Añadir la entrada correspondiente en la navegación (`src/components/Header.jsx`) y en el menú móvil si aplica.

### Datos y contenido
- Servicios: definidos en `src/data/services.js`. Cada servicio debe incluir `id`, `category`, `title`, `description`, `duration`, `price`, `badge`, `amenities`, `image`, `whatsappMessage`.
- FAQs, testimonios u otros mock data siguen el mismo patrón (arrays exportados). Procura mantener el contenido en español neutro siguiendo el tono premium.
- Para cambiar el número de WhatsApp o textos de CTA revisa la sección [WhatsApp](#whatsapp).

### Componentes reutilizables
- `CardService`: tarjeta principal del catálogo. Usa props tipadas y soporta badges + amenidades.
- `ServiceDetailModal`: modal Radix para detalle extendido. Manténlo liviano; cualquier lógica adicional va en hooks.
- `Header` y `Footer`: controlan navegación y CTA persistentes. Si agregas un nuevo enlace, actualiza también los accesos rápidos del Home.

### Accesibilidad y rendimiento
- Todo ícono o imagen debe incluir `alt` descriptivo. Para íconos decorativos usa `aria-hidden="true"`.
- Implementa lazy-loading (`loading="lazy"`) para imágenes fuera del viewport inicial.
- Mantén un contraste mínimo AA (verifica con Tailwind `text-` y `bg-` que cumplan).
- Revisa Lighthouse (Performance y Accessibility ≥ 90) antes de entregar.

## Configuraciones específicas
### WhatsApp
- Edita `src/utils/whatsapp.js` para actualizar el número destino o el template de mensaje.
- Usa formato internacional (ej. `5215512345678`). Evita símbolos o espacios.
- Si se requiere cambiar el texto prellenado por servicio, actualiza `whatsappMessage` en el objeto correspondiente dentro de `src/data/services.js`.

### Assets e imágenes
- Preferimos formatos **WebP** o **AVIF** con peso < 300 KB.
- Coloca los archivos en `src/assets/images/` y haz import explícito en el componente que lo usa (esto habilita optimizaciones de Vite).
- Usa nombres descriptivos en minúsculas y separados por guiones (`antes-despues-balayage.webp`).

## Flujo de trabajo y contribuciones
1. Crea una rama feature a partir de `main` siguiendo el patrón `feature/nombre-corto` o `fix/ajuste-descriptivo`.
2. Realiza commits descriptivos en español usando el modo imperativo (ej. `feat: agrega sección de filosofía`).
3. Antes de abrir PR:
   - Asegúrate de que `npm run lint` y `npm run build` pasan sin errores.
   - Adjunta captura si el cambio modifica UI.
4. Abre Pull Request contra `main` usando la plantilla del repositorio (o siguiendo el resumen: qué cambiaste, por qué y cómo probarlo).

## Checklist antes de abrir PR
- [ ] Diseño respetado (paleta, tipografía, spacing)
- [ ] Responsividad validada en 360px, 768px y 1200px
- [ ] Estados hover/focus implementados en CTAs
- [ ] Texto revisado (sin errores ortográficos)
- [ ] Imágenes optimizadas y con `alt`
- [ ] Tests de build y lint ejecutados

## Recursos útiles
- [Guía de Tailwind](https://tailwindcss.com/docs) – Referencia para utilidades y buenas prácticas.
- [Radix UI](https://www.radix-ui.com/primitives) – Documentación de componentes accesibles.
- [Shadcn UI](https://ui.shadcn.com/docs) – Patrones de componentes reutilizables.
- [Vite](https://vitejs.dev/guide/) – Configuración y optimización del bundler.
- [React Router](https://reactrouter.com/en/main/start/tutorial) – Navegación y loaders.

---
Desarrollado con ❤️ por el equipo de Estudio de Belleza Elegante.
