import { useState } from "react";

export default function AddTodo({ setTodos, todos }) {
  const [todo, setTodo] = useState();
  const handleInputChange = (event) => {
    const todoObj = { title: event.target.value, completed: false };
    setTodo(todoObj);
  };

  const handleTodoSubmit = () => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <input
        onChange={handleInputChange}
        type='text'
        placeholder='Add new todo'
        className=' mb-2 p-4'
      />
      <button
        onClick={handleTodoSubmit}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 px>4 rounded'
      >
        Add Todo
      </button>
    </div>
  );
}
