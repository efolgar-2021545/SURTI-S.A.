import { basculasData } from "./basculas";
import { balanzasData } from "./balanzas";
import { accesoriosData } from "./accesorios";

// Configuración central de categorías de producto.
// Para agregar una categoría nueva en el futuro, solo añade un objeto aquí
// y crea su archivo de datos en src/data/ — no hay que tocar ningún componente.
export const categorias = [
    {
        slug: "basculas",
        nombre: "Básculas",
        data: basculasData,
    },
    {
        slug: "balanzas",
        nombre: "Balanzas",
        data: balanzasData,
    },
    {
        slug: "accesorios",
        nombre: "Accesorios",
        data: accesoriosData,
    },
];

export function getCategoria(slug) {
    return categorias.find((c) => c.slug === slug);
}