import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  const collaborators = [
    "De La Cruz González Axel Adolfo",
    "Escobar Montoya Patricio",
    "Juárez Botello Josué Adalid",
    "Juárez Solano Juan Martín",
    "Martínez Serrano Alexis Geovanni",
    "Montoya Gutiérrez Pavel",
    "Rodríguez Cuéllar Spencer Fabian",
    "Sireno Ojeda César Abraham",
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Acerca de AlphaOmega</h1>

        {/* Cuadro de GitHub */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Repositorio del Proyecto</h2>
          <a
            href="https://github.com/pavsmg/jira_project_frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-blue-800 hover:text-blue-600 transition"
          >
            <img
              src="/images/github_logo.png" // Coloca aquí la ruta correcta al logo de GitHub
              alt="GitHub Logo"
              className="w-12 h-12"
            />
            <span className="text-lg font-medium">Ver en GitHub</span>
          </a>
        </div>

        {/* Cuadro de colaboradores */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Colaboradores</h2>
          <ul className="list-disc pl-5 text-gray-800">
            {collaborators.map((collaborator, index) => (
              <li key={index} className="mb-2">{collaborator}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
