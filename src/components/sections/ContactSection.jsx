import { Phone, Mail, MapPin } from "lucide-react";
import empresa from "../../data/empresa.json";

export default function ContactSection() {
    return (
        <section id="contacto" className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#162B4E] rounded-2xl px-6 sm:px-10 py-14 text-white">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                            Hablemos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">
                            Contacto
                        </h2>
                        <p className="text-white/70 text-sm">
                            Escríbenos o llámanos, con gusto te asesoramos.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                <Phone size={18} />
                            </div>
                            <span className="text-xs uppercase tracking-wider text-white/60">Teléfono</span>
                            <p className="text-sm font-semibold">{empresa.contacto.telefono || "Pendiente"}</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                <Mail size={18} />
                            </div>
                            <span className="text-xs uppercase tracking-wider text-white/60">Correo</span>
                            <p className="text-sm font-semibold">{empresa.contacto.correo || "Pendiente"}</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                <MapPin size={18} />
                            </div>
                            <span className="text-xs uppercase tracking-wider text-white/60">Dirección</span>
                            <p className="text-sm font-semibold">{empresa.contacto.direccion || "Pendiente"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}