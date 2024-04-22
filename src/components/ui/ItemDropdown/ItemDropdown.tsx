import { Accordion, Card } from "react-bootstrap";
import { FC, useEffect, useState } from "react";

import styles from "./ItemDropDown.module.css";
import { useLocation, useNavigate } from "react-router-dom";

interface IItemDropdown {
  arrItemsIn?: IarrItems[];
  title: string;
  icon: string;
  routeBase: string;
}
interface IarrItems {
  text: string;
  route: string;
}
export const ItemDropdown: FC<IItemDropdown> = ({
  arrItemsIn,
  title,
  icon,
  routeBase,
}) => {
  const location = useLocation();
  const [arrItems, setArrItems] = useState<IarrItems[]>([]);
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };
  useEffect(() => {
    if (arrItemsIn) {
      setArrItems(arrItemsIn);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (arrItemsIn) {
      // Comprobar si la ruta activa pertenece a los elementos del acordeón
      const isActive = arrItemsIn.some(
        (el) => `${routeBase}/${el.route}` === location.pathname
      );
      if (!isActive) {
        setIsOpen(false);
      }
    }
  }, [location.pathname]);

  return (
    <>
      {arrItems.length > 0 ? (
        <Accordion
          className={styles.acordionContainer}
          activeKey={isOpen ? "0" : ""}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
              <div className="d-flex justify-content-start  align-items-center gap-1">
                <span className="material-symbols-outlined">{icon}</span>
                {title}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {arrItems.map((el, index) => (
                <p
                  onClick={() => {
                    handleNavigate(`${routeBase}/${el.route}`);
                  }}
                  key={index}
                  className={`${styles.itemAccordion} ${
                    `${routeBase}/${el.route}` === location.pathname &&
                    styles.itemAccordionActive
                  }`}
                >
                  • {el.text}
                </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Card
          className={`${styles.singleItem} ${
            routeBase === location.pathname && `${styles.itemActive}`
          }`}
        >
          <Card.Body
            onClick={() => {
              handleNavigate(routeBase);
            }}
          >
            <div className="d-flex justify-content-start align-items-center gap-2">
              <span className="material-symbols-outlined">{icon}</span>
              <span> {title}</span>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
