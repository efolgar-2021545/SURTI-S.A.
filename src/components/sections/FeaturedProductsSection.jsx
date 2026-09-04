import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const destacados = [
    {
        id: 1,
        nombre: "Báscula de plataforma",
        categoria: "FD1230",
        imagen: "/image/FD1230.jpg",
        link: "/productos/basculas/1",
    },
    {
        id: 2,
        nombre: "Balanza en acero inoxidable",
        categoria: "BSB6300",
        imagen: "/image/BSB6300.jpg",
        link: "/productos/balanzas/1",
    },
    {
        id: 3,
        nombre: "Pesas Patrón",
        categoria: "F1",
        imagen: "/image/F1.jpg",
        link: "/productos/accesorios/1",
    },
];

export default function FeaturedProductsSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#8D0002]">
                            Catálogo
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#162B4E] mt-2">
                            Productos destacados
                        </h2>
                    </div>
                    <Link
                        to="/productos/basculas"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#162B4E] hover:text-[#8D0002] transition-colors"
                    >
                        Ver todo el catálogo
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destacados.map((producto) => (
                        <div
                            key={producto.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col p-4 text-center"
                        >
                            <div className="h-48 w-full flex items-center justify-center bg-gray-50 mb-4 rounded overflow-hidden">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <span className="text-xs font-semibold text-[#8D0002] uppercase tracking-wider mb-1">
                                {producto.categoria}
                            </span>
                            <h3 className="text-base font-bold text-[#162B4E] mb-3">
                                {producto.nombre}
                            </h3>
                            <Link
                                to={producto.link}
                                className="inline-block bg-[#162B4E] hover:bg-[#0f1d38] text-white text-xs font-semibold py-2 px-6 rounded-full transition-colors self-center mt-auto"
                            >
                                Ver más
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}