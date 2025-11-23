// 1. Mendefinisikan tipe untuk props
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 2. Menggunakan tipe ButtonProps pada komponen
export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  // Kelas dasar yang akan selalu ada
  const baseClasses = "cursor-pointer px-6 py-2 text-sm rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Objek untuk menampung gaya setiap varian
  const variantClasses = {
    primary: "bg-white text-amber-800 hover:bg-gray-100 shadow-md focus:ring-amber-800",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
  };

  // Menggabungkan kelas dasar dengan kelas varian dan kelas tambahan dari props
  const classes = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}