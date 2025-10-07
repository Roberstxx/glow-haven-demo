// Mock data for client testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Mariana R.',
    service: 'Maquillaje de Novia',
    rating: 5,
    comment: '¡Increíble experiencia! El maquillaje duró perfecto toda la boda. Me sentí hermosa y segura. Totalmente recomendado para novias.',
    date: '2025-09-15'
  },
  {
    id: 2,
    name: 'Carlos M.',
    service: 'Corte Caballero',
    rating: 5,
    comment: 'Excelente atención y profesionalismo. El corte quedó justo como quería. El ambiente es muy limpio y cómodo.',
    date: '2025-09-10'
  },
  {
    id: 3,
    name: 'Ana Patricia G.',
    service: 'Uñas Acrílicas',
    rating: 5,
    comment: 'Llevo 3 meses viniendo y siempre salgo feliz. Las uñas me duran perfectas y los diseños son hermosos. Vale cada peso.',
    date: '2025-08-28'
  },
  {
    id: 4,
    name: 'Laura S.',
    service: 'Peinado de Evento',
    rating: 5,
    comment: 'Mi peinado para la graduación quedó espectacular. Aguantó toda la noche sin un solo pasador suelto. ¡Magia pura!',
    date: '2025-08-20'
  },
  {
    id: 5,
    name: 'Roberto L.',
    service: 'Corte y Barba',
    rating: 5,
    comment: 'Muy profesional, limpio y puntual. El mejor lugar para corte de caballero en la zona.',
    date: '2025-08-15'
  },
  {
    id: 6,
    name: 'Diana F.',
    service: 'Maquillaje de Evento',
    rating: 5,
    comment: 'Fui para un evento corporativo y quedé encantada. El maquillaje era elegante pero natural, perfecto para la ocasión.',
    date: '2025-07-30'
  }
];

export const getRecentTestimonials = (count = 3) => {
  return testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

export const getAverageRating = () => {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return (sum / testimonials.length).toFixed(1);
};
