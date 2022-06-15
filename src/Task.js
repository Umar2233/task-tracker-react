import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { data } from './App'

const Task = ({task}) => {

  const onDelete = useContext(data)

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDelete.toggleReminder(task.id)} >
        <h3>{task.text} <FaTimes style={{color : 'red', cursor : 'pointer'}} onClick={() => onDelete.deleteTask(task.id)} /> </h3>
        <p>{task.day}</p>
    </div>
    )
}

export default Task