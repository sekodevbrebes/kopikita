import { Sprout, Flame, Award } from "lucide-react";
import SectionHeader from "../menu/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

export default function About() {
    // Buat array data untuk fitur
    const features = [
    {
      icon: Sprout,
      title: "Biji Kopi Pilihan",
      description:
        "Kami menggunakan biji kopi terbaik dari perkebunan lokal dan impor yang dipilih dengan teliti untuk memastikan kualitas terbaik.",
    },
    {
      icon: Flame,
      title: "Penyangraian Profesional",
      description:
        "Proses penyangraian dilakukan oleh ahli dengan pengalaman lebih dari 10 tahun untuk mendapatkan rasa yang sempurna.",
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description:
        "Setiap cangkir kopi kami dijamin kesegaran dan kualitasnya untuk kepuasan pelanggan yang maksimal",
    },
  ];

  return (
    <section id="tentang" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeader
            title="Mengapa Memilih KopiKu?"
            subtitle="Kami menghadirkan pengalaman kopi terbaik dengan kualitas dan pelayanan premium yang tak tertandingi."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>

      </div>
    </section>
  );
}
