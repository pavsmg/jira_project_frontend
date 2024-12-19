import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function MeetingMode() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para la barra lateral
  const [isRecording, setIsRecording] = useState(false); // Estado para grabación
  const [response, setResponse] = useState("Aquí aparecerán los resultados."); // Estado para mostrar resultados

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Alternar barra lateral
  };

  const navigate = useNavigate();

  const startRecording = () => {
    setIsRecording(true);
    setResponse("Grabación en curso...");
    // Lógica para iniciar grabación
  };

  const stopRecording = () => {
    setIsRecording(false);
    setResponse("Grabación detenida y enviada.");
    // Lógica para detener y enviar grabación
  };

  const cancelRecording = () => {
    setIsRecording(false);
    setResponse("Grabación cancelada.");
    // Lógica para cancelar grabación
  };

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
      <main className="flex-1 flex items-center justify-center relative">
        {/* Cuadro central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* Botones */}
          <div className="flex flex-col gap-4">
            <button
              className={`py-3 px-4 rounded-md font-semibold transition ${
                isRecording
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-800 hover:bg-gray-100"
              }`}
              onClick={startRecording}
              disabled={isRecording}
            >
              Iniciar Grabación
            </button>
            <button
              className={`py-3 px-4 rounded-md font-semibold transition ${
                isRecording
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={stopRecording}
              disabled={!isRecording}
            >
              Detener y Enviar
            </button>
            <button
              className={`py-3 px-4 rounded-md font-semibold transition border ${
                isRecording
                  ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  : "border-gray-400 text-gray-400 cursor-not-allowed"
              }`}
              onClick={cancelRecording}
              disabled={!isRecording}
            >
              Cancelar
            </button>
          </div>
          {/* Resultado */}
          <div className="mt-6 bg-gray-100 text-blue-800 p-4 rounded-md text-center">
            {response}
          </div>
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

export default MeetingMode;
