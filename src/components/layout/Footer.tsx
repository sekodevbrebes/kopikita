
import { Coffee } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-amber-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center mr-3">
                                <Coffee className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold">KopiKu</span>
                        </div>
                        <p className="text-amber-300 mt-2 max-w-md">
                            Menghadirkan kenikmatan kopi terbaik sejak 2015 dengan komitmen pada kualitas dan pelayanan terbaik.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="mb-4">Tautan Cepat</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Promo
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Lokasi
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4">Bantuan</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Kebijakan Privasi
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Syarat & Ketentuan
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-amber-300 hover:text-white transition-colors">
                                        Karir
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4">Kontak</h4>
                            <ul className="space-y-2">
                                <li className="text-amber-300">
                                    (021) 1234-5678Jl
                                </li>
                                <li className="text-amber-300">
                                    info@kopiku.com
                                </li>
                                <li className="text-amber-300">
                                    
                                    Jakarta - Indonesia
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-amber-700 pt-8 text-center text-amber-300">
                    <p>&copy; 2025 KopiKu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
