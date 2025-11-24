import { ExternalLink, MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "../menu/SectionHeader";

export default function Contact() {
    return (
        <section id="kontak" className="py-16 bg-white">
            <div className="container mx-auto px-4">

                <SectionHeader
                    title="Kunjungi Toko Kami"
                    subtitle="Datang dan nikmati pengalaman kopi terbaik di tempat kami."
                />

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <h3 className="text-xl font-bold text-amber-800 mb-6">Informasi Kontak</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                                        <MapPin className="fas fa-map-marker-alt text-amber-700 w-5 h-5"></MapPin>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800">Alamat</h4>
                                        <p className="text-gray-600">Jl. Kopi No. 123, Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                                        <Phone className="fas fa-map-marker-alt text-amber-700 w-5 h-5"></Phone>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800">Telepon</h4>
                                        <p className="text-gray-600">(021) 1234-5678</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                                        <Mail className="fas fa-map-marker-alt text-amber-700 w-5 h-5"></Mail>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800">Email</h4>
                                        <p className="text-gray-600">info@kopiku.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                                        <Clock className="fas fa-map-marker-alt text-amber-700 w-5 h-5"></Clock>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800">Jam Operasional</h4>
                                        <p className="text-gray-600">Senin - Minggu: 07.00 - 22.00 WIB</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-bold text-amber-800 mb-4">Ikuti Kami</h4>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center hover:bg-amber-800 transition-colors">
                                            <i className="fab fa-instagram fa-lg"></i>
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center hover:bg-amber-800 transition-colors">
                                            <i className="fab fa-facebook-f fa-lg"></i>
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center hover:bg-amber-800 transition-colors">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-gray-100 h-full rounded-2xl overflow-hidden shadow-sm">
                            {/* Placeholder for map */}
                            <div className="w-full h-full flex items-center justify-center bg-amber-50 min-h-[400px]">
                                <div className="text-center p-8">
                                    <MapPin className="text-5xl text-amber-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-amber-800 mb-2">Peta Lokasi Toko</h3>
                                    <p className="text-gray-600 max-w-md">
                                        Temukan toko KopiKu terdekat di lokasi strategis dengan suasana yang nyaman untuk menikmati kopi berkualitas.
                                    </p>
                                    <div className="p-6 text-center">
                                        <a
                                            href="https://maps.app.goo.gl/kWHUHL3qZv3dfEUQ8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                                        bg-amber-700 hover:bg-amber-800 active:scale-95
                                        text-white font-normal shadow-md shadow-amber-300/20
                                        transition-all duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Buka di Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
