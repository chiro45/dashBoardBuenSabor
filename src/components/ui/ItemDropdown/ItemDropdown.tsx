import { Accordion, Card } from "react-bootstrap";
import { FC, useEffect, useState } from "react";

import styles from "./ItemDropDown.module.css";

interface IItemDropdown {
  arrItemsIn?: IarrItems[];
  title: string;
  icon: string;
}
interface IarrItems {
  text: string;
}
export const ItemDropdown: FC<IItemDropdown> = ({
  arrItemsIn,
  title,
  icon,
}) => {
  const [arrItems, setArrItems] = useState<IarrItems[]>([]);
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
                <p key={index} className={styles.itemAccordion}>
                  • {el.text}
                </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Card className={styles.singleItem}>
          <Card.Body>
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
