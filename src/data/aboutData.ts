// src/data/aboutData.ts

import { LucideIcon } from 'lucide-react';
import { Sprout, Flame, Award } from 'lucide-react';

export type Feature = {
  id: string; // <-- TAMBAHKAN id
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: 'feature-1', // <-- TAMBAHKAN id unik
    icon: Sprout,
    title: "Biji Kopi Pilihan",
    description:
      "Kami menggunakan biji kopi terbaik dari perkebunan lokal dan impor yang dipilih dengan teliti untuk memastikan kualitas terbaik.",
  },
  {
    id: 'feature-2', // <-- TAMBAHKAN id unik
    icon: Flame,
    title: "Penyangraian Profesional",
    description:
      "Proses penyangraian dilakukan oleh ahli dengan pengalaman lebih dari 10 tahun untuk mendapatkan rasa yang sempurna.",
  },
  {
    id: 'feature-3', // <-- TAMBAHKAN id unik
    icon: Award,
    title: "Kualitas Terjamin",
    description:
      "Setiap cangkir kopi kami dijamin kesegaran dan kualitasnya untuk kepuasan pelanggan yang maksimal",
  },
];