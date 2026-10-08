import { useState } from "react";
import Task from "../Task/Task";
import tasks from "./data";
const dataTaskInitial = {
  id: 1,
  text: "learning",
  days: 42,
  isDone: false,
};

// const dataComment = {
  //   id:1,
  //   content: 'cool',
  //   likeAmount:132,
  //   isNew: true,
  // }
function TaskList() {
  const [dataTask, setDataTask] = useState(dataTaskInitial);
  const setDoneTask = () => {
    setDataTask({
      ...dataTask,
      isDone: true,
    });
  };
  return (
    <>
      <Task dataTask={dataTask} setDoneTask={setDoneTask} />
      {/* <Comment dataComment={dataComment} /> */}
      {
        tasks.map((task)=><Task key={task.id} dataTask={task} setDataTask={setDataTask}/>)
      }
    </>
  );
}

export default TaskList;
