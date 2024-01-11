"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const todoItems = [
  { title: "Buy Milk", completed: true },
  { title: "Buy Bread", completed: false },
  { title: "Buy Coffee", completed: false },
];

export default function Todos() {
  const [todos, setTodos] = useState(todoItems);

  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            title={todo.title}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}
