

export default function Testimonial() {
    return (
        <section id="testimonial" className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
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
            </div>
        </section>
    )
}
