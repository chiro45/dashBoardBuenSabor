// Importación de Navigate, Route y Routes desde react-router-dom para configurar el enrutamiento
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/screens/Home/Home";

// Definición del componente AppRouter
export const AppRouter = () => {
  // Devolución del componente Routes que define las rutas de la aplicación
  return (
    <>
      
      {/* Uso de Routes para definir las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/promotions" element={<Home />} />
        <Route path="/company" element={<Home />} />
        <Route path="/users" element={<Home />} />
        <Route path="/categories/:category" element={<Home />} />
      </Routes>
    </>
  );
};
