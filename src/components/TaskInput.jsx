import React from "react";
import PropTypes from "prop-types";

const TaskInput = (props) => {
  return (
    <div className="todo-form">
        <div className="header">
          <h2 className="header">{props.header}</h2>
        </div>
        <div className="input-container">
          <div className="task-title">
            <input
              type="text"
              name={props.taskName}
              id={props.taskNameid}
              className={props.taskNameClass}
              placeholder={props.titlePlaceholder}
            />
          </div>
          <div className="task-detail">
            <input
              type="text"
              name={props.taskDetailName}
              id={props.taskDetailid}
              className={props.taskDetailClass}
              placeholder={props.detailPlaceholder}
            />
          </div>
        </div>
        <div className="submit-button">
          <input
            type="submit"
            value={props.submitBtnValue}
            className={props.submitBtnClass}
            id={props.submitBtnId}
          />
        </div>
    </div>
  );
};

TaskInput.propTypes = {
  header: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  taskNameid: PropTypes.string.isRequired,
  taskNameClass: PropTypes.string.isRequired,
  taskDetailName: PropTypes.string.isRequired,
  taskDetailid: PropTypes.string.isRequired,
  taskDetailClass: PropTypes.string.isRequired,
  titlePlaceholder: PropTypes.string.isRequired,
  detailPlaceholder: PropTypes.string.isRequired,
  submitBtnValue: PropTypes.string.isRequired,
  submitBtnClass: PropTypes.string.isRequired,
  submitBtnId: PropTypes.string.isRequired,
};

export default TaskInput;
