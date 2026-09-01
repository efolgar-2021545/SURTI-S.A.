import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar'; // Asegúrate de ajustar la ruta según la ubicación de Navbar.jsx
import HomePage from '../pages/HomePage';
import BasculasPage from '../pages/BasculasPage';
import ProductoDetailPage from '../pages/ProductoDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/productos/basculas" element={<BasculasPage />} />
                <Route path="/productos/basculas/:id" element={<ProductoDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}