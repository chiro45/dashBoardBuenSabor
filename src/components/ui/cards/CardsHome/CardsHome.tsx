import { FC } from "react";
import styles from "./CardsHome.module.css";
interface ICardsHome {
  title: string;
}

export const CardsHome: FC<ICardsHome> = ({ title }) => {
  return (
    <div className={styles.containerCardsHome}>
      <div className={styles.title__CardsHome}>
        <h2>{title}</h2>
      </div>
      <div className={styles.actions__CardsHome}>
        <h4 className="d-flex justify-content-start align-items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          <span>Agregar</span>
        </h4>
        <h4 className="d-flex justify-content-start align-items-center gap-2">
          <span className="material-symbols-outlined">
            format_list_bulleted
          </span>
          <span>Listar</span>
        </h4>
      </div>
    </div>
  );
};
