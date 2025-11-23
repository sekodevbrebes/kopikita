"use client";

export default function FilterButton({ label, active, value, onClick }) {
  
  return (
    <button
      className={`px-5 py-2 font-medium rounded-2xl cursor-pointer ${
        active
          ? "bg-amber-700 text-white"
          : "bg-amber-100 text-amber-700 hover:bg-amber-200"
      }`}
     
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
}