import { Service, ExtraAddon, Specialist, GalleryItem, Testimonial, FaqItem, TimeSlot } from '../types';

export const SALON_INFO = {
  name: 'Velvet Rose',
  tagline: 'Estudio de Uñas & Beauty Bar',
  subtitle: 'Donde el arte del cuidado de uñas se encuentra con el lujo y la durabilidad.',
  phone: '+56 9 8765 4321',
  whatsappNumber: '56987654321',
  address: 'Av. Providencia 2120, Suite 402, Santiago',
  instagram: '@velvetrose.nails',
  hours: 'Lunes a Sábado: 09:00 - 20:00 hrs',
  rating: 4.9,
  reviewsCount: 480,
  guaranteeDays: 21,
};

export const SERVICES: Service[] = [
  {
    id: 'russe-semi',
    name: 'Manicura Rusa + Semipermanente',
    category: 'manicura',
    price: 22000,
    formattedPrice: '$22.000',
    durationMinutes: 60,
    shortDescription: 'Limpieza profunda de cutículas con torno y esmaltado de alta precisión nivelado.',
    fullDescription: 'La Manicura Rusa (Hardware Manicure) despeja impecablemente el bolsillo cuticular sin dolor, permitiendo un esmaltado debajo de la cutícula para un crecimiento limpio e invisible durante semanas.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    includes: [
      'Limpieza combinada profunda con brocas diamantadas',
      'Exfoliación suave e hidratación con aceites esenciales',
      'Nivelación de la placa ungueal con base rubber',
      'Esmaltado en gel duradero a elección'
    ]
  },
  {
    id: 'soft-gel',
    name: 'Soft Gel Extensions (GelX)',
    category: 'gelx',
    price: 32000,
    formattedPrice: '$32.000',
    durationMinutes: 90,
    shortDescription: 'Extensiones de gel premoldeadas ultraligeras y resistentes de aspecto 100% natural.',
    fullDescription: 'Sistema revolucionario que extiende tus uñas usando tips de gel flexible curados con luz LED. No daña la uña natural, no tiene olores fuertes y brinda un acabado delgado pero indestructible.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
    includes: [
      'Preparación limpia estilo ruso',
      'Colocación de tips Soft Gel en el largo y forma deseados',
      'Esmaltado en gel con color o diseño liso',
      'Garantía de retención sin desprendimientos'
    ]
  },
  {
    id: 'kapping-gel',
    name: 'Kapping Gel Protector',
    category: 'kapping',
    price: 26000,
    formattedPrice: '$26.000',
    durationMinutes: 75,
    shortDescription: 'Capa protectora de gel fortalecedor sobre tu uña natural para evitar quiebres.',
    fullDescription: 'Ideal para personas con uñas quebradizas o frágiles que desean dejarlas crecer naturalmente. Crea una coraza flexible y ultra resistente manteniendo el grosor ideal.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    includes: [
      'Manicura combinada con torno',
      'Aplicación de Kapping nivelador de alta densidad',
      'Esmaltado semipermanente en color pastel o nude',
      'Masaje relajante de manos con crema de rosas'
    ]
  },
  {
    id: 'pedicura-rose',
    name: 'Pedicura Spa Ritual Rose & Silk',
    category: 'pedicura',
    price: 28000,
    formattedPrice: '$28.000',
    durationMinutes: 75,
    shortDescription: 'Tratamiento restaurador para pies con sales de baño, pétalos de rosa y esmaltado gel.',
    fullDescription: 'Experiencia multisensorial para revitalizar tus pies. Incluye hidromasaje en tina con sales de magnesio y pétalos, remoción de durezas con torno de podología estética y esmaltado impecable.',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
    includes: [
      'Baño de pies aromático con pétalos y aceites',
      'Exfoliación orgánica de azucar y almendras',
      'Tratamiento de durezas e hidratación profunda',
      'Esmaltado semipermanente de larga duración'
    ]
  },
  {
    id: 'acrilicas-sculpt',
    name: 'Uñas Acrílicas Esculpidas',
    category: 'acrilicas',
    price: 36000,
    formattedPrice: '$36.000',
    durationMinutes: 105,
    shortDescription: 'Esculpido artesanal en acrílico con moldes para lograr máxima estructura y diseño.',
    fullDescription: 'Arquitectura de uñas personalizada usando moldes de escultura. Permite corregir uñas con tendencias a encarnarse, mordidas o asimétricas con durabilidad excepcional.',
    popular: false,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    includes: [
      'Esculpido preciso en acrílico cristal o cover pastel',
      'Formas estructurales (Almond, Coffin, Square, Stiletto)',
      'Sellado cuticle oil deluxe',
      'Esmaltado gel de acabado brillante o mate'
    ]
  },
  {
    id: 'nailart-master',
    name: 'Nail Art Personalizado & 3D',
    category: 'nailart',
    price: 15000,
    formattedPrice: 'Desde $15.000',
    durationMinutes: 45,
    shortDescription: 'Diseños a mano alzada, efectos cromo, encajes, relieve 3D y cristales Swarovski.',
    fullDescription: 'Crea una obra de arte única en cada uña. Desde el clásico French vanguardista hasta encapsulados, efecto dona glaseada, aura nails y apliques tridimensionales.',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    includes: [
      'Consultoría de diseño e inspiración personalizada',
      'Técnicas combinadas a mano alzada',
      'Pigmentos de efecto espejo y aura',
      'Cristalería Swarovski original garantizada'
    ]
  }
];

