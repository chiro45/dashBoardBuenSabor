import styles from "./Sidebar.module.css";
import { ItemDropdown } from "../ItemDropdown/ItemDropdown";
export const Sidebar = () => {
  return (
    <div className={styles.containerSidebar}>
      <div className={styles.containerNameSidebar}>
        <span className="material-symbols-outlined">account_circle </span>
        <span>Pollos Hermanos</span>
      </div>
      <div className={styles.containerItemsSidebar}>
        <div>
          <p style={{ color: "gray" }}>Dashboards</p>
        </div>
        <div className={styles.containerCategories}>
          <ItemDropdown icon="incomplete_circle" title="Inicio" />
          <ItemDropdown icon="shopping_bag" title="Productos" />
          <ItemDropdown icon="sell" title="Promociones" />
          <ItemDropdown icon="folder" title="Empresa" />
          <ItemDropdown icon="group" title="Usuarios" />
          <ItemDropdown
            icon="shopping_bag"
            title="Categorias"
            arrItemsIn={[
              {
                text: "Bebida",
              },
              {
                text: "Comida",
              },
              {
                text: "Postre",
              },
              {
                text: "Otro",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
