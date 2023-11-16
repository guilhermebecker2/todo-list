import { useState } from "react"

export default function NewTask({addTask, setAddTask, taskList, setTaskList}) {

    // var currentTimestamp = new Date();

    const [status, setStatus] = useState('Incomplete')
    const [title, setTitle] = useState('')

    // let currentTimestamp = Date().toString().slice(4, 24)

    let allowTask = true
    
    if (title === '') {
        allowTask = false
    }

    taskList.map((task) => {
        if (task.title === title) {
            allowTask = false
        } else {
            allowTask = true
        }   
    }

    )
    
    // Argumentos para atualizar a lista
    let id = Math.random()
    const addValues = {id, title, status, currentTimestamp:'teste'}
    const taskListUpdated = [... taskList, addValues]



    function handleNewTask(){
        addValues.currentTimestamp = Date().toString().slice(4, 24)
        setTaskList(taskListUpdated)
        setAddTask(false)
    }

    return (
        <div className="new-task">
            <div className="new-task-title">Add TO-DO</div>
            <label className="title-name" onChange={(e) => setTitle(e.target.value)}>
                Title
                <input 
                    className="title-input"
                    type="text" 
                    title="Title"
                    name="taskTitle">
                </input>
            </label>
            <label className="title-name">
            Status
            <select className="title-input" onChange={(e) => setStatus(e.target.value)}>
                <option value={'Incomplete'}> Incomplete </option>
                <option value={'Complete'}> Complete </option>
            </select>
            </label>
            <div className="button-position">
            <div className="title-button">
                {allowTask && <button className="button1" onClick={handleNewTask}> Add Task </button>}
                <button className="button1" onClick={() => setAddTask(false)}> Cancel </button>
            </div>
            </div>
        </div>
    )
}