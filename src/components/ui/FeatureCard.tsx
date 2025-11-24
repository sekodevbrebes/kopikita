import { LucideIcon } from 'lucide-react';

// 1. Definisikan tipe untuk props
type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// 2. Buat komponen FeatureCard
export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
      {/* Ikon */}
      <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
        <Icon className="text-amber-700 w-8 h-8" />
      </div>

      {/* Judul */}
      <h3 className="text-xl font-bold text-amber-800 mb-3">
        {title}
      </h3>

      {/* Deskripsi */}
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}