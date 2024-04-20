import { Button, Form, InputGroup } from "react-bootstrap";
import { NavBar } from "../../ui/NavBar/NavBar";

import styles from "./Users.module.css";
import { TableComponent } from "../../ui/TableComponent/TableComponent";

export const Users = () => {
  const headerData = [
    {
      label: "Nombre",
    },
    {
      label: "Apellido",
    },
    {
      label: "Mail",
    },
    {
      label: "Categoria",
    },
  ];

  const bodyData = [
    {
      nombre: "Juan",
      apellido: "González",
      email: "juan@example.com",
      categoria: "Bronce",
    },
    {
      nombre: "María",
      apellido: "Martínez",
      email: "maria@example.com",
      categoria: "Plata",
    },
    {
      nombre: "Pedro",
      apellido: "Rodríguez",
      email: "pedro@example.com",
      categoria: "Oro",
    },
    {
      nombre: "Laura",
      apellido: "López",
      email: "laura@example.com",
      categoria: "Bronce",
    },
    {
      nombre: "Carlos",
      apellido: "Hernández",
      email: "carlos@example.com",
      categoria: "Oro",
    },
    {
      nombre: "Ana",
      apellido: "Pérez",
      email: "ana@example.com",
      categoria: "Plata",
    },
    {
      nombre: "Sofía",
      apellido: "García",
      email: "sofia@example.com",
      categoria: "Bronce",
    },
    {
      nombre: "Diego",
      apellido: "Díaz",
      email: "diego@example.com",
      categoria: "Plata",
    },
    {
      nombre: "Elena",
      apellido: "Ruiz",
      email: "elena@example.com",
      categoria: "Oro",
    },
    {
      nombre: "Miguel",
      apellido: "Sánchez",
      email: "miguel@example.com",
      categoria: "Bronce",
    },
  ];

  return (
    <div>
      <NavBar title={"Usuarios"} />
      <div>
        <div className="d-flex gap-2 p-3">
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              placeholder="Busca un usuario"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button variant="primary" className={styles.buttons}>
            <span className="material-symbols-outlined">search</span>
          </Button>
          <Button variant="light" className={styles.buttons}>
            <span className="material-symbols-outlined">add</span>
          </Button>
        </div>

        <div>
          <TableComponent tableData={bodyData} headerData={headerData} />
        </div>
      </div>
    </div>
  );
};
