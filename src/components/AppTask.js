import { useState } from "react"
 
 
export default function Tasks({ filter, taskList, setTaskList, setEditTask, setTaskIndex, updatedEditTask}) {
   
    return taskList.map((task) =>
        <Card
            task={task}
            filter={filter}
            key={task.id}
            setEditTask={setEditTask}
            taskList={taskList}
            setTaskList={setTaskList}
            setTaskIndex={setTaskIndex}
            updatedEditTask={updatedEditTask}/>
    )
}
 
function Card({ task, filter,setEditTask,setTaskIndex,taskList,setTaskList,updatedEditTask}) {
 
    const [status, setStatus] = useState(task.status)
 
    const [check, setCheck] = useState(task.status==='Complete'? true:false)

    if(updatedEditTask) {
        console.log(true)
    }

    console.log("task title: " + task.title + '/ status variável de estado: ' + status + '/ status da task: ' + task.status + '/ valor inicial do check: ' + check)
   
    // console.log("task que está sendo renderizada "+task.title + " " + task.status)
 
 
    // let updatedTaskList = [...taskList]
 
    // function removeObjectWithId(arr, id) {
    //     return arr.filter((obj) => obj.id !== id);
    //   }
 
    const taskIndex = taskList.indexOf(task)
    const updatedTaskList = [...taskList]
 
    function handleDeleteTask(){
        console.log("task index: " + taskIndex)
        updatedTaskList.splice(taskIndex,1)
        setTaskList(updatedTaskList)
    }
 
    function handleEditTask(){
        setEditTask(true)
        setTaskIndex(taskIndex)
    }
   
    if (filter !== 'All' && status !== filter) {
        return
    } else {
        return (
        <div className="card">
            <input
                type="checkbox"
                defaultChecked={check}
                value={check}
                className="checkbox"
                onClick={(e) => {
                    setCheck(e.target.checked)
                    if(e.target.checked) {
                        setStatus('Complete')
                    } else {
                        setStatus('Incomplete')
                    }}}>
            </input>
            <div className="task-title-organizer">
                <span className="task-title">{status === 'Complete' ? <s>{task.title}</s> : task.title}</span>
                <span className="timestamp"> {task.currentTimestamp} </span>
            </div>
            <div className="left-buttons">
                <button
                    className="delete-button"
                    onClick={()=> handleDeleteTask()}>
                    Delete
                </button>
                <button
                    className="delete-button"
                    onClick={()=> handleEditTask()}>
                Edit
                </button>
            </div>
        </div>
    )
        }
}