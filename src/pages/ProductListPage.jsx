import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { categorias, getCategoria } from "../data/categorias";

const ITEMS_PER_PAGE = 12;

export default function ProductListPage() {
    const { categoria: slug } = useParams();
    const categoriaActual = getCategoria(slug);

    const [busqueda, setBusqueda] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Si la categoría en la URL no existe en la configuración, mostramos un aviso.
    if (!categoriaActual) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-[#162B4E]">Categoría no encontrada</h2>
                <Link to="/" className="text-[#8D0002] underline mt-4 inline-block">
                    Volver al inicio
                </Link>
            </div>
        );
    }

    const productosFiltrados = useMemo(() => {
        const termino = busqueda.trim().toLowerCase();
        if (!termino) return categoriaActual.data;
        return categoriaActual.data.filter(
            (p) =>
                p.nombre.toLowerCase().includes(termino) ||
                (p.categoria && p.categoria.toLowerCase().includes(termino))
        );
    }, [busqueda, categoriaActual]);

    const totalPages = Math.max(1, Math.ceil(productosFiltrados.length / ITEMS_PER_PAGE));
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = productosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
        setCurrentPage(1);
    };

    return (
        <>
            {/* Banner superior */}
            <div className="bg-[#162B4E] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">{categoriaActual.nombre}</h1>
                    <p className="text-sm text-gray-300 mt-2">
                        <Link to="/" className="hover:underline hover:text-white transition-colors">
                            INICIO
                        </Link>
                        {" / "}
                        <Link
                            to={`/productos/${categoriaActual.slug}`}
                            className="hover:underline hover:text-white transition-colors"
                        >
                            PRODUCTOS
                        </Link>
                        {" / "}
                        <span className="text-gray-400">{categoriaActual.nombre.toUpperCase()}</span>
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Menú lateral: buscador + categorías */}
                    <aside className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-[#162B4E] mb-3">Buscar productos</h3>
                            <input
                                type="text"
                                value={busqueda}
                                onChange={handleBusqueda}
                                placeholder="Buscar productos..."
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#162B4E]"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#162B4E] border-b pb-2 mb-3">Catálogo</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {categorias.map((cat) => (
                                    <li key={cat.slug}>
                                        {cat.slug === categoriaActual.slug ? (
                                            <span className="font-semibold text-[#8D0002] block">
                                                • {cat.nombre} ({cat.data.length})
                                            </span>
                                        ) : (
                                            <Link
                                                to={`/productos/${cat.slug}`}
                                                className="hover:text-[#8D0002] transition-colors block"
                                            >
                                                • {cat.nombre}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Grilla de productos */}
                    <main className="md:col-span-3">
                        {currentItems.length === 0 ? (
                            <div className="text-center py-20 text-gray-500">
                                No se encontraron productos que coincidan con "{busqueda}".
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentItems.map((producto) => (
                                    <div
                                        key={producto.id}
                                        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between p-4 text-center"
                                    >
                                        <div>
                                            <div className="h-48 w-full flex items-center justify-center bg-gray-50 mb-4 rounded overflow-hidden">
                                                <img
                                                    src={producto.imagen}
                                                    alt={producto.nombre}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-[#8D0002] uppercase tracking-wider block mb-1">
                                                {producto.categoria}
                                            </span>
                                            <h3 className="text-base font-bold text-[#162B4E] mt-1 mb-2">
                                                {producto.nombre}
                                            </h3>
                                            <p className="text-xs text-gray-600 line-clamp-3 mb-4">
                                                {producto.descripcionCorta}
                                            </p>
                                        </div>

                                        <Link
                                            to={`/productos/${categoriaActual.slug}/${producto.id}`}
                                            className="inline-block bg-[#162B4E] hover:bg-[#8D0002] text-white text-xs font-semibold uppercase tracking-wider py-2 px-6 rounded-full transition-colors self-center mt-2"
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Paginador */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center flex-wrap gap-2 mt-12">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => {
                                            setCurrentPage(number);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                        className={`px-4 py-2 border text-sm font-semibold rounded-full transition-colors ${currentPage === number
                                                ? "bg-[#162B4E] text-white border-[#162B4E]"
                                                : "bg-white text-[#162B4E] border-gray-300 hover:bg-gray-100"
                                            }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                                {currentPage < totalPages && (
                                    <button
                                        onClick={() => {
                                            setCurrentPage(currentPage + 1);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                        className="px-4 py-2 border border-gray-300 bg-white text-[#162B4E] text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        →
                                    </button>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}