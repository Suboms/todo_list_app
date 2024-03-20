import React, { useEffect } from "react";
import AddTaskInput from "./AddTask";

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

  return (
    <>
      <AddTaskInput />
    </>
  );
};

export default CreateTask;
