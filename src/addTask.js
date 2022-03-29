import { useState } from "react";
import { moreic } from './svg.js'

function AddNewTask(props){

    const [newTask, setNewTask]=useState({
        title:""
    })
    const handleFormChange=(event)=>{
        setNewTask({
            ...newTask,
            title:event.target.value
         } )
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
      };
    return(
        <form onSubmit={handleSubmitForm} className="mt-4">
        <h3 className="addNewTask">Add New Task</h3>
        <div className="mb-3">
          <label htmlFor="email" className="taskTitle">
            Task Title
          </label>
          <input
            type="text"
            className={`form-control `}
            id="title"
            aria-describedby="titleHelp"
            value={newTask.title}
            onChange={handleFormChange}
          />
        <button type="submit" className="btn" onClick={() =>props.addTask(newTask)}>
          {moreic}
        </button>
        </div>
      </form>
    )

}


export default AddNewTask;