import { ShoppingCart, User } from "lucide-react";

type ActionButtonsProps = {
  cartCount: number;
  onLoginClick?: () => void;
};

export default function ActionButtons({ cartCount, onLoginClick }: ActionButtonsProps) {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      <button 
        onClick={onLoginClick}
        className="flex items-center cursor-pointer space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors"
      >
        <User className="w-4 h-4" />
        <span className="text-sm">Masuk</span>
      </button>
    </div>
  );
}