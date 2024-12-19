import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MainMenu() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Sidebar />
      <main className="flex-1 flex items-center justify-center lg:ml-64">
        {/* Cuadro azul con el botón */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Menú Principal</h2>
          <button
            className="bg-white text-blue-800 py-3 px-6 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
            onClick={() => alert("Iniciar reunión")}
          >
            <i className="fas fa-video text-xl"></i>
            Iniciar Reunión
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainMenu;
