import { useState } from "react";
import TasksToSee from "./TasksToSee";
const MainPage = () => {
  const [listToDo, setListToDo] = useState([
    {
      id: 1,
      shortName: "my task",
      originalTitle: "Start of the pet project",
      description:
        "today i need to work on myself as a professional programmer",
    },
    {
      id: 2,
      shortName: "my second task",
      originalTitle: "This week main task is to build site registration madal",
      description: "today is my second day as a professional programmer",
    },
    {
      id: 3,
      shortName: "week-end",
      originalTitle: "I want to hangout with my GF today",
      description:
        "this is a lazy day, i'll chill for one day, what could possibly go wrong",
    },
    {
      id: 4,
      shortName: "after week-end",
      originalTitle: "There is so much work left to do",
      description:
        "today i should work really hard bcs yesterday i missed a lot of job",
    },
  ]);
  return (
    <main className="main-page">
      <div className="main-page__wrapper">
        <TasksToSee toDoList={listToDo} />
      </div>
    </main>
  );
};

export default MainPage;
