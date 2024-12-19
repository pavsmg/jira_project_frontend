import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function MinutesHistory() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para la barra lateral
  const [minutes, setMinutes] = useState([]); // Estado para almacenar las minutas
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Alternar barra lateral
  };

  // Función para obtener las minutas desde la API
  useEffect(() => {
    const fetchMinutes = async () => {
      try {
        const response = await fetch("/api/minutes"); // Reemplaza con tu endpoint real
        const data = await response.json();
        setMinutes(data.reply); // Asignar la lista de minutas al estado
      } catch (error) {
        console.error("Error al obtener las minutas:", error);
      }
    };

    fetchMinutes();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      {/* Botón de hamburguesa */}
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
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">Historial de Minutas</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Texto</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Fecha y Hora</th>
              </tr>
            </thead>
            <tbody>
              {minutes.length > 0 ? (
                minutes.map((minute, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition">
                    <td className="px-6 py-4 border-t border-gray-200">{minute.text}</td>
                    <td className="px-6 py-4 border-t border-gray-200">{minute.timestamp}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="text-center py-4 text-gray-500 border-t border-gray-200"
                  >
                    No hay minutas disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Botón de regreso al menú principal */}
      <div className="flex justify-center items-center mb-6">
        <button
          onClick={() => navigate("/menu")}
          className="bg-blue-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2"
        >
          <i className="fas fa-arrow-left text-lg"></i>
          Menú Principal
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MinutesHistory;
