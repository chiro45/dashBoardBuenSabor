import { Button, Form, InputGroup } from "react-bootstrap";
import { NavBar } from "../../ui/NavBar/NavBar";

import styles from "./Products.module.css";
import { TableComponent } from "../../ui/TableComponent/TableComponent";

export const Products = () => {

  const headerData = [
    {
      label: "Nombre",
    },
    {
      label: "Description",
    },
    {
      label: "Categoria",
    },
    {
      label: "Precio",
    },
  ];

  const bodyData = [
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Hamburguesa clásica",
      descripcion:
        "Deliciosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.",
      categoria: "Comida",
      precio: 8.99,
    },
    {
      nombre: "Pizza de pepperoni",
      descripcion:
        "Pizza recién horneada con salsa de tomate, queso mozzarella y pepperoni.",
      categoria: "Comida",
      precio: 10.49,
    },
    {
      nombre: "Ensalada César",
      descripcion:
        "Ensalada fresca con lechuga romana, aderezo César, crutones y queso parmesano.",
      categoria: "Comida",
      precio: 7.99,
    },
    {
      nombre: "Sándwich de pollo a la parrilla",
      descripcion:
        "Sándwich con pechuga de pollo a la parrilla, lechuga, tomate y mayonesa.",
      categoria: "Comida",
      precio: 6.99,
    },
    {
      nombre: "Pasta Alfredo",
      descripcion: "Pasta con salsa Alfredo cremosa y pollo a la parrilla.",
      categoria: "Comida",
      precio: 9.99,
    },
    {
      nombre: "Burrito de carne asada",
      descripcion:
        "Burrito grande con carne asada, arroz, frijoles, queso y salsa.",
      categoria: "Comida",
      precio: 8.79,
    },
    {
      nombre: "Sushi variado",
      descripcion:
        "Selección de sushi fresco incluyendo rollos de salmón, atún y California.",
      categoria: "Comida",
      precio: 12.99,
    },
    {
      nombre: "Tacos al pastor",
      descripcion:
        "Tacos tradicionales mexicanos con carne de cerdo marinada, piña y cilantro.",
      categoria: "Comida",
      precio: 9.49,
    },
    {
      nombre: "Papas fritas",
      descripcion:
        "Papas fritas crujientes y doradas, perfectas como acompañamiento o snack.",
      categoria: "Comida",
      precio: 3.99,
    },
    {
      nombre: "Helado de vainilla",
      descripcion:
        "Helado cremoso de vainilla con topping de caramelo y nueces.",
      categoria: "Comida",
      precio: 4.49,
    },
  ];
  return (
    
      <div>
        <NavBar title={"Productos"} />
        <div>
          <div className="d-flex gap-2 p-3">
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Buscar
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                placeholder="Ingresa un producto"
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
