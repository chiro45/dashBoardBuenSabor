import { CardsHome } from "../../ui/cards/CardsHome/CardsHome";
import { PieChart } from "../../ui/charts/PieChart/PieChart";
import { VerticalBarChart } from "../../ui/charts/VerticalBarChart/VerticalBarChart";
import { NavBar } from "../../ui/NavBar/NavBar";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div >
      <NavBar title={"Bienvenido"} />
      <div className={styles.containerContent}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "25vh",
            width: "100%",
          }}
        >
          <CardsHome title="Productos" />
          <CardsHome title="Empresas" />
          <CardsHome title="Usuarios" />
        </div>
        <div className={styles.containerChart}>
          <VerticalBarChart
            width={35}
            heigth={40}
            title="Ranking de productos"
          />
          <PieChart width={35} heigth={40} title="Ventas por categoria" />
        </div>
      </div>
    </div>
  );
};
