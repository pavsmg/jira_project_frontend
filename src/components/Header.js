import React from "react";

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-800 shadow-md">
      {/* Botón de hamburguesa (izquierda) */}
      <button
        className="text-2xl text-white lg:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Logo y nombre del equipo (derecha) */}
      <div className="flex items-center gap-4 ml-auto">
        <img
          src="/images/logo_alphaomega.png"
          alt="AlphaOmega Logo"
          className="w-10 h-10"
        />
        <h1 className="text-xl font-bold text-white">Alphaomega Team</h1>
      </div>
    </header>
  );
}

export default Header;
