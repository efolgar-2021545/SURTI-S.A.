import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import empresa from "../../data/empresa.json";

export default function HeroSection() {
    return (
        <section id="inicio" className="relative bg-[#162B4E] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-4 py-1 mb-6">
                    Básculas · Balanzas · Accesorios
                </span>

                <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                    {empresa.nombre}
                </h1>

                <p className="mt-5 text-white/80 max-w-2xl mx-auto text-base md:text-lg">
                    {empresa.eslogan}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/productos/basculas"
                        className="inline-flex items-center gap-2 bg-[#8D0002] hover:bg-[#6e0002] text-white text-sm font-semibold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
                    >
                        Ver productos
                        <ArrowRight size={16} />
                    </Link>

                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white text-sm font-semibold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
                    >
                        <Phone size={16} />
                        Contáctanos
                    </a>
                </div>
            </div>

            <div className="h-2 bg-[#8D0002]" />
        </section>
    );
}