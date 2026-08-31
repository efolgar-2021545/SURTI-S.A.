import empresa from "../../data/empresa.json";

export default function ContactSection() {
    return (
        <section id="contacto" className="px-6 py-20 bg-slate-50">
            <h2 className="text-3xl font-display font-bold mb-4">Contacto</h2>
            <p className="text-simetsa-muted">Teléfono: {empresa.contacto.telefono}</p>
            <p className="text-simetsa-muted">Correo: {empresa.contacto.correo}</p>
            <p className="text-simetsa-muted">Dirección: {empresa.contacto.direccion}</p>
        </section>
    );
}