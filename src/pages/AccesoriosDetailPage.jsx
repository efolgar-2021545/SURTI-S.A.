import { useParams, Link } from 'react-router-dom';
import { accesoriosData } from '../data/accesorios';

export default function AccesoriosDetailPage() {
    const { id } = useParams();
    const producto = accesoriosData.find((item) => item.id === parseInt(id));

    if (!producto) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-[#162B4E]">Producto no encontrado</h2>
                <Link to="/productos/accesorios" className="text-[#8D0002] hover:underline mt-4 inline-block">
                    Volver a Accesorios
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Banner Superior */}
            <div className="bg-[#162B4E] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">{producto.nombre}</h1>
                    <p className="text-sm text-gray-300 mt-2">
                        <Link to="/" className="hover:underline hover:text-white transition-colors">
                            INICIO
                        </Link>
                        {' / '}
                        <Link to="/productos/accesorios" className="hover:underline hover:text-white transition-colors">
                            ACCESORIOS
                        </Link>
                        {' / '}
                        <span className="text-gray-400">{producto.nombre}</span>
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Imagen del Producto */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center min-h-[350px]">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="max-h-80 object-contain"
                        />
                    </div>

                    {/* Información y Especificaciones */}
                    <div className="space-y-6">
                        <div>
                            <span className="text-sm font-semibold text-[#8D0002] uppercase tracking-wider">
                                {producto.categoria} - {producto.modelo}
                            </span>
                            <h2 className="text-3xl font-bold text-[#162B4E] mt-1">{producto.nombre}</h2>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-sm">
                            {producto.descripcionLarga}
                        </p>

                        {/* Tabla de Especificaciones */}
                        {producto.especificaciones && (
                            <div className="border-t border-gray-200 pt-4">
                                <h3 className="text-base font-bold text-[#162B4E] mb-3">Especificaciones Técnicas</h3>
                                <div className="border rounded overflow-hidden">
                                    <table className="w-full text-left text-xs text-gray-700">
                                        <tbody>
                                            {producto.especificaciones.map((spec, index) => (
                                                <tr
                                                    key={index}
                                                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                                >
                                                    <td className="py-2.5 px-4 font-semibold border-b text-[#162B4E]">
                                                        {spec.clave}
                                                    </td>
                                                    <td className="py-2.5 px-4 border-b">
                                                        {spec.valor}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        <div className="pt-4">
                            <Link
                                to="/contacto"
                                className="inline-block bg-[#8D0002] hover:bg-[#6e0002] text-white font-semibold text-sm py-3 px-8 rounded transition-colors"
                            >
                                Cotizar este accesorio
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}