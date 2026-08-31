import empresa from "../../data/empresa.json";

export default function HeroSection() {
    return (
        <section id="inicio" className="px-6 py-24 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-simetsa-primary">
                {empresa.nombre}
            </h1>
            <p className="mt-4 text-simetsa-muted max-w-xl mx-auto">
                {empresa.eslogan}
            </p>
        </section>
    );
}