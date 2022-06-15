import Header from "./Header";
import Tasks from "./Tasks";
import { createContext, useState } from "react"
import AddTask from "./AddTask";

const data = createContext();

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id : 1, 
            text : 'School Appointment',
            day : 'May 27 2022',
            reminder : true
        },
        {
            id : 2,
            text : 'Doctor Appointment',
            day : 'May 28 2022',
            reminder : false
        }
    ]
)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header click={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}  />}
      <data.Provider value={{deleteTask, toggleReminder}} >
        {tasks.length > 0 ? <Tasks tasks={tasks} /> : 'No Task to Display'}
        </data.Provider>
    </div>
  );
}

export default App;
export {data}
