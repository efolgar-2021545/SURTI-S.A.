import servicios from "../../data/servicios.json";

export default function ServicesSection() {
    return (
        <section id="servicios" className="px-6 py-20">
            <h2 className="text-3xl font-display font-bold mb-8">Servicios</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {servicios.map((s) => (
                    <div key={s.id} className="border border-slate-200 rounded-xl p-6">
                        <h3 className="font-semibold mb-2">{s.titulo}</h3>
                        <p className="text-sm text-surti-muted">{s.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}