export const EXTRA_ADDONS: ExtraAddon[] = [
  { id: 'glazed-effect', name: 'Efecto Glazed Donut / Cromo Perla', price: 4000, formattedPrice: '+$4.000', durationMinutes: 10 },
  { id: 'french-art', name: 'French Moderno / Degradado Babyboomer', price: 5000, formattedPrice: '+$5.000', durationMinutes: 15 },
  { id: 'swarovski-pack', name: 'Pack Cristales Swarovski & Dijes 3D', price: 6000, formattedPrice: '+$6.000', durationMinutes: 15 },
  { id: 'removal-previous', name: 'Retiro de Trabajo Anterior de Otro Local', price: 5000, formattedPrice: '+$5.000', durationMinutes: 20 },
  { id: 'paraffin-hydra', name: 'Mascarilla Termal de Parafina Nutritiva', price: 7000, formattedPrice: '+$7.000', durationMinutes: 15 },
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'valeria',
    name: 'Valeria Sotomayor',
    role: 'Master Nail Artist & Fundadora',
    experience: '8 años de experiencia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    specialty: 'Manicura Rusa & Nail Art 3D',
    bio: 'Certificada internacionalmente en técnica rusa. Especialista en micro-pintura y estructuras elegantes.'
  },
  {
    id: 'camila',
    name: 'Camila Rossi',
    role: 'Especialista en Soft Gel & Kapping',
    experience: '5 años de experiencia',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    specialty: 'Soft Gel Extensions & Glazed Donuts',
    bio: 'Experta en alineación y nivelación con gel. Apasionada por los tonos nude y degradados minimalistas.'
  },
  {
    id: 'sofia',
    name: 'Sofía Morales',
    role: 'Podóloga Estética & Pedicura Spa',
    experience: '6 años de experiencia',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    specialty: 'Pedicura Spa Ritual & Uñas Saludables',
    bio: 'Enfocada en el bienestar holístico del pie y manicura médica estética sin agresión.'
  },
  {
    id: 'any',
    name: 'Cualquier Especialista Disponible',
    role: 'Equipo Velvet Rose',
    experience: 'Estándar de calidad garantizado',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    specialty: 'Horario flexible garantizado',
    bio: 'Selecciona esta opción si deseas la fecha/hora más próxima disponible con cualquiera de nuestras manicuristas.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Milky White & Gold Leaf',
    category: 'milky',
    categoryLabel: 'Milky Nails',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
    likes: 342,
    technique: 'Soft Gel + Hojas de Oro 24K',
    artist: 'Valeria Sotomayor',
    description: 'Efecto lácteo suave y sofisticado con incrustaciones orgánicas de lámina de oro en las puntas.'
  },
  {
    id: 'gal-2',
    title: 'Glazed Donut Pearl Shine',
    category: 'glazed',
    categoryLabel: 'Efecto Glazed',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    likes: 512,
    technique: 'Manicura Rusa + Pigmento Cromo',
    artist: 'Camila Rossi',
    description: 'El clásico brillo aperlado que refleja destellos de luz multicolor manteniendo la naturalidad nude.'
  },
  {
    id: 'gal-3',
    title: 'Minimalist Nude & Micro French',
    category: 'french',
    categoryLabel: 'French Moderno',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    likes: 289,
    technique: 'Kapping + Trazo Micro French Dorado',
    artist: 'Valeria Sotomayor',
    description: 'Línea ultra delgada dorada en el borde libre sobre una base rosada transparente.'
  },
  {
    id: 'gal-4',
    title: '3D Chrome Swirls & Pearls',
    category: 'nailart3d',
    categoryLabel: 'Nail Art 3D',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    likes: 620,
    technique: 'Gel Constructor 3D + Perlas en relieve',
    artist: 'Valeria Sotomayor',
    description: 'Ondas esculturales en relieve metálico combinadas con apliques mini perlas de agua dulce.'
  },
  {
    id: 'gal-5',
    title: 'Rose Quartz & Sheer Blush',
    category: 'minimal',
    categoryLabel: 'Minimal Nude',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    likes: 410,
    technique: 'Efecto Marmolado Cuarzo Rosa',
    artist: 'Camila Rossi',
    description: 'Vetas translúcidas imitando la textura natural del cuarzo rosa en uñas almendradas.'
  },
  {
    id: 'gal-6',
    title: 'Sleek Stiletto Champagne',
    category: 'stiletto',
    categoryLabel: 'Stiletto / Almond',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    likes: 388,
    technique: 'Esculpido Acrílico + Glitter Champán',
    artist: 'Valeria Sotomayor',
    description: 'Estructura stiletto estilizada con degradado fino de destellos champán dorados.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'María Ignacia Silva',
    clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 3 días',
    serviceUsed: 'Soft Gel Extensions',
    comment: '¡Quedé enamorada! La atención es de un nivel de lujo increíble. Te reciben con un café delicioso, el espacio es hermosísimo y las uñas me han durado intactas por más de 3 semanas. Vale cada peso.',
    nailPhoto: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=400&q=80',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Constanza Fernández',
    clientAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 1 semana',
    serviceUsed: 'Manicura Rusa + Kapping',
    comment: 'Mis uñas eran súper quebradizas y con la Manicura Rusa + Kapping de Valeria han crecido sanas y fuertes por primera vez en mi vida. El lugar huele increíble y la desinfección de las herramientas me da total tranquilidad.',
    nailPhoto: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=400&q=80',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Valentina Larraín',
    clientAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Hace 2 semanas',
    serviceUsed: 'Pedicura Spa Ritual Rose',
    comment: 'Súper recomendado para un momento de desconexión. La pedicura spa con pétalos y exfoliación deja los pies suavecitos como de bebé. Volveré todos los meses sin falta.',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'general',
    question: '¿Con cuánta anticipación debo reservar mi turno?',
    answer: 'Recomendamos agendar con 3 a 5 días de anticipación, especialmente para horarios de tarde y fines de semana que suelen agotarse rápido.'
  },
  {
    category: 'garantia',
    question: '¿Qué incluye la Garantía de 21 Días Velvet Rose?',
    answer: 'Si sufres algún desprendimiento, quiebre no provocado o levantamiento de gel dentro de los primeros 21 días, te agendamos una reparación 100% gratuita sin costo adicional.'
  },
  {
    category: 'cuidados',
    question: '¿Cuál es la diferencia entre Kapping y Soft Gel?',
    answer: 'El Kapping Gel se aplica sobre el largo natural de tu uña para reforzarla. En cambio, Soft Gel utiliza tips de gel flexible para extender el largo de tu uña desde el primer momento.'
  },
  {
    category: 'cuidados',
    question: '¿Sus productos son amigables con el medio ambiente?',
    answer: 'Sí, trabajamos exclusivamente con marcas 10-Free (libres de los 10 químicos más nocivos), veganas, hipoalergénicas y 100% Cruelty-Free.'
  },
  {
    category: 'general',
    question: '¿Tienen estacionamiento y consumo de cortesía?',
    answer: '¡Sí! Contamos con estacionamiento reservado para clientas y servicio bar de cortesía que incluye café de especialidad, té herbal, mimosas y macarons.'
  }
];

export const TIME_SLOTS: TimeSlot[] = [
  { time: '09:30 AM', available: true },
  { time: '11:00 AM', available: true },
  { time: '12:30 PM', available: false },
  { time: '02:00 PM', available: true },
  { time: '03:30 PM', available: true },
  { time: '05:00 PM', available: true },
  { time: '06:30 PM', available: false },
];
