import { Coffee } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center mr-3">
        <Coffee className="text-white w-5 h-5" />
      </div>
      <span className="text-xl font-bold text-amber-800">KopiKu</span>
    </div>
  );
}
