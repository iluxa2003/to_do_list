import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
const TaskListAccordionStyle = (props) => {
  const [listToDo, setListToDo] = useState([]);
  useEffect(() => {
    setListToDo(props.items);
  }, [props]);
  return (
    <Accordion defaultActiveKey="0">
      {listToDo.map((item) => {
        return (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>{item.shortName}</Accordion.Header>
            <Accordion.Body>{item.description}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default TaskListAccordionStyle;
