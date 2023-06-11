import React,{useState} from 'react'

const TodoForm = ({addTodo}) => { //prop olarak addTodo yazdık 
    const [value,setValue] = useState("")
    const handleChange = (e) => {
       setValue(e.target.value)
      };
    const handleSubmit = (e) => {
        console.log("e: ",value)
        e.preventDefault(); // prevent default action
       addTodo(value) //value'yü addTodo propuna gönderdik bunuda TodoWrapperında kullanabileceğiz
       setValue('') //after submit to delete writings
    };
    

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" className='todo-input' placeholder='What is the task today?' 
    value= {value}
    onChange={handleChange}/>
    <button type='submit' className='todo-btn'>
        Add Task
    </button>
</form>
  )
}

export default TodoForm
