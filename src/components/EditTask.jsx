import React from "react";
import TaskInput from "./TaskInput";


const EditTaskInput = () => {
  return (
    <div className="edit-task-form">
      <TaskInput
        header="Edit Task"
        taskName="task-title"
        taskNameid="editTask"
        taskNameClass="edit-task"
        taskDetailName="task-detail"
        taskDetailClass="edit-task-detail"
        taskDetailid="editTaskDetail"
        titlePlaceholder="Task Title"
        detailPlaceholder="Task Detail"
        submitBtnValue="Upadate"
        submitBtnClass="edit-task-button"
        submitBtnId="editTaskButton"
      />
    </div>
  );
};
export default EditTaskInput;
