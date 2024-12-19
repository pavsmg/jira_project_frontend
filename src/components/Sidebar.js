import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 shadow-lg z-40`}
    >
      {/* Encabezado del sidebar */}
      <div className="p-4 text-xl font-bold border-b border-blue-600 flex justify-between">
        <span> O </span>
        {/* Botón para cerrar la barra lateral */}
        <button className="text-2xl lg:hidden" onClick={toggleSidebar}>
          &times;
        </button>
      </div>

      {/* Navegación del sidebar */}
      <nav className="flex flex-col p-4 space-y-4">
        <a href="/minutes-history" className="hover:text-blue-300">
          Revisar Historial de Minutas
        </a>
        <button
          onClick={() => navigate("/login")} // Redirige a la pantalla de login
          className="text-left hover:text-blue-300"
        >
          Cerrar sesión
        </button>
        <a href="/about" className="hover:text-blue-300">
          Acerca de AlphaOmega
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
