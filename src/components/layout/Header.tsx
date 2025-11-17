import { Coffee, Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center mr-3">
            <Coffee className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-amber-800">KopiKu</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-8">
          <button className="text-gray-600 hover:text-amber-700 transition-colors font-medium cursor-pointer">
            Home
          </button>
          <button className="text-gray-600 hover:text-amber-700 transition-colors font-medium cursor-pointer">
            Menu
          </button>
          <button className="text-gray-600 hover:text-amber-700 transition-colors font-medium cursor-pointer">
            Tentang
          </button>

          <button className="text-gray-600 hover:text-amber-700 transition-colors font-medium cursor-pointer">
            Testimoni
          </button>
          <button className="text-gray-600 hover:text-amber-700 transition-colors font-medium cursor-pointer">
            Kontak
          </button>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 max-w-md mx-8">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Cari menu favoritmu..."
            className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <button
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
          {/* Profile Dropdown */}
          <button
            className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors"
          >
            <User className="w-4 h-4" />
            <span className="text-sm">Masuk</span>
          </button>
        </div>
      </div>
    </header>
  );
}
