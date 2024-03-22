import React from "react";
import propTypes from "prop-types";
const IndexPage = ({ taskArray, deleteHandler, editHandler }) => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="header">Todo App</h1>
        </div>

        <div className="task-list">
          <ul className="list-item">
            {taskArray.map((task, index) => (
              <li className="list" key={index}>
                <div className="card task">
                  <div className="task-content">
                    <h3 className="task-title">{task.title}</h3>
                    <p className="task-detail">{task.detail}</p>
                  </div>
                  <div className="task-action">
                    <div className="edit-container">
                    <button className="edit-task" onClick={editHandler}>Edit</button>
                    </div>
                    <div className="delete-container">
                    <button className="delete-task" onClick={deleteHandler}>
                      Delete
                    </button>
                    </div>
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="add-task-btn-container">
          <button className="create-task-btn">Add Task</button>
        </div>
      </div>
    </>
  );
};

IndexPage.propTypes = {
  taskArray: propTypes.array.isRequired,
  deleteHandler: propTypes.func.isRequired,
  editHandler: propTypes.func.isRequired,
};
export default IndexPage;
