import { useState } from "react";
import AddNewTask from './addTask'
import './todo.css'




function TableTasks() {
    const [tasks, setTasks] = useState([
        { title: "mearn", done:false },
        { title: "javaScript",  done:false },
        { title: "css" , done:false},
        { title: "html", done:false },
    ])


    const deletePro = (index) => {
        console.log(index)
        const task = [...tasks]
        task.splice(index, 1)
        console.log(tasks)
        setTasks(task)

    }

    const AddNewTsak=(task)=>{
        const alltasks = [...tasks]
        alltasks.push(task)
        setTasks(alltasks)
    }
    const doneTask = (i)=>{
        const tasksDone=[...tasks]
        tasks[i].done=!tasks[i].done
        setTasks(tasksDone)
        console.log(tasksDone)
    }
    return (
        <>
            <AddNewTask addTask={AddNewTsak}/>
            <h2 className="title">Your Tasks</h2>
        <table className=" col-12 ">
            <thead>
                <tr>
                    <th className="col-1" scope="col">T.N</th>
                    <th className="col-2" scope="col">Title</th>
                    <th className="col-1" scope="col">Done</th>
                    <th className="col-1" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => {
                    return <tr >
                        <th scope="row" >{index + 1}</th>
                        <td key={index}  className={`  ${task.done===true? "doneStyle":""}`} > {task.title} </td>
                        <td > <input type='button'  value='Done ' className='success' onClick={() => doneTask(index)}  /> </td>
                        <td> <input type='button'  className='delete' value='Delete' onClick={() => deletePro(index)} /> </td>

                    </tr>
                })}
            </tbody>
        </table>
        </>



    )
}


export default TableTasks;