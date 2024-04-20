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
          <ItemDropdown routeBase="/" icon="incomplete_circle" title="Inicio" />
          <ItemDropdown
            routeBase="/products"
            icon="shopping_bag"
            title="Productos"
          />
          <ItemDropdown
            routeBase="/promotions"
            icon="sell"
            title="Promociones"
          />
          <ItemDropdown routeBase="/company" icon="folder" title="Empresa" />
          <ItemDropdown routeBase="/users" icon="group" title="Usuarios" />
          <ItemDropdown
            icon="shopping_bag"
            title="Categorias"
            routeBase="/categories"
            arrItemsIn={[
              {
                text: "Bebida",
                route: "drins",
              },
              {
                text: "Comida",
                route: "food",
              },
              {
                text: "Postre",
                route: "dessert",
              },
              {
                text: "Otro",
                route: "other",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
