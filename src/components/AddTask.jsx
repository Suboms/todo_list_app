import React from "react";
import TaskInput from "./TaskInput";
const AddTaskInput = () => {
  return (
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
  );
};
export default AddTaskInput;
