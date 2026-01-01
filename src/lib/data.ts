import { Room } from './types';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Ocean Suite',
    description: 'Experience the ultimate in coastal luxury. This expansive suite features a private balcony with panoramic ocean views, a king-sized bed, and a spa-inspired bathroom.',
    price: 350,
    capacity: 2,
    imageUrl: '/images/rooms/room%20ocean.jpg',
    slug: 'deluxe-ocean-suite',
    amenities: ['Ocean View', 'King Bed', 'Private Balcony', 'Jacuzzi', 'Free WiFi', 'Room Service'],
    featured: true,
  },
  {
    id: '2',
    name: 'Executive City Loft',
    description: 'Designed for the modern traveler, this loft offers floor-to-ceiling windows overlooking the city skyline, a dedicated workspace, and a smart entertainment system.',
    price: 280,
    capacity: 2,
    imageUrl: '/images/rooms/room%20city.jpg',
    slug: 'executive-city-loft',
    amenities: ['City View', 'Work Desk', 'Smart TV', 'High-Speed WiFi', 'Mini Bar', 'Coffee Machine'],
    featured: true,
  },
  {
    id: '3',
    name: 'Family Garden Villa',
    description: 'A sanctuary for families. Nestled in our tropical gardens, this villa features two bedrooms, a private patio, and direct access to the kids pool.',
    price: 450,
    capacity: 4,
    imageUrl: '/images/rooms/room%20garden.jpg',
    slug: 'family-garden-villa',
    amenities: ['Garden Access', '2 Bedrooms', 'Patio', 'Kitchenette', 'Kids Pool Access', 'Netflix'],
    featured: false,
  },
];