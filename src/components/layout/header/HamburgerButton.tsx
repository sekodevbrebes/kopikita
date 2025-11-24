import { Menu, X } from "lucide-react";

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button className="md:hidden p-2" onClick={onClick}>
      {isOpen ? <X className="w-6 h-6 text-amber-800" /> : <Menu className="w-6 h-6 text-amber-800" />}
    </button>
  );
}