import React from "react";
import TaskInput from "./TaskInput";
import PropTypes from "prop-types";


const EditTask = (props) => {
  return (
    <div className="edit-task-form" style={{display:"none"}}>
      <TaskInput
        header="Edit Task"
        taskName="task-title"
        taskNameid="editTask"
        taskNameClass="edit-Task"
        taskDetailName="task-detail"
        taskDetailClass="edit-task-detail"
        taskDetailid="editTaskDetail"
        titlePlaceholder="Task Title"
        detailPlaceholder="Task Detail"
        submitBtnValue="Upadate"
        submitBtnClass="edit-task-button"
        submitBtnId="editTaskButton"
        handleAddTask={props.handleEditTask}
      />
    </div>
  );
};


EditTask.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
};
export default EditTask;
