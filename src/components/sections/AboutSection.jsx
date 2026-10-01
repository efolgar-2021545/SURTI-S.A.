import { Check, Eye, ShieldCheck, Target } from "lucide-react";
import empresa from "../../data/empresa.json";

export default function AboutSection() {
    return (
        <section id="nosotros" className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#8D0002]">
                        Conózcanos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-[#162B4E] mt-2 mb-4">
                        Nosotros
                    </h2>
                    <p className="text-slate-600">{empresa.descripcion}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* MISIÓN -> edítala en src/data/empresa.json, campo "mision" */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#162B4E]/10 flex items-center justify-center mb-4">
                            <Target className="text-[#162B4E]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#162B4E] mb-3">Misión</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {empresa.mision}
                        </p>
                    </div>

                    {/* VISIÓN -> edítala en src/data/empresa.json, campo "vision" */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#8D0002]/10 flex items-center justify-center mb-4">
                            <Eye className="text-[#8D0002]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#162B4E] mb-3">Visión</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {empresa.vision}
                        </p>
                    </div>
                </div>
                {/* VALORES -> edítalos en src/data/empresa.json, campo "valores" */}
                <div className="mt-6 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-[#162B4E] mb-4">Valores</h3>
                    <div className="flex flex-wrap gap-2">
                        {empresa.valores.map((valor) => (
                            <span
                                key={valor}
                                className="text-sm font-semibold text-[#162B4E] bg-[#162B4E]/10 rounded-full px-4 py-1.5"
                            >
                                {valor}
                            </span>
                        ))}
                    </div>
                </div>

                {/* POLÍTICA DE CALIDAD -> edítala en src/data/empresa.json, campo "politicaCalidad" */}
                <div className="mt-6 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#8D0002]/10 flex items-center justify-center mb-4">
                        <ShieldCheck className="text-[#8D0002]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#162B4E] mb-3">Política de calidad</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {empresa.politicaCalidad.compromiso}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                        {empresa.politicaCalidad.puntos.map((punto) => (
                            <li key={punto} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check size={16} className="mt-0.5 flex-shrink-0 text-[#8D0002]" />
                                <span>{punto}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}