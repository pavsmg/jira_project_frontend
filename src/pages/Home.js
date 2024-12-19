import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 lg:ml-64">
        <div className="flex flex-col-reverse lg:flex-row w-full max-w-5xl items-center">
          {/* Parte izquierda: Título y logo */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <img
                src="/images/Jira_logo.png"
                alt="Jira Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900">
                Jira Voice Management Assistant
              </h1>
            </div>
            <p className="text-gray-600 text-lg mt-4">
              Simplifica la gestión de proyectos con comandos de voz.
            </p>
          </div>

          {/* Parte derecha: Botones */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-xl font-bold mb-4 text-center">
                Bienvenido
              </h2>
              <div className="space-y-4">
                <button
                  className="w-full bg-white text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100"
                  onClick={() => navigate("/login")} // Navega a la página de Login
                >
                  Iniciar Sesión
                </button>
                <button
                  className="w-full bg-white text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100"
                  onClick={() => navigate("/register")} // Navega a la página de Registro
                >
                  Crear Cuenta Nueva
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
