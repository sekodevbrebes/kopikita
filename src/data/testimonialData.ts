export type Testimonial = {
  id: string;
  imageUrl: string;
  name: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    name: 'Jane Doe',
    rating: 4,
    text: 'Kopi di sini benar-benar luar biasa! Rasanya kaya dan aromanya memikat. Tempat yang sempurna untuk bersantai.',
  },
  {
    id: 'testimonial-2',
    imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
    name: 'Budi Santoso',
    rating: 4,
    text: 'Sebagai pecinta kopi, saya sangat menghargai kualitas biji kopi yang digunakan di sini. Espresso mereka memiliki crema yang sempurna dan rasa yang kompleks.',
  },
  {
    id: 'testimonial-3',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Siti Nurhaliza', 
    rating: 5,
    text: 'Tempat yang nyaman dengan atmosfer yang cocok untuk bekerja atau sekadar bersantai. Latte art mereka selalu memukau dan rasanya konsisten enak.',
  },
];