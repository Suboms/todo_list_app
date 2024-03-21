/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import IndexPage from "./components/Index";
// import CreateTask from "./components/CreateTask";
import AddTask from "./components/AddTask";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetail, setTaskDetail] = useState("");

  const createTask = (taskTitle, taskDetail) => {
    const taskObject = { title: taskTitle, detail: taskDetail };
    setTaskArray([...taskArray, taskObject]);
  };
  
  useEffect(()=>{
    let taskTitleText = document.getElementById("addTask")
    let taskDetalText = document.getElementById("addTaskDetail")
    setTaskTitle(taskTitleText.value)
    setTaskDetail(taskDetalText.value)
  }, [])
  const handleAddTask = () => {
    createTask(taskTitle, taskDetail);
    setTaskTitle("");
    setTaskDetail("");
  };

  useEffect(() => {
    console.log(taskArray); // Logging taskArray after it's been updated
  }, [taskArray]);
  return (
    <>
      <IndexPage taskArray={taskArray}/>
      
      
      <AddTask handleAddTask={handleAddTask}/>
    </>
  );
}

export default App;
