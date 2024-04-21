import { FC } from "react";
import styles from "./CardsCompany.module.css";

interface ICardsCompany {
  name: string;
  ubication: string;
  puntuation: number;
}

export const CardsCompany: FC<ICardsCompany> = ({
  name,
  ubication,
  puntuation,
}) => {
  const renderStars = () => {
    return (
      <div className="d-flex justify-content-start align-items-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{ fontSize: "24px", ...getStarStyle(index) }} // Utiliza la función getStarStyle para obtener los estilos de las estrellas
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  const getStarStyle = (index: number) => {
    const rating = puntuation;

    if (rating >= index + 1) {
      return { color: "gold" }; // Estrella llena
    } else if (rating >= index + 0.5) {
      return {
        color: "gold",
        clipPath: "polygon(50% 0%, 100% 38%, 75% 100%, 25% 100%, 0% 38%)", // Define el clipPath para media estrella
      }; // Media estrella
    } else {
      return { color: "lightgray" }; // Estrella vacía
    }
  };

  return (
    <div className={styles.containerCardCompany}>
      <div className={styles.containerInformation}>
        <div>
          <h3>{name}</h3>
          <p className="d-flex justify-content-start">
            <span className="material-symbols-outlined">edit</span>Editar
          </p>
          <p className="d-flex justify-content-start">
            <span className="material-symbols-outlined">home_pin</span>
            {ubication}
          </p>
        </div>
        {renderStars()}
      </div>
      <div className={styles.containerImg}>
        <img
          src="https://img.freepik.com/foto-gratis/disparo-angulo-edificio-alto-ciudad-cielo-azul-fondo-nueva-york_181624-20345.jpg"
          alt="Company Image"
        />
      </div>
    </div>
  );
};
