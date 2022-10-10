import TaskListTabStyle from "./TaskStyle/TaskListTabStyle";
import TaskListAccordionStyle from "./TaskStyle/TaskListAccordionStyle";
const TasksToSee = (props) => {
  return (
    <div>
      <TaskListTabStyle toDoList={props.toDoList} />
      <TaskListAccordionStyle items={props.toDoList} />
    </div>
  );
};
export default TasksToSee;
