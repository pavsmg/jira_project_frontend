import React from 'react';

function Header({ toggleMenu }) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-blue-800 shadow-md">
            {/* Botón para abrir/cerrar el menú (izquierda) */}
            <button className="text-2xl text-white lg:hidden" onClick={toggleMenu}>
                ☰
            </button>

            {/* Logo y Nombre del Equipo (derecha) */}
            <div className="flex items-center gap-4 ml-auto">
                <img src="/images/logo_alphaomega.png" alt="AlphaOmega Logo" className="w-10 h-10" />
                <h1 className="text-xl lg:text-2xl font-bold text-white">
                    Alphaomega Team
                </h1>
            </div>
        </header>
    );
}

export default Header;