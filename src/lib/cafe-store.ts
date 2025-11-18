import { create } from 'zustand';

export interface Cafe {
  id: string;
  name: string;
  address: string;
  area: string;
  rating: number;
  images: string[];
  description: string;
  category: string[];
  isFavorite: boolean;
}

const mockCafes: Cafe[] = [
  {
    id: '1',
    name: 'Blank Street Coffee',
    address: '123 Green St, Tokyo',
    area: 'Marylebone',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&q=80',
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80',
      
    ],
    description: 'A cozy spot serving authentic matcha lattes and traditional Japanese sweets. Perfect for a peaceful afternoon.',
    category: ['Traditional', 'Desserts', 'Latte Art'],
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Matchado',
    address: '456 Peaceful Ln, Tokyo',
    area: 'Shoreditch',
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800&q=80',
    ],
    description: 'Modern matcha cafe with a beautiful garden view. Features specialty matcha drinks and fusion desserts.',
    category: ['Modern', 'Garden View', 'Fusion'],
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Matcha Mochi Café',
    address: '789 Bamboo Ave, Tokyo',
    area: 'Marylebone',
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=800&q=80',
    ],
    description: 'Premium matcha experience with ceremonial grade tea. Elegant minimalist interior and exceptional service.',
    category: ['Premium', 'Ceremonial', 'Minimalist'],
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Jenki Matcha Bar',
    address: '321 Cherry St, Tokyo',
    area: 'Soho',
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    ],
    description: 'Creative matcha creations and Instagram-worthy presentations. Perfect for matcha enthusiasts and photographers.',
    category: ['Creative', 'Instagram-worthy', 'Innovative'],
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Katsute 100',
    address: '654 Sakura Rd, Tokyo',
    area: 'Clerkenwell',
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80'
    ],
    description: 'Relaxed atmosphere with comfortable seating. Great for working or meeting friends over quality matcha beverages.',
    category: ['Cozy', 'Work-friendly', 'Spacious'],
    isFavorite: false,
  },
  {
    id: '6',
    name: 'How Matcha',
    address: '47 Blandford Street, London W1U 7HQ',
    area: 'King’s Cross',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    ],
    description: 'Specializing in Uji matcha from Kyoto. Traditional preparation methods meet contemporary cafe culture.',
    category: ['Authentic', 'Kyoto Matcha', 'Traditional'],
    isFavorite: false,
  },
  {
    id: '7',
    name: 'Tsujiri',
    address: '47 Blandford Street, London W1U 7HQ',
    area: 'King’s Cross',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    ],
    description: 'Specializing in Uji matcha from Kyoto. Traditional preparation methods meet contemporary cafe culture.',
    category: ['Authentic', 'Kyoto Matcha', 'Traditional'],
    isFavorite: false,
  },
  {
    id: '8',
    name: 'Tombo Poké & Matcha Bar',
    address: '47 Blandford Street, London W1U 7HQ',
    area: 'King’s Cross',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    ],
    description: 'Specializing in Uji matcha from Kyoto. Traditional preparation methods meet contemporary cafe culture.',
    category: ['Authentic', 'Kyoto Matcha', 'Traditional'],
    isFavorite: false,
  },
    {
    id: '9',
    name: 'JENKI Matcha Bar',
    address: '50A Long Acre, Covent Garden, WC2E 9JR',
    area: 'King’s Cross',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    ],
    description: 'Specializing in Uji matcha from Kyoto. Traditional preparation methods meet contemporary cafe culture.',
    category: ['Authentic', 'Kyoto Matcha', 'Traditional'],
    isFavorite: false,
  },
    {
    id: '10',
    name: 'Katsute 100',
    address: '47 Blandford Street, London W1U 7HQ',
    area: 'Covent Garden',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    ],
    description: 'Specializing in Uji matcha from Kyoto. Traditional preparation methods meet contemporary cafe culture.',
    category: ['Authentic', 'Kyoto Matcha', 'Traditional'],
    isFavorite: false,
  },
  {
    id: '11',
    name: 'Matcha and Beyond',
    address: '47 Blandford Street, London W1U 7HQ',
    area: 'Covent Garden',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    ],
    description: 'Specializing in Uji matcha from Kyoto. Traditional preparation methods meet contemporary cafe culture.',
    category: ['Authentic', 'Kyoto Matcha', 'Traditional'],
    isFavorite: false,
  },
];

interface CafeStore {
  cafes: Cafe[];
  favorites: Set<string>;
  toggleFavorite: (cafeId: string) => void;
  getCafes: (search?: string, area?: string) => Cafe[];
  getCafe: (id: string) => Cafe | undefined;
  getFavorites: () => Cafe[];
}

export const useCafeStore = create<CafeStore>((set, get) => ({
  cafes: mockCafes,
  favorites: new Set<string>(),
  
  toggleFavorite: (cafeId: string) => {
    set((state) => {
      const newFavorites = new Set(state.favorites);
      if (newFavorites.has(cafeId)) {
        newFavorites.delete(cafeId);
      } else {
        newFavorites.add(cafeId);
      }
      return { favorites: newFavorites };
    });
  },
  
  getCafes: (search?: string, area?: string) => {
    const { cafes, favorites } = get();
    let filtered = [...cafes];
    
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (cafe) =>
          cafe.name.toLowerCase().includes(searchLower) ||
          cafe.area.toLowerCase().includes(searchLower) ||
          cafe.description.toLowerCase().includes(searchLower)
      );
    }
    
    if (area && area !== 'All Areas') {
      filtered = filtered.filter((cafe) => cafe.area === area);
    }
    
    return filtered.map((cafe) => ({
      ...cafe,
      isFavorite: favorites.has(cafe.id),
    }));
  },
  
  getCafe: (id: string) => {
    const { cafes, favorites } = get();
    const cafe = cafes.find((c) => c.id === id);
    if (!cafe) return undefined;
    return { ...cafe, isFavorite: favorites.has(cafe.id) };
  },
  
  getFavorites: () => {
    const { cafes, favorites } = get();
    return cafes
      .filter((cafe) => favorites.has(cafe.id))
      .map((cafe) => ({ ...cafe, isFavorite: true }));
  },
}));
