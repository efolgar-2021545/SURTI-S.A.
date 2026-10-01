import { CreditCard, Landmark } from "lucide-react";
import pagos from "../../data/pagos.json";

export default function PaymentSection() {
    const { pagoEnLinea, transferencia } = pagos;

    return (
        <section id="pagos" className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#8D0002]">
                        Facilidades
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-[#162B4E] mt-2">
                        Formas de pago
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* PAGO EN LÍNEA -> edítalo en src/data/pagos.json, campo "pagoEnLinea" */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-[#162B4E]/10 flex items-center justify-center mb-4">
                            <CreditCard className="text-[#162B4E]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#162B4E] mb-3">Pago en línea</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            {pagoEnLinea.descripcion}
                        </p>
                        {pagoEnLinea.link ? (
                            <a
                                href={pagoEnLinea.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block self-start bg-[#162B4E] hover:bg-[#8D0002] text-white text-sm font-semibold uppercase tracking-wider py-3 px-8 rounded-full transition-colors mt-auto"
                            >
                                Pagar en línea
                            </a>
                        ) : (
                            <span className="inline-block self-start bg-gray-200 text-gray-500 text-sm font-semibold uppercase tracking-wider py-3 px-8 rounded-full mt-auto">
                                Enlace pendiente
                            </span>
                        )}
                    </div>

                    {/* TRANSFERENCIA -> edítala en src/data/pagos.json, campo "transferencia" */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#8D0002]/10 flex items-center justify-center mb-4">
                            <Landmark className="text-[#8D0002]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#162B4E] mb-3">Transferencia bancaria</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            {transferencia.descripcion}
                        </p>
                        <div className="border border-gray-200 rounded overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <tbody>
                                    {transferencia.datos.map((dato, idx) => (
                                        <tr
                                            key={idx}
                                            className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                        >
                                            <td className="py-2.5 px-4 font-semibold text-[#162B4E] border-b border-gray-200 w-1/2">
                                                {dato.clave}
                                            </td>
                                            <td className="py-2.5 px-4 text-gray-700 border-b border-gray-200">
                                                {dato.valor || "Pendiente"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}