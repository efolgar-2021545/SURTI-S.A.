import { marcasData } from "../../data/marcas";

export default function BrandsSection() {
    if (!marcasData || marcasData.length === 0) return null;

    return (
        <section className="bg-gray-50 py-14 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-[#162B4E]/60 mb-10">
                    Marcas que representamos
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
                    {marcasData.map((marca) => (
                        <img
                            key={marca.id}
                            src={marca.logo}
                            alt={marca.nombre}
                            title={marca.nombre}
                            className="h-12 md:h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}