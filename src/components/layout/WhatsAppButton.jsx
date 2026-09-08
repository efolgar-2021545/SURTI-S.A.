import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const numeroWhatsApp = "50266721242";
    const mensaje = "Hola, quisiera más información sobre sus productos.";

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
        >
            <MessageCircle size={28} className="text-white" fill="white" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        </a>
    );
}