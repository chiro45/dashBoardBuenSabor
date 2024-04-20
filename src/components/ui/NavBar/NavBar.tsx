import { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
interface INavBar {
  title: string;
}
export const NavBar: FC<INavBar> = ({ title }) => {
  return (
    <Navbar
      style={{
        backgroundColor: "#49111C",
        height: "8vh",
      }}
    >
      <Container>
        <Navbar.Brand className="text-white">
          <h1>{title}</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
