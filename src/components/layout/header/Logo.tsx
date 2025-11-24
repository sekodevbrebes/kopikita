import { Coffee } from "lucide-react";

interface LogoProps {
  onClick: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <button onClick={onClick} className="flex items-center cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center mr-3">
        <Coffee className="text-white w-5 h-5" />
      </div>
      <span className="text-xl font-bold text-amber-800">KopiKu</span>
    </button>
  );
}
