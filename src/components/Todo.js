import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({tasks, toggleComplete, deleteTodo,EditTodo}) => {//task probunu ekledik .
    
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(tasks.id)} className={`${tasks.completed ? 'completed' : ""}`}> {tasks.task}</p> 
      {/* Eğer tasks.completed true (doğru) ise, sınıf adı "completed" olarak atanır. Eğer task.completed false (yanlış) ise, boş bir dize (empty string) atanır. */}
       
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>EditTodo(tasks.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(tasks.id)}/>
       
      </div>
    </div>
  )
}

export default Todo
