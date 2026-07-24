export interface Service {
  id: string;
  name: string;
  category: 'manicura' | 'gelx' | 'kapping' | 'acrilicas' | 'pedicura' | 'nailart';
  price: number;
  formattedPrice: string;
  durationMinutes: number;
  shortDescription: string;
  fullDescription: string;
  popular?: boolean;
  image: string;
  includes: string[];
}

export interface ExtraAddon {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  durationMinutes: number;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  rating: number;
  specialty: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'milky' | 'french' | 'nailart3d' | 'glazed' | 'minimal' | 'stiletto';
  categoryLabel: string;
  image: string;
  likes: number;
  technique: string;
  artist: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientAvatar: string;
  rating: number;
  date: string;
  serviceUsed: string;
  comment: string;
  nailPhoto?: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'cuidados' | 'garantia';
}

export interface BookingFormData {
  serviceId: string;
  addons: string[];
  specialistId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
  selectedDesignRef?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
