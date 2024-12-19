import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MainMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar la visibilidad de la barra lateral
  const navigate = useNavigate(); // Inicializa useNavigate para manejar la navegación

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Cambia entre abierto/cerrado
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Botón de hamburguesa fuera del Header */}
      <button
        className="absolute top-4 left-4 text-2xl text-white bg-blue-800 p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 z-50"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Header */}
      <Header />
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center relative">
        {/* Mensaje de bienvenida */}
        <div className="absolute top-10 left-10">
          <h1 className="text-3xl font-bold text-blue-800">Bienvenido, usuario</h1>
          <p className="text-gray-600">Gestiona tus proyectos de manera eficiente.</p>
        </div>

        {/* Cuadro azul con ícono de grabación */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-2xl text-white flex flex-col items-center relative">
          {/* Icono de grabación */}
          <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center animate-pulse shadow-md">
            <i className="fas fa-microphone text-2xl text-white"></i>
          </div>
          {/* Título debajo del ícono */}
          <h2 className="text-xl font-semibold mt-4">Iniciar Grabación</h2>
          <p className="text-sm text-gray-200 mt-2 text-center">
            Pulsa el botón para comenzar a grabar tus reuniones.
          </p>
          {/* Botón para iniciar grabación */}
          <button
            className="mt-6 bg-white text-blue-800 py-3 px-6 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-100 hover:scale-105 transition-transform duration-200 shadow-md"
            onClick={() => navigate("/meeting-mode")}
          >
            <i className="fas fa-video text-lg"></i>
            Iniciar Reunión
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainMenu;
