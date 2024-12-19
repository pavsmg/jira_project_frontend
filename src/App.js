import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página de inicio */}
        <Route path="/" element={<Home />} />
        {/* Ruta de la pantalla de menú */}
        <Route path="/menu" element={<MainMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
