import React from "react";

const IndexPage = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="header">Todo App</h1>
        </div>

        <div className="task-list">
          <ul className="list-item">
            <li className="list">
              <div className="card task">
                <div className="task-content">
                  <h3 className="task-title">Task Title</h3>
                  <p className="task-detail">Task Detail</p>
                </div>
                <div className="task-action">
                  <button className="edit-task">Edit</button>
                  <button className="delete-task">Delete</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
