// ✅ Type props
type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block text-left">
        <h2 className="text-3xl font-bold text-amber-800 mb-2">{title}</h2>
        <div className="h-[3px] w-48 mb-4 rounded-full bg-gradient-to-r from-amber-800 via-amber-500 to-transparent"></div>
      </div>
      <p className="text-gray-600 mb-12">{subtitle}</p>
    </div>
  );
}
