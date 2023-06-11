import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
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
        {todos.map((todo,index) =>(
            <Todo tasks={todo} key={index}/> //tasks diye bir prop oluşturduk bununla taskları gönderiyoruz Todo içine
            //her bir todo listelemek için 
        ) )}
       
    </div>
  )
}

export default TodoWrapper
