import React from "react";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 shadow-lg z-40`}
    >
      <div className="p-4 text-xl font-bold border-b border-blue-600 flex justify-between">
        <span> O </span>
        {/* Botón para cerrar la barra lateral */}
        <button className="text-2xl lg:hidden" onClick={toggleSidebar}>
          &times;
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <a href="#" className="hover:text-blue-300">Historial de minutas</a>
        <a href="#" className="hover:text-blue-300">Cerrar sesión</a>
        <a href="/about" className="hover:text-blue-300">Acerca de AlphaOmega</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
