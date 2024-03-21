import React from "react";
import propTypes from "prop-types";
const IndexPage = ({taskArray}) => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="header">Todo App</h1>
        </div>

        <div className="task-list">
          <ul className="list-item">
            {taskArray.map((task, index)=>{
              <li className="list" key={index}>
              <div className="card task">
                <div className="task-content">
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-detail">{task.detail}</p>
                </div>
                <div className="task-action">
                  <button className="edit-task">Edit</button>
                  <button className="delete-task">Delete</button>
                </div>
              </div>
            </li>
            })
            }
          </ul>
        </div>
      </div>
    </>
  );
};

IndexPage.propTypes = {
  taskArray:propTypes.array.isRequired
};
export default IndexPage;
