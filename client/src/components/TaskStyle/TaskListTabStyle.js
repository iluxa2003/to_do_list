import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Task from "../Task";
const TaskListTabStyle = (props) => {
  const [listToDo, setListToDo] = useState([]);
  useEffect(() => {
    setListToDo(props.toDoList);
  }, [props]);
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            {listToDo.map((task) => {
              return (
                <ListGroup.Item
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                  action
                  href={task.id}
                  key={task.id}
                >
                  {task.shortName}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {listToDo.map((task) => {
              return (
                <Tab.Pane eventKey={task.id} key={task.id}>
                  <Task desc={task.description} title={task.originalTitle} />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default TaskListTabStyle;
