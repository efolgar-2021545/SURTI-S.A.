import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar'; // Ajusta la ruta si es necesario
import HomePage from '../pages/HomePage';
import BasculasPage from '../pages/BasculasPage';
import ProductoDetailPage from '../pages/ProductoDetailPage';
import BalanzasPage from '../pages/BalanzasPage';
import BalanzaDetailPage from '../pages/BalanzaDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Rutas para Básculas */}
                <Route path="/productos/basculas" element={<BasculasPage />} />
                <Route path="/productos/basculas/:id" element={<ProductoDetailPage />} />

                {/* Rutas para Balanzas */}
                <Route path="/productos/balanzas" element={<BalanzasPage />} />
                <Route path="/productos/balanzas/:id" element={<BalanzaDetailPage />} />

                {/* Ruta 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}