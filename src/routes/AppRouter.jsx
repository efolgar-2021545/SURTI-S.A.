import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import HomePage from '../pages/HomePage';
import BasculasPage from '../pages/BasculasPage';
import ProductoDetailPage from '../pages/ProductoDetailPage';
import BalanzasPage from '../pages/BalanzasPage';
import BalanzaDetailPage from '../pages/BalanzaDetailPage';
import AccesoriosPage from '../pages/AccesoriosPage';
import AccesoriosDetailPage from '../pages/AccesoriosDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import Footer from '../components/layout/Footer';

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

                {/* Rutas para Accesorios */}
                <Route path="/productos/accesorios" element={<AccesoriosPage />} />
                <Route path="/productos/accesorios/:id" element={<AccesoriosDetailPage />} />

                {/* Ruta 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}