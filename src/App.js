import Header from './Components/AppHeader'
import Tasks from './Components/AppTask'
import NewTask from './Components/AddTask'
import { useState } from 'react'
import EditTask from './Components/EditTask'

export default function App() {
  return <AppStructure />
}

function AppStructure() {
  const [filter, setFilter] = useState('All')
  const [addTask, setAddTask] = useState(false)
  const [editTask, setEditTask] = useState(false)
  const [taskIndex, setTaskIndex] = useState('')
  const [updatedEditTask, setUpdatedEditTask] = useState(false)
  

  const testList = [
    { id:0, title: 'Learn react', status: 'Incomplete' },
    { id:1, title: 'Iterate lists', status: 'Incomplete' },
    { id:2, title: 'Deal with arrays', status: 'Incomplete' },
    { id:3, title: 'Run 18km', status: 'Complete' }]

    const [taskList, setTaskList] = useState(testList)

    console.log("precisa de atualização? "+updatedEditTask)


  return (
    <div className='App'>
      <div className='header'>
        <Header
          filter={filter} 
          setFilter={setFilter}
          addTask={addTask}
          setAddTask={setAddTask}/>
      </div>
      <div className='task'>
        <Tasks
          filter={filter}
          taskList={taskList}
          setTaskList={setTaskList}
          setEditTask={setEditTask}
          setAddTask={setAddTask}
          setTaskIndex={setTaskIndex}
          updatedEditTask={updatedEditTask} />
      </div>
      <div>
        {addTask && 
        <NewTask 
          addTask={addTask}
          setAddTask={setAddTask}
          taskList={taskList}
          setTaskList={setTaskList}
          />
        }
        {editTask && 
        <EditTask
          taskList={taskList}
          setTaskList={setTaskList}
          taskIndex={taskIndex}
          setEditTask={setEditTask}
          setUpdatedEditTask={setUpdatedEditTask}/>
        }
      </div>
    </div>
  )
}