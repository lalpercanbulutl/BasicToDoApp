import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
uuidv4(); //for initilazing
const TodoWrapper = () => {
    const [todos,setTodos] = useState([])
    const addTodo = todo => {
      
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
          ]);
        //...todos for get to current todos ,then ve add them id with uuidv4
        console.log("value: ",todos)
    }
  return (

    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo} />
       
    </div>
  )
}

export default TodoWrapper
