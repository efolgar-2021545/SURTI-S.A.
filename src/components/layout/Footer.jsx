import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import empresa from "../../data/empresa.json";

export default function Footer() {
    return (
        <footer className="bg-[#162B4E] text-white/80 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

                    {/* Empresa */}
                    <div>
                        <img
                            src="/image/logo-surti.jpg"
                            alt="SURTI S.A."
                            className="h-12 w-auto object-contain bg-white rounded p-1 mb-4"
                        />
                        <p className="text-sm text-white/60 leading-relaxed mb-4">
                            {empresa.descripcion}
                        </p>
                        {/* Redes Sociales con react-icons/fa */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8D0002] flex items-center justify-center transition-colors text-white"
                            >
                                <FaFacebookF size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8D0002] flex items-center justify-center transition-colors text-white"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8D0002] flex items-center justify-center transition-colors text-white"
                            >
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Catálogo */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Catálogo
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/productos/basculas" className="hover:text-white transition-colors">Básculas</Link></li>
                            <li><Link to="/productos/balanzas" className="hover:text-white transition-colors">Balanzas</Link></li>
                            <li><Link to="/productos/accesorios" className="hover:text-white transition-colors">Accesorios</Link></li>
                        </ul>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Enlaces rápidos
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/#nosotros" className="hover:text-white transition-colors">Conózcanos</a></li>
                            <li><a href="/#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="/#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Contacto
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                                <span>{empresa.contacto.telefono}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                                <span>{empresa.contacto.correo}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <span>{empresa.contacto.direccion}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-xs text-white/50 pt-8">
                    © {new Date().getFullYear()} {empresa.nombre}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}