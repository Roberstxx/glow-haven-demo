// Mock data for beauty services
export const services = [
  {
    id: 'unas-acrilicas-naturales',
    slug: 'unas-acrilicas-naturales',
    name: 'Uñas Acrílicas Naturales',
    category: 'unas',
    shortDescription: 'Esculpido de uñas acrílicas con acabado natural y elegante.',
    fullDescription: 'Servicio completo de uñas acrílicas con técnica de esculpido profesional. Incluye preparación de uña natural, aplicación de tips o moldes, esculpido con acrílico de alta calidad, limado y pulido. Acabado natural y elegante que luce como tus uñas propias pero más fuertes y largas.',
    duration: 120, // minutos
    priceFrom: 450,
    priceTo: 550,
    tags: ['popular', 'duracion-media'],
    amenities: ['basico', 'confort'],
    badge: 'popular',
    images: ['/images/unas1.webp'],
    extras: [
      'Remoción de uñas anteriores (si aplica): +$100',
      'Diseño con esmalte gel: +$150',
      'Arte en uñas (por diseño): desde $50'
    ],
    requirements: [
      'Llegar con uñas limpias y sin esmalte',
      'Avisar si se requiere remoción de set anterior',
      'Evitar cremas o aceites en las manos 24h antes'
    ],
    relatedServices: ['maquillaje-evento', 'peinado-recogido']
  },
  {
    id: 'maquillaje-evento',
    slug: 'maquillaje-evento',
    name: 'Maquillaje de Evento',
    category: 'maquillaje',
    shortDescription: 'Maquillaje profesional para eventos especiales, bodas y celebraciones.',
    fullDescription: 'Maquillaje profesional completo para eventos especiales. Incluye análisis de rostro, preparación de piel, aplicación de base con técnica airbrush opcional, contorneo, ojos con sombras de alta pigmentación, pestañas postizas, rubor y labios de larga duración. Perfecto para bodas, quinceañeras, graduaciones y eventos importantes.',
    duration: 90,
    priceFrom: 800,
    priceTo: 1200,
    tags: ['premium', 'ocasion-especial'],
    amenities: ['confort', 'premium'],
    badge: 'premium',
    images: ['/images/maquillaje1.webp'],
    extras: [
      'Maquillaje para novia (incluye prueba): $1,500',
      'Técnica airbrush: +$300',
      'Pestañas de mink: +$200',
      'Retoque de 2 horas: +$250'
    ],
    requirements: [
      'Llegar con rostro limpio e hidratado',
      'Traer referencias fotográficas si deseas un look específico',
      'Para novias: agendar prueba previa (2-4 semanas antes)'
    ],
    relatedServices: ['peinado-recogido', 'unas-acrilicas-naturales']
  },
  {
    id: 'peinado-recogido',
    slug: 'peinado-recogido',
    name: 'Peinado Recogido Elegante',
    category: 'cabello',
    shortDescription: 'Peinado recogido sofisticado para ocasiones especiales.',
    fullDescription: 'Peinado recogido profesional diseñado especialmente para eventos. Incluye lavado y acondicionamiento, secado con técnica de volumen, ondulado o alisado según el diseño, peinado recogido con técnica profesional, fijación con productos de alta calidad y acabado con spray de brillo. Ideal para bodas, galas y eventos formales.',
    duration: 75,
    priceFrom: 600,
    priceTo: 900,
    tags: ['ocasion-especial', 'popular'],
    amenities: ['basico', 'confort'],
    badge: 'popular',
    images: ['/images/peinado1.webp'],
    extras: [
      'Peinado para novia (incluye prueba): $1,200',
      'Extensiones temporales: +$400',
      'Aplicación de accesorios (tiara, flores): incluido',
      'Tratamiento de brillo y nutrición: +$150'
    ],
    requirements: [
      'Llegar con cabello lavado (máximo 24h antes)',
      'Traer accesorios si deseas incorporarlos',
      'Para cabello corto: consultar viabilidad previa'
    ],
    relatedServices: ['maquillaje-evento', 'unas-acrilicas-naturales']
  },
  {
    id: 'corte-caballero',
    slug: 'corte-caballero',
    name: 'Corte Caballero',
    category: 'cabello',
    shortDescription: 'Corte de cabello profesional para hombre con acabado impecable.',
    fullDescription: 'Servicio de corte de cabello masculino profesional. Incluye consulta de estilo, lavado con productos premium, corte con tijera y/o máquina según preferencia, perfilado de patillas y nuca, secado y peinado con productos de fijación. Acabado pulcro y moderno que resalta tus facciones.',
    duration: 45,
    priceFrom: 250,
    priceTo: 350,
    tags: ['basico', 'rapido'],
    amenities: ['basico'],
    badge: null,
    images: ['/images/corte1.webp'],
    extras: [
      'Arreglo de barba: +$150',
      'Tinte o matizado: +$400',
      'Tratamiento capilar nutritivo: +$200'
    ],
    requirements: [
      'Llegar con cabello seco o ligeramente húmedo',
      'Traer foto de referencia si buscas un estilo específico'
    ],
    relatedServices: []
  },
  {
    id: 'unas-gel-color',
    slug: 'unas-gel-color',
    name: 'Uñas en Gel Color',
    category: 'unas',
    shortDescription: 'Esmaltado permanente en gel con secado LED, hasta 3 semanas de duración.',
    fullDescription: 'Manicure completo con aplicación de esmalte en gel de larga duración. Incluye limado, cutícula, hidratación, aplicación de base, dos capas de color y top coat con secado LED. Acabado brillante y resistente que dura hasta 3 semanas sin descascararse.',
    duration: 60,
    priceFrom: 300,
    priceTo: 400,
    tags: ['basico', 'popular'],
    amenities: ['basico'],
    badge: 'popular',
    images: ['/images/unas1.webp'],
    extras: [
      'Remoción de gel anterior: +$80',
      'Diseño simple (francés, degradado): +$100',
      'Aplicación de cristales: desde $50'
    ],
    requirements: [
      'Evitar limar las uñas en casa antes del servicio',
      'Si traes gel previo, programar tiempo extra para remoción'
    ],
    relatedServices: ['unas-acrilicas-naturales']
  },
  {
    id: 'depilacion-facial',
    slug: 'depilacion-facial',
    name: 'Depilación Facial',
    category: 'depilacion',
    shortDescription: 'Depilación con cera o hilo para cejas, bozo y zonas faciales.',
    fullDescription: 'Servicio de depilación facial con técnicas profesionales. Incluye depilación de cejas con diseño personalizado, bozo, patillas y mentón. Usamos cera hipoalergénica de baja temperatura o técnica de hilo según preferencia. Incluye aplicación de gel calmante post-depilación.',
    duration: 30,
    priceFrom: 150,
    priceTo: 250,
    tags: ['rapido', 'basico'],
    amenities: ['basico'],
    badge: null,
    images: [],
    extras: [
      'Tinte de cejas: +$100',
      'Laminado de cejas: +$350'
    ],
    requirements: [
      'Vello de al menos 3mm de largo para mejor resultado',
      'Evitar sol o exfoliantes 24h antes y después',
      'Informar si usas retinol o ácidos'
    ],
    relatedServices: []
  }
];

