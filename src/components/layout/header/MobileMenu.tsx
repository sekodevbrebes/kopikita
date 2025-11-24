import { ShoppingCart, User, X } from "lucide-react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  cartCount: number;
  onLoginClick?: () => void;
};

export default function MobileMenu({ isOpen, onClose, activeSection, onNavigate, cartCount, onLoginClick }: MobileMenuProps) {
  const menuItems = ["Home", "Menu", "Tentang", "Testimoni", "Kontak"];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 border-r border-gray-200 transform
      transition-transform duration-300 ease-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-5 flex flex-col space-y-6 mt-14">
        {/* Tombol Tutup */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2">
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Link Navigasi */}
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            className={`relative w-full text-left text-lg font-medium py-2 transition-colors cursor-pointer
            ${activeSection === item ? "text-amber-700" : "text-gray-700 hover:text-amber-700"}`}
          >
            {item}
          </button>
        ))}

        <hr />

        {/* Tombol Aksi di Mobile */}
        <button className="relative p-2 w-fit hover:bg-gray-100 rounded-full transition-colors">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button 
          onClick={onLoginClick}
          className="flex items-center justify-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors"
        >
          <User className="w-4 h-4" />
          <span className="text-sm">Masuk</span>
        </button>
      </div>
    </div>
  );
}