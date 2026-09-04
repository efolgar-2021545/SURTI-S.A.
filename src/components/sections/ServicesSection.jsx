import { Wrench, Settings, ShieldCheck, LifeBuoy } from "lucide-react";
import servicios from "../../data/servicios.json";

const iconos = [Wrench, Settings, ShieldCheck, LifeBuoy];

export default function ServicesSection() {
    return (
        <section id="servicios" className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#8D0002]">
                        Lo que hacemos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-[#162B4E] mt-2">
                        Servicios
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicios.map((s, i) => {
                        const Icono = iconos[i % iconos.length];
                        return (
                            <div
                                key={s.id}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#162B4E]/10 flex items-center justify-center mb-4">
                                    <Icono className="text-[#162B4E]" size={22} />
                                </div>
                                <h3 className="font-bold text-[#162B4E] mb-2">{s.titulo}</h3>
                                <p className="text-sm text-slate-600">{s.descripcion}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}