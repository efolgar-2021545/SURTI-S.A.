import { useParams, Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { basculasData } from '../data/basculas';

export default function ProductoDetailPage() {
    const { id } = useParams();
    const producto = basculasData.find((item) => item.id === parseInt(id));

    if (!producto) {
        return (
            <AppLayout>
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold text-[#162B4E]">Producto no encontrado</h2>
                    <Link to="/productos/basculas" className="text-[#8D0002] underline mt-4 inline-block">
                        Volver al catálogo
                    </Link>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Breadcrumb */}
                <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
                    <Link to="/" className="hover:text-[#162B4E]">Inicio</Link> /
                    <Link to="/productos/basculas" className="hover:text-[#162B4E] ml-1">Básculas</Link> /
                    <span className="text-[#8D0002] font-semibold ml-1">{producto.nombre}</span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Izquierda: Imagen del producto con efecto Zoom */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm overflow-hidden group">
                        <div className="overflow-hidden flex justify-center items-center">
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="max-h-96 w-auto object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Derecha: Información del Producto */}
                    <div className="space-y-6">
                        <div>
                            <span className="text-sm font-semibold text-[#8D0002] uppercase tracking-wider">
                                {producto.categoria}
                            </span>
                            <h1 className="text-3xl font-bold text-[#162B4E] mt-1">
                                {producto.nombre}
                            </h1>
                        </div>

                        {/* Descripción Corta */}
                        <p className="text-base text-gray-700 leading-relaxed">
                            {producto.descripcionCorta}
                        </p>

                        {/* Espacio para Información Detallada Adicional */}
                        <div className="border-t border-b border-gray-200 py-6 my-6">
                            <h3 className="text-lg font-bold text-[#162B4E] mb-3">
                                Información Detallada del Producto
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {producto.descripcionLarga}
                            </p>

                            {/* Especificaciones Técnicas */}
                            {producto.especificaciones && (
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h4 className="text-xs font-bold text-[#162B4E] uppercase tracking-wider mb-2">
                                        Especificaciones Técnicas
                                    </h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        {producto.especificaciones.map((spec, idx) => (
                                            <li key={idx} className="flex justify-between border-b border-gray-200 py-1 last:border-0">
                                                <span className="font-semibold">{spec.clave}:</span>
                                                <span>{spec.valor}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Botón de Contacto */}
                        <a
                            href="/#contacto"
                            className="inline-block bg-[#162B4E] hover:bg-[#8D0002] text-white font-semibold py-3 px-8 rounded transition-colors text-sm uppercase tracking-wider"
                        >
                            Cotizar este producto
                        </a>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}