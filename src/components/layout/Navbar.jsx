export default function Navbar() {
    return (
        <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <span className="font-display font-bold text-xl text-surti-primary">
                    SURTI S.A.
                </span>
                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}