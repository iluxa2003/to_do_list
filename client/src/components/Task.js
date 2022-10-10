import Card from "react-bootstrap/Card";

const Task = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Task;
