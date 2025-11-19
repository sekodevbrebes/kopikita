

export default function Testimonial() {
    return (
        <section id="testimonial" className="py-16 bg-amber-50">
           <div className="container mx-auto px-4">
        <div className="text-center mb-16">
                    {/* Judul + garis kiri */}
                    <div className="inline-block text-left">
                        <h2 className="text-3xl font-bold text-amber-800 mb-2">
                            Apa Kata Pelanggan Kami?
                        </h2>
                        {/* Garis kiri lebih panjang */}
                        <div
                            className="h-[3px] w-48 mb-4 rounded-full
                            bg-gradient-to-r from-amber-800 via-amber-500 to-transparent"
                        ></div>
                    </div>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dengarkan pengalaman langsung dari para pecinta kopi yang telah mencicipi racikan kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-amber-200 rounded-full overflow-hidden mr-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/32.jpg"
                                    alt="Jane Doe"
                                    className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800">Jane Doe</h4>
                                <div className="flex text-yellow-500">
                                    ★★★★☆
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">"Kopi di sini benar-benar luar biasa! Rasanya kaya dan aromanya memikat. Tempat yang sempurna untuk bersantai."</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-amber-200 rounded-full overflow-hidden mr-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/54.jpg"
                                    alt="Budi Santoso"
                                    className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800">Budi Santoso</h4>
                                <div className="flex text-yellow-500">
                                    ★★★★☆
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">"Sebagai pecinta kopi, saya sangat menghargai kualitas biji kopi yang digunakan di sini. Espresso mereka memiliki crema yang sempurna dan rasa yang kompleks."</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-amber-200 rounded-full overflow-hidden mr-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    alt="Budi Santoso"
                                    className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800">Budi Santoso</h4>
                                <div className="flex text-yellow-500">
                                    ★★★★☆
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">"Tempat yang nyaman dengan atmosfer yang cocok untuk bekerja atau sekadar bersantai. Latte art mereka selalu memukau dan rasanya konsisten enak"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
