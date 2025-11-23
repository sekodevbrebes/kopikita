import { Star, Coffee, Zap } from "lucide-react";
import Button from "../ui/Button";
import StatCard from "../ui/StatCard";

export default function Hero() {
    return (
        <section id="home" className="hero-bg text-white py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Pengalaman Kopi yang Tak Terlupakan
                    </h1>
                    <p className="text-lg md:text-xl mb-6 text-gray-100 max-w-lg">
                        Dari biji kopi pilihan terbaik, disangrai dengan sempurna untuk memberikan pengalaman rasa yang tak terlupakan di setiap tegukan.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <Button variant="primary">
                            Lihat Menu
                        </Button>
                        <Button variant="secondary">
                            Tentang Kami
                        </Button>
                    </div>

                    {/* Penggunaan komponen StatCard juga tetap sama */}
                    <div className="mt-8 flex items-center space-x-6">
                        <StatCard
                            icon={Star}
                            value="4.9/5"
                            label="500+ ulasan"
                        />
                        <StatCard
                            icon={Coffee}
                            value="50+"
                            label="Varian Menu"
                        />
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center animate-fade-in">
                    <div className="relative">
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Cup of Coffee"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white text-amber-800 py-3 px-5 rounded-xl shadow-lg">
                            <div className="flex items-center">
                                <Zap className="text-yellow-500 w-4 h-4 mr-2" />
                                <span className="font-bold">15 Menit</span>
                                <span className="ml-1">Pesanan Siap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}