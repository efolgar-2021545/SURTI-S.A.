import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-[#162B4E]">404</h1>
            <p className="text-slate-500 mt-2">Página no encontrada</p>
            <Link
                to="/"
                className="mt-6 inline-block bg-[#162B4E] hover:bg-[#8D0002] text-white text-sm font-semibold py-3 px-8 rounded-full transition-colors"
            >
                Volver al inicio
            </Link>
        </div>
    );
}