import { Accordion, Card } from "react-bootstrap";
import { FC, useEffect, useState } from "react";

import styles from "./ItemDropDown.module.css";
import { useNavigate } from "react-router-dom";

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
  return (
    <>
      {arrItems.length > 0 ? (
        <Accordion className={styles.acordionContainer}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
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
                  className={styles.itemAccordion}
                >
                  • {el.text}
                </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Card className={styles.singleItem}>
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
