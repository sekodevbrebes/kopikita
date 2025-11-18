import { Sprout, Flame, Award } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">

                    {/* Judul + garis kiri */}
                    <div className="inline-block text-left">
                        <h2 className="text-3xl font-bold text-amber-800 mb-2">
                            Mengapa Memilih KopiKu?
                        </h2>

                        {/* Garis kiri lebih panjang */}
                        <div
                            className="h-[3px] w-48 mb-4 rounded-full
                            bg-gradient-to-r from-amber-800 via-amber-500 to-transparent"
                        ></div>
                    </div>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami menghadirkan pengalaman kopi terbaik dengan kualitas dan pelayanan premium yang tak tertandingi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                            <Sprout className="text-amber-700 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-800 mb-3">
                            Biji Kopi Pilihan
                        </h3>
                        <p className="text-gray-600">
                            Kami menggunakan biji kopi terbaik dari perkebunan lokal dan impor yang dipilih dengan teliti untuk memastikan kualitas terbaik.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                            <Flame className="text-amber-700 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-800 mb-3">
                            Penyangraian Profesional
                        </h3>
                        <p className="text-gray-600">
                            Proses penyangraian dilakukan oleh ahli dengan pengalaman lebih dari 10 tahun untuk mendapatkan rasa yang sempurna.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                            <Award className="text-amber-700 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-800 mb-3">
                            Kualitas Terjamin
                        </h3>
                        <p className="text-gray-600">
                            Setiap cangkir kopi kami dijamin kesegaran dan kualitasnya untuk kepuasan pelanggan yang maksimal
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
