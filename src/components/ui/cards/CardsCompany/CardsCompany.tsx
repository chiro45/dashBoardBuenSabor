import styles from "./CardsCompany.module.css";

export const CardsCompany = () => {
  const company = {
    nombre: "Compañia 1",
    ubicacion: "San Juan 1223",
    puntuation: 1,
  };

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
    const rating = company.puntuation;
    const roundedRating = Math.round(rating); // Redondea la calificación a la más cercana
    const hasHalfStar =
      rating - roundedRating >= 0.25 && rating - roundedRating <= 0.75; // Verifica si hay media estrella

    if (index < roundedRating) {
      return { color: "gold" }; // Estrella llena
    } else if (index === roundedRating && hasHalfStar) {
      return {
        color: "gold",
        clipPath:
          "polygon(50% 0%, 100% 0%, 100% 100%, 50% 70%, 0% 100%, 0% 0%)",
      }; // Media estrella
    } else {
      return { color: "lightgray" }; // Estrella vacía
    }
  };

  return (
    <div className={styles.containerCardCompany}>
      <div className={styles.containerInformation}>
        <div>
          <h3>Sucursal</h3>
          <p className="d-flex justify-content-start">
            <span className="material-symbols-outlined">edit</span>Editar
          </p>
          <p className="d-flex justify-content-start">
            <span className="material-symbols-outlined">home_pin</span>
            Ubicacion
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
