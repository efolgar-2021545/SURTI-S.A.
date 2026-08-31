import empresa from "../../data/empresa.json";

export default function AboutSection() {
    return (
        <section id="nosotros" className="px-6 py-20 bg-slate-50">
            <h2 className="text-3xl font-display font-bold mb-4">Nosotros</h2>
            <p className="text-simetsa-muted max-w-2xl">{empresa.descripcion}</p>
        </section>
    );
}