import { Search } from "lucide-react";

type SearchBoxProps = {
  placeholder?: string;
};

export default function SearchBox({ placeholder = "Cari menu favoritmu..." }: SearchBoxProps) {
  return (
    <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 max-w-md mx-8">
      <Search className="w-5 h-5 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}