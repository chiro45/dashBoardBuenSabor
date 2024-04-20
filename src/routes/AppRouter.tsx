// Importación de Navigate, Route y Routes desde react-router-dom para configurar el enrutamiento
import { Route, Routes } from "react-router-dom";
import { MainScreen } from "../components/screens/MainScreen";

// Definición del componente AppRouter
export const AppRouter = () => {
  // Devolución del componente Routes que define las rutas de la aplicación
  return (
    <>
      {/* Uso de Routes para definir las rutas */}
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </>
  );
};
