import { Plus } from "lucide-react";
import HeartButton from "./HeartButton";

export default function MenuCard({ name, description, price, image, popular }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      {popular && (
        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Populer
        </span>
      )}
      <HeartButton />
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-amber-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-700 font-bold text-lg">{price}</span>
          <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
            <Plus className="w-4 h-4 mr-1" />
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}