// Filter helper functions
export const categories = [
  { id: 'unas', name: 'Uñas', icon: 'unas.svg' },
  { id: 'maquillaje', name: 'Maquillaje', icon: 'maquillaje.svg' },
  { id: 'cabello', name: 'Cabello', icon: 'cabello.svg' },
  { id: 'depilacion', name: 'Depilación', icon: 'depilacion.svg' }
];

export const allTags = [
  { id: 'popular', name: 'Popular' },
  { id: 'premium', name: 'Premium' },
  { id: 'basico', name: 'Básico' },
  { id: 'rapido', name: 'Rápido' },
  { id: 'ocasion-especial', name: 'Ocasión Especial' },
  { id: 'duracion-media', name: 'Duración Media' }
];

export const amenitiesOptions = [
  {
    id: 'basico',
    name: 'Básico',
    description: 'Snack dulce + bebida simple',
    features: ['Snack dulce de cortesía', 'Bebida simple (café, té o agua)']
  },
  {
    id: 'confort',
    name: 'Confort',
    description: 'Snack + bebida + streaming',
    features: [
      'Snack dulce o salado premium',
      'Bebida a elección (latte, té, mocktail)',
      'Acceso a plataformas de streaming'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Champán o vino + kit exclusivo',
    features: [
      'Brindis con champán o vino seleccionado',
      'Kit exclusivo para novias/eventos',
      'Detalles personalizados de cortesía'
    ]
  }
];

export const durationRanges = [
  { id: 'rapido', name: 'Rápido (< 45 min)', min: 0, max: 45 },
  { id: 'medio', name: 'Medio (45-90 min)', min: 45, max: 90 },
  { id: 'largo', name: 'Largo (> 90 min)', min: 90, max: 999 }
];

export const priceRanges = [
  { id: 'bajo', name: 'Hasta $300', min: 0, max: 300 },
  { id: 'medio', name: '$300 - $600', min: 300, max: 600 },
  { id: 'alto', name: '$600 - $1000', min: 600, max: 1000 },
  { id: 'premium', name: 'Más de $1000', min: 1000, max: 999999 }
];

