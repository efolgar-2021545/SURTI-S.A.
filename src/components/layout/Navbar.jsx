import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);

    const productosData = [
        {
            categoria: "CATÁLOGO",
            items: [
                { nombre: "Básculas", link: "/productos/basculas" },
                { nombre: "Balanzas", link: "/productos/balanzas" },
                { nombre: "Accesorios", link: "#" }
            ]
        },
        {
            categoria: "CATEGORÍA 2",
            items: [
                { nombre: "Opción 1", link: "#" },
                { nombre: "Opción 2", link: "#" },
                { nombre: "Opción 3", link: "#" }
            ]
        }
    ];

    const serviciosData = [
        {
            categoria: "SERVICIOS PRINCIPALES",
            items: [
                { nombre: "Calibración de básculas", link: "#" },
                { nombre: "Mantenimiento preventivo", link: "#" },
                { nombre: "Reparación", link: "#" }
            ]
        }
    ];

    return (
        <header className="relative bg-white border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img
                                src="/image/logo-surti.jpg"
                                alt="SURTI S.A. Logo"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <nav className="flex space-x-8 h-full items-center">

                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setActiveMenu('productos')}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button
                                className={`text-sm font-semibold uppercase tracking-wider py-2 px-4 transition-colors ${activeMenu === 'productos'
                                        ? 'bg-[#162B4E] text-white'
                                        : 'text-[#162B4E] hover:text-[#8D0002]'
                                    }`}
                            >
                                Productos {activeMenu === 'productos' ? '✕' : '▾'}
                            </button>

                            {activeMenu === 'productos' && (
                                <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-xl border-t-2 border-[#8D0002] p-6 z-50 transform -translate-x-1/4">
                                    <div className="grid grid-cols-3 gap-8">
                                        {productosData.map((cat, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-sm font-bold text-[#162B4E] border-b-2 border-[#8D0002] pb-2 mb-3 tracking-wider">
                                                    {cat.categoria}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {cat.items.map((item, itemIdx) => (
                                                        <li key={itemIdx}>
                                                            <Link
                                                                to={item.link}
                                                                className="text-sm text-gray-700 hover:text-[#8D0002] transition-colors"
                                                                onClick={() => setActiveMenu(null)}
                                                            >
                                                                {item.nombre}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setActiveMenu('servicios')}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button
                                className={`text-sm font-semibold uppercase tracking-wider py-2 px-4 transition-colors ${activeMenu === 'servicios'
                                        ? 'bg-[#162B4E] text-white'
                                        : 'text-[#162B4E] hover:text-[#8D0002]'
                                    }`}
                            >
                                Servicios {activeMenu === 'servicios' ? '✕' : '▾'}
                            </button>

                            {activeMenu === 'servicios' && (
                                <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-xl border-t-2 border-[#8D0002] p-6 z-50 transform -translate-x-1/3">
                                    <div className="grid grid-cols-3 gap-8">
                                        {serviciosData.map((cat, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-sm font-bold text-[#162B4E] border-b-2 border-[#8D0002] pb-2 mb-3 tracking-wider">
                                                    {cat.categoria}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {cat.items.map((item, itemIdx) => (
                                                        <li key={itemIdx}>
                                                            <Link
                                                                to={item.link}
                                                                className="text-sm text-gray-700 hover:text-[#8D0002] transition-colors"
                                                                onClick={() => setActiveMenu(null)}
                                                            >
                                                                {item.nombre}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <a
                            href="/#nosotros"
                            className="text-sm font-semibold uppercase tracking-wider text-[#162B4E] hover:text-[#8D0002] transition-colors"
                        >
                            Conózcanos
                        </a>

                        <a
                            href="/#contacto"
                            className="text-sm font-semibold uppercase tracking-wider text-[#162B4E] hover:text-[#8D0002] transition-colors"
                        >
                            Contacto
                        </a>

                    </nav>
                </div>
            </div>
        </header>
    );
}