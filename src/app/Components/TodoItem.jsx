import React, { useState } from "react";

export default function TodoItem({ title, completed, todos, setTodos }) {
  const [todo, setTodo] = useState(title);
  const handleDeleteTodo = () => {
    const filteredTodo = todos.filter((todo) => todo.title !== title);
    setTodos(filteredTodo);
  };

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
    const filteredTodo = todos.filter((todo) => todo.title !== title);
    setTodos([...filteredTodo, { title: todo, completed: false }]);
  };

  const handleEditTodo = () => {
    console.log("asdas");
  };

  return (
    <li className={`${completed ? "text-green-600" : ""}`}>
      <span onClick={handleEditTodo} className=' mr-2'>
        <input onChange={handleChangeTodo} value={todo} />
        <button onClick={handleDeleteTodo}>X</button>
      </span>
    </li>
  );
}
