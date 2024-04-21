import { Button, Form, InputGroup } from "react-bootstrap";
import { NavBar } from "../../ui/NavBar/NavBar";
import styles from "./Company.module.css";
import { CardsCompany } from "../../ui/cards/CardsCompany/CardsCompany";

export const Company = () => {
  const companies = [
    { name: "Empresa A", ubication: "Ciudad X", puntutation: 2.5 },
    { name: "Empresa B", ubication: "Ciudad Y", puntutation: 3.5 },
    { name: "Empresa C", ubication: "Ciudad Z", puntutation: 2.5 },
    { name: "Empresa D", ubication: "Ciudad W", puntutation: 4.5 },
  ];
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
          {companies.map((el) => (
            <CardsCompany
              ubication={el.ubication}
              puntuation={el.puntutation}
              name={el.name}
              key={el.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
