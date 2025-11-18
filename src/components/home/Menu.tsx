import { Plus } from "lucide-react";

export default function Menu() {
    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    {/* Judul + garis kiri */}
                    <div className="inline-block text-left">
                        <h2 className="text-3xl font-bold text-amber-800 mb-2">
                            Menu Andalan Kami
                        </h2>

                        {/* Garis kiri lebih panjang */}
                        <div
                            className="h-[3px] w-48 mb-4 rounded-full
                            bg-gradient-to-r from-amber-800 via-amber-500 to-transparent"
                        ></div>
                    </div>
                    <p className="text-gray-600 mb-12">
                        Temukan berbagai varian kopi dan minuman spesial yang siap memanjakan lidah Anda.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <button
                        className="px-5 py-2 font-medium 
                        bg-amber-700 text-white rounded-2xl cursor-pointer" >
                        Semua Menu
                        </button>
                    <button
                        className="px-5 py-2 font-medium 
                        bg-amber-100 text-amber-700 rounded-2xl hover:bg-amber-200 cursor-pointer" >    
                        Kopi Panas
                    </button>
                    <button
                        className="px-5 py-2 font-medium 
                        bg-amber-100 text-amber-700 rounded-2xl hover:bg-amber-200 cursor-pointer" >        
                        Kopi Dingin
                    </button>
                    <button
                        className="px-5 py-2 font-medium 
                        bg-amber-100 text-amber-700 rounded-2xl hover:bg-amber-200 cursor-pointer" >        
                        Kopi Spesial
                    </button>
                    <button
                        className="px-5 py-2 font-medium 
                        bg-amber-100 text-amber-700 rounded-2xl hover:bg-amber-200 cursor-pointer" >        
                        Non-Kopi
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Item 1 - Espresso Classic */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                            Populer
                        </span>
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Espresso Classic"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Espresso Classic
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Kopi murni dengan rasa kuat dan aroma yang khas.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 25.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 - Cappuccino Creamy */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                            Populer
                        </span>
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Cappuccino Creamy"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Cappuccino Creamy
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Perpaduan sempurna espresso, susu steamed, dan busa susu.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 32.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 - Latte Art Deluxe */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Latte Art Deluxe"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Latte Art Deluxe
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Espresso dengan susu steamed dan seni latte yang indah.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 35.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 - Cold Brew Smooth */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                            Populer
                        </span>
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Cold Brew Smooth"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Cold Brew Smooth
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Kopi yang diseduh dingin dengan rasa yang smooth dan menyegarkan.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 30.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 5 - Americano Bold */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Americano Bold"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Americano Bold
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Espresso dengan tambahan air panas, rasa kopi yang kuat dan bersih.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 28.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 6 - Mocha Chocolate */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                            Populer
                        </span>
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Mocha Chocolate"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Mocha Chocolate
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Perpaduan espresso, cokelat, dan susu steamed dengan whipped cream.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 38.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 7 - Iced Caramel Macchiato */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Iced Caramel Macchiato"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Iced Caramel Macchiato
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Espresso dengan susu, vanilla, dan caramel yang disajikan dingin.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 42.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 8 - Flat White Velvet */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img
                            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Flat White Velvet"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-amber-800 mb-2">
                                Flat White Velvet
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Espresso dengan susu steamed yang halus dan microfoam.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-amber-700 font-bold text-lg">
                                    Rp 33.000
                                </span>
                                <button className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 font-medium text-sm flex items-center">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
            <button 
              className="px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-2xl hover:bg-amber-700 hover:text-white font-medium cursor-pointer"
            >
              Muat Lebih Banyak
            </button>
          </div>
            </div>
        </section>
    )
}
