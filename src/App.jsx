/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import IndexPage from "./components/Index";
// import CreateTask from "./components/CreateTask";
import AddTask from "./components/AddTask";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const createTask = (taskTitle, taskDetail) => {
    const taskObject = { title: taskTitle, detail: taskDetail };
    setTaskArray([...taskArray, taskObject]);
  };

  const handleAddTask = () => {
    let taskTitle = document.getElementById("addTask");
    let taskDetail = document.getElementById("addTaskDetail");
    if (taskTitle.validity.valid && taskDetail.validity.valid) {
      createTask(taskTitle.value, taskDetail.value);
    }
  };

  useEffect(() => {
    const switchPage = () => {
      const addTaskForm = document.querySelector(".add-task-form");
      const container = document.querySelector(".container");
      const createTaskBtn = document.querySelector(".create-task-btn");
      const addTaskBtn = document.querySelector(".add-task-button");
      let taskTitle = document.getElementById("addTask");
      let taskDetail = document.getElementById("addTaskDetail");
      createTaskBtn.addEventListener("click", () => {
        addTaskForm.style.display = "block";
        container.style.display = "none";
        taskTitle.value = "";
        taskDetail.value = "";
      });

      addTaskBtn.addEventListener("click", (e) => {
        if (taskTitle.validity.valid && taskDetail.validity.valid) {
          e.preventDefault();
          addTaskForm.style.display = "none";
          container.style.display = "block";
        }
      });
    };

    switchPage();
  }, []);
  const handleDelete = () => {
    const deleteTask = document.querySelectorAll(".delete-task");
    deleteTask.forEach((task, index) => {
      console.log(task);
      taskArray.splice(index, 1);
      setTaskArray([...taskArray]);
    });
  };
  return (
    <>
      <IndexPage taskArray={taskArray} deleteHandler={handleDelete}/>
      <AddTask handleAddTask={handleAddTask} />
    </>
  );
}

export default App;
