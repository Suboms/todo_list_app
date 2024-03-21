import React, { useEffect } from "react";
import TaskInput from "./TaskInput";
const AddTask = () => {
  const CreateTask = () => {
    const taskArray = [];
    useEffect(() => {
      const createTask = (taskTitle, taskDetail) => {
        const taskObject = { title: taskTitle, detail: taskDetail };
        taskArray.push(taskObject);
        console.log(taskArray);
      };

      const handleClick = () => {
        let taskTitle = document.getElementById("addTask").value;
        let taskDetail = document.getElementById("addTaskDetail").value;
        createTask(taskTitle, taskDetail);
      };

      let submitBtn = document.getElementById("addTaskButton");
      submitBtn.addEventListener("click", handleClick);

      return () => {
        submitBtn.removeEventListener("click", handleClick);
      };
    }, []);
  };
  CreateTask();
  return (
    <>
      
      <div className="add-task-form">
        <TaskInput
          header="Add Task"
          taskName="task-title"
          taskNameid="addTask"
          taskNameClass="add-task"
          taskDetailName="task-detail"
          taskDetailClass="add-task-detail"
          taskDetailid="addTaskDetail"
          titlePlaceholder="Task Title"
          detailPlaceholder="Task Detail"
          submitBtnValue="Add"
          submitBtnClass="add-task-button"
          submitBtnId="addTaskButton"
        />
      </div>
    </>
  );
};
export default AddTask;
