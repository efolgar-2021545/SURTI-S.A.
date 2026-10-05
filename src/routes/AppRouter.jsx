import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToHash from '../components/layout/ScrollToHash';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import VentasEnLineaPage from '../pages/VentasEnLineaPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
    return (
        <>
            <ScrollToHash />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Rutas de catálogo: :categoria = basculas | balanzas | accesorios */}
                <Route path="/productos/:categoria" element={<ProductListPage />} />
                <Route path="/productos/:categoria/:id" element={<ProductDetailPage />} />

                {/* Ventas en línea (inicio de sesión) */}
                <Route path="/ventas-en-linea" element={<VentasEnLineaPage />} />

                {/* Ruta 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
        </>
    );
}