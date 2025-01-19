import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
    const { hash } = useLocation();

    useEffect(() => {

        const handleScroll = () => {
            if (hash) {
                const section = document.querySelector(hash);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
            else {
                // Si no hay hash, desplazar al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        // Ejecutar al cargar el componente
        handleScroll();

        // Escuchar cambios en el hash
        window.addEventListener('hashchange', handleScroll);

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('hashchange', handleScroll);
        };
    }, [hash]);

    return null; // No renderiza nada
};


