import { useState } from "react"

export default function EditTask( {taskList, setTaskList, taskIndex, setEditTask, setUpdatedEditTask} ) {

    const task = taskList[taskIndex]

    const [editTitle, setEditTitle] = useState(task.title)
    const [editStatus, setEditStatus] = useState(task.status)

    const taskListUpdated = [...taskList]
    taskListUpdated[taskIndex].title = editTitle
    taskListUpdated[taskIndex].status = editStatus

    console.log("Task Atualizada: " + taskListUpdated[taskIndex].status)

    function handleEditTask(){
        setTaskList(taskListUpdated)
        setEditTask(false)
        setUpdatedEditTask(true)
    }

    return (
        <div className="new-task">
            <div className="new-task-title">Edit TO-DO</div>
            <label className="title-name">
                Title
                <input 
                    className="title-input"
                    type="text" 
                    title="Title"
                    name="taskTitle"
                    defaultValue={task.title}
                    onChange={(e) => setEditTitle(e.target.value)}>
                </input>
            </label>
            <label className="title-name">
            Status
            <select className="title-input" defaultValue={task.status} onChange={(e)=>setEditStatus(e.target.value)}>
                <option value={'Incomplete'}> Incomplete </option>
                <option value={'Complete'}> Complete </option>
            </select>
            </label>
            <div className="button-position">
            <div className="title-button">
                <button className="button1" onClick={()=>handleEditTask()}> Add Task </button>
                <button className="button1" onClick={()=>setEditTask(false)}> Cancel </button>
            </div>
            </div>
        </div>
    )
}