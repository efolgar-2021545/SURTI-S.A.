import { useState } from 'react';
import { Link } from 'react-router-dom';
import { balanzasData } from '../data/balanzas';

export default function BalanzasPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const totalPages = Math.ceil(balanzasData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = balanzasData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {/* Banner Superior */}
            <div className="bg-[#162B4E] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">Balanzas</h1>
                    <p className="text-sm text-gray-300 mt-2">
                        <Link to="/" className="hover:underline hover:text-white transition-colors">
                            INICIO
                        </Link>
                        {' / '}
                        <Link to="/productos/basculas" className="hover:underline hover:text-white transition-colors">
                            PRODUCTOS
                        </Link>
                        {' / '}
                        <span className="text-gray-400">BALANZAS</span>
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Menú Lateral */}
                    <aside className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-[#162B4E] mb-3">Buscar productos</h3>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#162B4E]"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#162B4E] border-b pb-2 mb-3">Catálogo</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <Link to="/productos/basculas" className="hover:text-[#8D0002] transition-colors block">
                                        • Básculas
                                    </Link>
                                </li>
                                <li className="font-semibold text-[#8D0002]">
                                    • Balanzas ({balanzasData.length})
                                </li>
                                <li>
                                    <Link to="/productos/accesorios" className="hover:text-[#8D0002] transition-colors block">
                                        • Accesorios
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Grilla de Productos */}
                    <main className="md:col-span-3">
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
                                            {producto.categoria || producto.modelo}
                                        </span>

                                        <h3 className="text-base font-bold text-[#162B4E] mb-2">
                                            {producto.nombre}
                                        </h3>
                                        <p className="text-xs text-gray-600 line-clamp-3 mb-4">
                                            {producto.descripcionCorta}
                                        </p>
                                    </div>

                                    <Link
                                        to={`/productos/balanzas/${producto.id}`}
                                        className="inline-block bg-[#162B4E] hover:bg-[#0f1f38] text-white text-xs font-semibold py-2 px-6 rounded transition-colors self-center mt-2"
                                    >
                                        VER MÁS
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Paginador */}
                        <div className="flex justify-center items-center space-x-2 mt-12">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => {
                                        setCurrentPage(number);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`px-4 py-2 border text-sm font-semibold rounded ${currentPage === number
                                        ? 'bg-[#162B4E] text-white border-[#162B4E]'
                                        : 'bg-white text-[#162B4E] border-gray-300 hover:bg-gray-100'
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => {
                                        setCurrentPage(currentPage + 1);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="px-4 py-2 border border-gray-300 bg-white text-[#162B4E] text-sm font-semibold rounded hover:bg-gray-100"
                                >
                                    →
                                </button>
                            )}
                        </div>
                    </main>

                </div>
            </div>
        </>
    );
}