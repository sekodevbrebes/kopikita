import { Star, Coffee, Zap } from "lucide-react";

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
                        <button
                            className="cursor-pointer px-6 py-2 text-sm bg-white text-amber-800 rounded-2xl hover:bg-gray-100 font-medium shadow-md"
                        >
                            Lihat Menu
                        </button>
                        <button
                            className="cursor-pointer px-6 py-2 text-sm bg-transparent border-2 border-white text-white rounded-2xl hover:bg-white/10 font-medium"
                        >
                            Tentang Kami
                        </button>
                    </div>

                    <div className="mt-8 flex items-center space-x-6">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-2">
                                <Star className="text-yellow-300 w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-bold">4.9/5</p>
                                <p className="text-sm text-gray-200">500+ ulasan</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-2">
                                <Coffee className="text-white w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-bold">50+</p>
                                <p className="text-sm text-gray-200">Varian Menu</p>
                            </div>
                        </div>
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
        </section>
    )
}