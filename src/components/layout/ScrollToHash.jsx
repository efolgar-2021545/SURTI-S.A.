import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Baja hasta la sección indicada en la URL (por ejemplo /#contacto)
// cuando la página termina de cargar o cuando cambia la ruta.
export default function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.replace("#", "");
        // Pequeña espera para que la página termine de renderizar
        const timer = setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return null;
}