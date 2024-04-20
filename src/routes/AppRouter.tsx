// Importación de Navigate, Route y Routes desde react-router-dom para configurar el enrutamiento
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/screens/Home/Home";
import { Products } from "../components/screens/Products/Products";
import { Users } from "../components/screens/Users/Users";
import { Categories } from "../components/screens/Categories/Categories";
import { Sidebar } from "../components/ui/SIdebar/Sidebar";

// Definición del componente AppRouter
export const AppRouter = () => {
  // Devolución del componente Routes que define las rutas de la aplicación
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "15vw 85vw",
        position: "relative",
        backgroundColor: "#e8e8e8",
      }}
    >
      <Sidebar />
      {/* Uso de Routes para definir las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/promotions" element={<Home />} />
        <Route path="/company" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>
    </div>
  );
};
