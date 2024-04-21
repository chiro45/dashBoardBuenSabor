import { Button, Form, InputGroup } from "react-bootstrap";
import { NavBar } from "../../ui/NavBar/NavBar";
import styles from "./Company.module.css";
import { CardsCompany } from "../../ui/cards/CardsCompany/CardsCompany";

export const Company = () => {
  const dataCompany = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <NavBar title={"Empresa"} />
      <div>
        <div className="d-flex gap-2 p-3">
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              placeholder="Buscar sucursal"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button variant="primary" className={styles.buttons}>
            <span
              style={{ fontSize: "4vh" }}
              className="material-symbols-outlined"
            >
              search
            </span>
          </Button>
          <Button variant="light">
            <span
              style={{ fontSize: "4vh" }}
              className="material-symbols-outlined"
            >
              add
            </span>
          </Button>
        </div>
        <div>
          <div
            className="d-flex justify-content-around"
            style={{ width: "35vw" }}
          >
            <div className="d-flex flex-column">
              <h1 className={styles.titleCompany}>Nombre Empresa</h1>
              <h2 className={styles.subTitleCompany}>Sucursales</h2>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <Button variant="primary" className={styles.buttonsBody}>
                <span
                  style={{ fontSize: "4vh" }}
                  className="material-symbols-outlined"
                >
                  edit
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className={styles.containerCards}>
          {dataCompany.map((el) => (
            <CardsCompany />
          ))}
        </div>
      </div>
    </div>
  );
};
