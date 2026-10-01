import { Award, Clock, ShieldCheck } from "lucide-react";
import empresa from "../../data/empresa.json";

export default function CertificationSection() {
    const { certificacion } = empresa;

    return (
        <section id="certificacion" className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#8D0002]">
                        Respaldo
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-[#162B4E] mt-2 mb-4">
                        Certificación
                    </h2>
                    <p className="text-slate-600">{certificacion.descripcion}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* ENTE ACREDITADO -> edítalo en src/data/empresa.json, campo "certificacion" */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-[#162B4E]/10 flex items-center justify-center mb-4">
                            <ShieldCheck className="text-[#162B4E]" size={22} />
                        </div>
                        <h3 className="font-bold text-[#162B4E] mb-3">Ente acreditado</h3>
                        <img
                            src={certificacion.logo}
                            alt={certificacion.ente}
                            title={certificacion.ente}
                            className="h-16 w-auto object-contain"
                        />
                    </div>

                    {/* AÑOS DE EXPERIENCIA */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-[#162B4E]/10 flex items-center justify-center mb-4">
                            <Award className="text-[#162B4E]" size={22} />
                        </div>
                        <h3 className="font-bold text-[#162B4E] mb-3">Años de experiencia</h3>
                        <p className="text-2xl font-display font-bold text-[#8D0002]">
                            {certificacion.experiencia || "Pendiente"}
                        </p>
                    </div>

                    {/* HORARIO DE ATENCIÓN */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-[#162B4E]/10 flex items-center justify-center mb-4">
                            <Clock className="text-[#162B4E]" size={22} />
                        </div>
                        <h3 className="font-bold text-[#162B4E] mb-3">Horario de atención</h3>
                        <p className="text-sm font-semibold text-slate-600">
                            {certificacion.horario || "Pendiente"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}