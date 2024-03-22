/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TaskInput from "./TaskInput";
import PropTypes from "prop-types";
const AddTask = (props) => {
  return (
    <>
      <div className="add-task-form" style={{display:"none"}}>
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
          handleAddTask={props.handleAddTask}
        />
      </div>
    </>
  );
};

AddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTask;
