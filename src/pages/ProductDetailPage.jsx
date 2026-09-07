import { useParams, Link } from "react-router-dom";
import { getCategoria } from "../data/categorias";

export default function ProductDetailPage() {
    const { categoria: slug, id } = useParams();
    const categoriaActual = getCategoria(slug);

    const producto = categoriaActual?.data.find((item) => String(item.id) === String(id));

    if (!categoriaActual || !producto) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-[#162B4E]">Producto no encontrado</h2>
                <Link
                    to={categoriaActual ? `/productos/${categoriaActual.slug}` : "/"}
                    className="text-[#8D0002] underline mt-4 inline-block"
                >
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Breadcrumb */}
            <nav className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
                <Link to="/" className="hover:text-[#162B4E]">Inicio</Link> /
                <Link to={`/productos/${categoriaActual.slug}`} className="hover:text-[#162B4E] ml-1">
                    {categoriaActual.nombre}
                </Link> /
                <span className="text-[#8D0002] font-semibold ml-1">{producto.nombre}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Imagen con efecto zoom */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm overflow-hidden group">
                    <div className="overflow-hidden flex justify-center items-center">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="max-h-96 w-auto object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Información del producto */}
                <div className="space-y-6">
                    <div>
                        <span className="text-sm font-semibold text-[#8D0002] uppercase tracking-wider">
                            {producto.categoria}
                        </span>
                        <h1 className="text-3xl font-bold text-[#162B4E] mt-1">
                            {producto.nombre}
                        </h1>
                    </div>

                    <p className="text-base text-gray-700 leading-relaxed">
                        {producto.descripcionCorta}
                    </p>

                    <div className="border-t border-b border-gray-200 py-6 my-6">
                        <h3 className="text-lg font-bold text-[#162B4E] mb-3">
                            Información detallada del producto
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            {producto.descripcionLarga}
                        </p>

                        {producto.especificaciones && producto.especificaciones.length > 0 && (
                            <div>
                                <h4 className="text-xs font-bold text-[#162B4E] uppercase tracking-wider mb-2">
                                    Especificaciones técnicas
                                </h4>
                                <div className="border border-gray-200 rounded overflow-hidden">
                                    <table className="w-full text-left text-sm">
                                        <tbody>
                                            {producto.especificaciones.map((spec, idx) => (
                                                <tr
                                                    key={idx}
                                                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                                >
                                                    <td className="py-2.5 px-4 font-semibold text-[#162B4E] border-b border-gray-200 w-1/2">
                                                        {spec.clave}
                                                    </td>
                                                    <td className="py-2.5 px-4 text-gray-700 border-b border-gray-200">
                                                        {spec.valor}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Botón de cotizar corregido con etiqueta <a */}
                    <a
                        href="/#contacto"
                        className="inline-block bg-[#162B4E] hover:bg-[#8D0002] text-white font-semibold py-3 px-8 rounded-full transition-colors text-sm uppercase tracking-wider"
                    >
                        Cotizar este producto
                    </a>
                </div>
            </div>
        </div>
    );
}