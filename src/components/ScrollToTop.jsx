import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        // Riporta la posizione dello scroll all'inizio della pagina
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    
    return null; // Non renderizza nulla
}
