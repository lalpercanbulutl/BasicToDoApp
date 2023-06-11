import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4(); //for initilazing
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    //...todos for get to current todos ,then ve add them id with uuidv4
    console.log("value: ", todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    //todos map ettik idsi eğer idsi bizim gödnerdiğimiz idsine eşitse ...tpdp ile orjinal todo öğesinin diğer özellikleri kopyalanır ardından completed tesine cevrilir. eğer eşleşmezse todo aynen kalır
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //id ile eşleşmeyen durumlar filtrelenir bunlar ile yeni todos arrayi oluşturulur yani seçili id silinmiş olur
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Do it today or regret it tomorrow</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
        <Todo
          tasks={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          EditTodo={editTodo}
        /> )//tasks diye bir prop oluşturduk bununla taskları gönderiyoruz Todo içine
        //her bir todo listelemek için ,toggleComplete ise üzerinde tıklandığında yapılan görevleri işaretlemek için
      ))}
    </div>
  );
};

export default TodoWrapper;
