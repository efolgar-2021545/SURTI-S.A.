import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, User } from "lucide-react";
import empresa from "../data/empresa.json";

export default function VentasEnLineaPage() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    // TODO: conectar con el backend de autenticación cuando esté definido.
    // Por ahora el formulario no valida credenciales.
    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje("El acceso a ventas en línea estará disponible próximamente.");
    };

    return (
        <>
            {/* Banner superior */}
            <div className="bg-[#162B4E] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">Ventas en línea</h1>
                    <p className="text-sm text-gray-300 mt-2">
                        <Link to="/" className="hover:underline hover:text-white transition-colors">
                            INICIO
                        </Link>
                        {" / "}
                        <span className="text-gray-400">VENTAS EN LÍNEA</span>
                    </p>
                </div>
            </div>

            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                    <h2 className="text-xl font-bold text-[#162B4E] mb-1">Iniciar sesión</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Ingresa con tu usuario y contraseña para realizar tus compras.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="usuario" className="block text-xs font-bold text-[#162B4E] uppercase tracking-wider mb-1">
                                Usuario
                            </label>
                            <div className="relative">
                                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    id="usuario"
                                    type="text"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    required
                                    autoComplete="username"
                                    className="w-full border border-gray-300 rounded pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[#162B4E]"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs font-bold text-[#162B4E] uppercase tracking-wider mb-1">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                    className="w-full border border-gray-300 rounded pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[#162B4E]"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#162B4E] hover:bg-[#8D0002] text-white text-sm font-semibold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
                        >
                            Ingresar
                        </button>

                        {mensaje && (
                            <p className="text-sm text-[#8D0002] text-center">{mensaje}</p>
                        )}
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-6">
                        ¿Aún no tienes usuario? Solicítalo en{" "}
                        <a href={`mailto:${empresa.contacto.correo}`} className="text-[#8D0002] underline">
                            {empresa.contacto.correo}
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}